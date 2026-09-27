"use client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    try {
      // Реальная отправка на серверный API Route
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseSlug,
          name: data.fullName,
          email: data.email,
          phone: data.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enrollment");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    // w-full выносит секцию на всю ширину, а bg-[#F7F1EC] создаёт мягкий контрастный фон
    <section id="enroll-form" className="w-full bg-[#F7F1EC] py-16 px-6 mt-16 scroll-mt-10 border-t border-[#E8D8CD]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Левая колонка: Заголовок и преимущества */}
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

        {/* Правая колонка: Карточка с формой */}
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

              {/* Name */}
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

              {/* Email */}
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

              {/* Phone */}
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

              {/* Checkbox */}
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

              {/* Submit Button */}
             <button 
  type="submit" 
  disabled={isSubmitting}
  className="bg-[#412B1A] text-[#FFF6F0] px-6 py-3 rounded-xl font-medium disabled:opacity-50 flex items-center justify-center gap-2"
>
  {isSubmitting ? (
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