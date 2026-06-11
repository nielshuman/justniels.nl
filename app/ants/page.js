"use client";

import { useEffect, useRef } from "react";

const sims = [
  {
    title: "Normal parameters",
    src: "/ants/normal.mp4",
  },
  {
    title: "High population (250 ants)",
    src: "/ants/manyants.mp4",
  },
  {
    title: "High noise (noiseRatio = 0.5)",
    src: "/ants/noisy.mp4",
  },
  {
    title: "No traffic priority rule",
    src: "/ants/nopriority.mp4",
  },
];

function VideoBlock({ title, src }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ marginBottom: "28px", width: "100%" }}>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "8px",
          opacity: 0.85,
          textAlign: "center",
        }}
      >
        {title}
      </div>

      <video
        ref={ref}
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        style={{
          width: "100%",
          borderRadius: "12px",
          background: "#000",
        }}
      />
    </div>
  );
}

export default function AntsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "18px",
          fontWeight: 600,
          margin: "12px 0 24px",
          textAlign: "center",
        }}
      >
        Ant Simulation Runs
      </h1>

      <div style={{ width: "100%", maxWidth: "420px" }}>
        {sims.map((sim, i) => (
          <VideoBlock key={i} title={sim.title} src={sim.src} />
        ))}
      </div>
    </div>
  );
}