"use client";
import { Loader2 } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEnrollment } from "@/src/hooks/useEnrollment";

const enrollSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

type EnrollFormData = z.infer<typeof enrollSchema>;

interface EnrollFormProps {
  courseSlug: string;
}

const EnrollForm = ({ courseSlug }: EnrollFormProps) => {
  const { enroll, isLoading, error: apiError, isSuccess } = useEnrollment();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnrollFormData>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: EnrollFormData) => {
    const success = await enroll({
      courseSlug,
      name: data.fullName,
      email: data.email,
      phone: data.phone,
    });

    if (success) {
      reset();
    }
  };

  return (
    <section id="enroll-form" className="w-full bg-[#FFF6F0] py-16 px-6 scroll-mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7A60] bg-[#EFE4DC] px-3 py-1 rounded-full">
            Ready to start?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#412B1A] leading-tight">
            Begin Your Journey to a Calmer, More Confident Birth
          </h2>
          <p className="text-[#7A6251] text-base leading-relaxed">
            Fill out the form to reserve your spot. We’ll send payment details and access instructions straight to your inbox within minutes.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-[#5C4534]">
              <span className="w-2 h-2 rounded-full bg-[#9E7A60]" />
              Instant email delivery with payment options
            </div>
            <div className="flex items-center gap-3 text-sm text-[#5C4534]">
              <span className="w-2 h-2 rounded-full bg-[#9E7A60]" />
              Full lifetime access to course materials
            </div>
            <div className="flex items-center gap-3 text-sm text-[#5C4534]">
              <span className="w-2 h-2 rounded-full bg-[#9E7A60]" />
              Direct support for any questions
            </div>
          </div>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E8D8CD] shadow-sm">
          {isSuccess ? (
            <div className="bg-[#E2F0D9] text-[#2D5A27] p-6 rounded-2xl text-center space-y-2">
              <h3 className="font-semibold text-lg">Application Sent! 🎉</h3>
              <p className="text-sm">
                We have emailed you the payment details. Please check your inbox in 2–3 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <h3 className="text-xl font-semibold text-[#412B1A] mb-4">
                Enrollment Form
              </h3>
              {apiError && (
  <div className="flex items-center gap-2.5 p-3.5 mb-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-xs font-medium shadow-sm animate-in fade-in slide-in-from-top-1 duration-200">
    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
    <span>{apiError}</span>
  </div>
)}
              <div>
                <label className="block text-xs font-medium text-[#7A6251] uppercase mb-1">
                  Full Name
                </label>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Aida Sabyrova"
                  className="w-full px-4 py-3 rounded-xl border border-[#D1C2B5] bg-white text-[#412B1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#412B1A]"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6251] uppercase mb-1">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#D1C2B5] bg-white text-[#412B1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#412B1A]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6251] uppercase mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-[#D1C2B5] bg-white text-[#412B1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#412B1A]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex items-start gap-2 pt-2">
                <input
                  {...register("agreeTerms")}
                  type="checkbox"
                  id="agreeTerms"
                  className="mt-1 h-4 w-4 rounded border-[#D1C2B5] text-[#412B1A]"
                />
                <label htmlFor="agreeTerms" className="text-xs text-[#7A6251]">
                  I agree to the terms and privacy policy
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-xs">{errors.agreeTerms.message}</p>
              )}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#412B1A] text-[#FFF6F0] px-6 py-3 rounded-xl font-medium disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#D5A272]" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Enroll Now"
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default EnrollForm;