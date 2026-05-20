"use client";

import { useCallback, useState } from "react";

type CaseStudyVideoEmbedProps = {
  embedId: string;
  title: string;
};

/**
 * YouTube’s embed UI shows the channel avatar from their CDN; until it updates,
 * users often see a generic initial. We show the official *video* thumbnail with
 * a play overlay first — only the iframe loads after click, so the landing view
 * stays on-brand and professional.
 */
export function CaseStudyVideoEmbed({ embedId, title }: CaseStudyVideoEmbedProps) {
  const [active, setActive] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`
  );

  const onThumbError = useCallback(() => {
    setThumbSrc(`https://img.youtube.com/vi/${embedId}/hqdefault.jpg`);
  }, [embedId]);

  const start = useCallback(() => setActive(true), []);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${embedId}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={start}
      aria-label={`Play video: ${title}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        border: "none",
        cursor: "pointer",
        background: "#0a0a0a",
        display: "block",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbSrc}
        alt=""
        onError={onThumbError}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "rgba(220, 38, 38, 0.95)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
