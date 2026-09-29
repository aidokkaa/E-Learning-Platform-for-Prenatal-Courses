
import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized. Please sign in first." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { courseSlug, courseName } = body;

    if (!courseSlug) {
      return NextResponse.json(
        { error: "Course slug is required." },
        { status: 400 }
      );
    }


    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const primaryEmail = user.emailAddresses.find(
      (email) => email.id === user.primaryEmailAddressId
    )?.emailAddress;

    if (!primaryEmail) {
      return NextResponse.json(
        { error: "Primary email not found." },
        { status: 400 }
      );
    }

    const currentPending = (user.publicMetadata?.pendingCourses as string[]) || [];

    if (!currentPending.includes(courseSlug)) {
      const updatedPending = [...currentPending, courseSlug];

      await client.users.updateUserMetadata(userId, {
        publicMetadata: {
          ...user.publicMetadata,
          pendingCourses: updatedPending,
        },
      });
    }

    const displayCourseName = courseName || courseSlug.toUpperCase();

    await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: primaryEmail,
      subject: `Enrollment Application Received - ${displayCourseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #2563eb;">Application Received! 🎉</h2>
          <p>Hello ${user.firstName || "Student"},</p>
          <p>Thank you for applying for the course: <strong>${displayCourseName}</strong>.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <h3>Step-by-Step Payment Instructions:</h3>
          <ol style="padding-left: 20px;">
            <li style="margin-bottom: 10px;">
              <strong>Complete Payment:</strong> Please transfer the payment amount to our official details:
              <br/><em>Bank: Zelle / Kaspi / Bank Transfer</em>
              <br/><em>Account / Phone: +1 (555) 019-2834</em>
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Send Payment Receipt:</strong> Reply directly to this email or send a screenshot of your receipt to <code>support@yourdomain.com</code>.
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Verification:</strong> Our manager will manually review your receipt within 24 hours.
            </li>
          </ol>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
              📌 Once verified, you will receive an active access link with unlocked course modules directly in your inbox.
            </p>
          </div>
          
          <p style="margin-top: 30px;">Best regards,<br/><strong>EduPreg Support Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Application processed successfully.",
    });
  } catch (error) {
    console.error("Enrollment Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}