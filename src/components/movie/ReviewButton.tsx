"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ReviewButtonProps = {
  tmdbId: number;
  isLoggedIn: boolean;
};

export default function ReviewButton({
  tmdbId,
  isLoggedIn,
}: ReviewButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setErrorMessage("");

    if (!isLoggedIn) {
      setErrorMessage("ログインが必要です");
      return;
    }

    setIsLoading(true);

    router.push(`/movie/${tmdbId}/review`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isLoading}
        style={{
          padding: "10px 14px",
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#fff",
          cursor: isLoading ? "not-allowed" : "pointer",
          opacity: isLoading ? 0.6 : 1,
        }}
      >
        レビューする
      </button>

      {errorMessage ? (
        <p style={{ marginTop: "8px", color: "crimson", fontSize: "12px" }}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
