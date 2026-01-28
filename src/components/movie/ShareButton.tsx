"use client";

import { useState } from "react";

type ShareButtonProps = {
  tmdbId: number;
};

export default function ShareButton({ tmdbId }: ShareButtonProps) {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    setMessage("");
    try {
      const url = `${window.location.origin}/movie/${tmdbId}`;
      await navigator.clipboard.writeText(url);
      setMessage("URLをコピーしました");
    } catch {
      setMessage("コピーに失敗しました");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 14px",
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        シェア
      </button>

      {message && (
        <p style={{ marginTop: "8px", color: "#333", fontSize: "12px" }}>
          {message}
        </p>
      )}
    </div>
  );
}
