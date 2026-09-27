"use client";

import Link from "next/link";

interface EnrollButtonProps {
  courseSlug: string;
  isEnrolled?: boolean;
}

const EnrollButton = ({ courseSlug, isEnrolled }: EnrollButtonProps) => {
  if (isEnrolled) {
    return (
      <a
        href="#curriculum"
        className="block w-full text-center py-4 px-6 bg-[#2D5A27] text-white rounded-full font-medium text-sm uppercase tracking-wide hover:bg-[#23471f] transition shadow-sm"
      >
        ✓ Access Course Content
      </a>
    );
  }

  return (
    <a
      href="#enroll-form"
      className="block w-full text-center py-4 px-6 bg-[#412B1A] text-[#FFF6F0] rounded-full font-medium text-sm uppercase tracking-wide hover:opacity-90 transition shadow-sm"
    >
      Enroll Now
    </a>
  );
};

export default EnrollButton;