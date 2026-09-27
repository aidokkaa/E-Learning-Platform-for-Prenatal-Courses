import { useState } from "react";

export interface EnrollPayload {
  courseSlug: string;
  name: string;
  email: string;
  phone: string;
}

export function useEnrollment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const enroll = async (payload: EnrollPayload) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit enrollment");
      }

      setIsSuccess(true);
      return true;
    } catch (err: any) {
      const message = err.message || "Something went wrong";
      setError(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { enroll, isLoading, error, isSuccess, setIsSuccess };
}