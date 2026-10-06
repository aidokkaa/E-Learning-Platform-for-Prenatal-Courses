import type { Metadata } from "next";
import FAQSection from "@/src/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about course access, payment, refunds and how Aura Mama courses work.",
  alternates: { canonical: "/faq" },
};

const page = () => {
  return (
    <div>
      <FAQSection />
    </div>
  );
};

export default page;