"use client";

import Link from "next/link";

interface EnrollButtonProps {
  courseSlug: string;
  isEnrolled?: boolean;
}

const BUTTON_CLASS =
  "block w-full text-center py-4 px-6 bg-[#1F5B58] text-white rounded-full font-medium text-sm uppercase tracking-wide hover:bg-[#194a48] transition shadow-sm";

const EnrollButton = ({ courseSlug, isEnrolled }: EnrollButtonProps) => {
  if (isEnrolled) {
    return (
      <a href="#curriculum" className={BUTTON_CLASS}>
        ✓ Access Course Content
      </a>
    );
  }

  return (
    <div className="space-y-3">
      <a href="#enroll-form" className={BUTTON_CLASS}>
        Enroll Now
      </a>
      <Link href="/#free-class" className={BUTTON_CLASS}>
        Get Free Class
      </Link>
    </div>
  );
};

export default EnrollButton;
