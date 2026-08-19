"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

// 1. Zod Validation Schema (на английском)
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  trimester: z.enum(["first", "second", "third", "postpartum"], {
    errorMap: () => ({ message: "Please select your stage" }),
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulated API call / Server Delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitted Data:", data);
    alert("Thank you! Your request has been submitted.");
    reset();
  };

  return (
    <section className="py-12 px-6 bg-white rounded-3xl border border-[#F2DFD3] max-w-xl mx-auto my-10 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-medium text-[#412B1A] mb-2 text-center">
        Need help choosing a course?
      </h2>
      <p className="text-[#6E5949] text-center mb-8 text-sm">
        Leave your details below and we&apos;ll help you pick the perfect program for your pregnancy stage.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#412B1A] mb-1">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Jane Doe"
            {...register("fullName")}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-[#F2DFD3] focus:outline-none focus:ring-2 focus:ring-[#412B1A] text-base text-[#412B1A] placeholder:text-[#6E5949]/50"
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#412B1A] mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-[#F2DFD3] focus:outline-none focus:ring-2 focus:ring-[#412B1A] text-base text-[#412B1A] placeholder:text-[#6E5949]/50"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone / Telegram */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#412B1A] mb-1">
            Phone or Telegram *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-[#F2DFD3] focus:outline-none focus:ring-2 focus:ring-[#412B1A] text-base text-[#412B1A] placeholder:text-[#6E5949]/50"
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Stage / Trimester */}
        <div>
          <label htmlFor="trimester" className="block text-sm font-medium text-[#412B1A] mb-1">
            Pregnancy Stage *
          </label>
          <select
            id="trimester"
            {...register("trimester")}
            aria-invalid={errors.trimester ? "true" : "false"}
            aria-describedby={errors.trimester ? "trimester-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-[#F2DFD3] bg-white focus:outline-none focus:ring-2 focus:ring-[#412B1A] text-base text-[#412B1A]"
          >
            <option value="">Select your option</option>
            <option value="first">1st Trimester (Weeks 1-12)</option>
            <option value="second">2nd Trimester (Weeks 13-27)</option>
            <option value="third">3rd Trimester (Weeks 28-40)</option>
            <option value="postpartum">Postpartum / Already Delivered</option>
          </select>
          {errors.trimester && (
            <p id="trimester-error" role="alert" className="text-red-500 text-xs mt-1">
              {errors.trimester.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#412B1A] mb-1">
            Comments or Questions (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us what you'd like to learn or ask..."
            {...register("message")}
            className="w-full px-4 py-3 rounded-xl border border-[#F2DFD3] focus:outline-none focus:ring-2 focus:ring-[#412B1A] text-base text-[#412B1A] placeholder:text-[#6E5949]/50 resize-none"
          />
        </div>

        {/* Submit Button with Loader & WCAG Status */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-[#412B1A] text-white font-medium rounded-xl hover:bg-[#5a3d25] transition duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span role="status" className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting request...</span>
            </span>
          ) : (
            <span>Request Consultation</span>
          )}
        </button>
      </form>
    </section>
  );
}