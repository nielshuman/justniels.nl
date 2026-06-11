"use client";

import { useEffect, useRef } from "react";

const sims = [
  {
    title: "Normal parameters",
    src: "/ants/normal.mp4",
    params: {
      "Max. Ants": "110",
      "Noise": "20%",
      "Priority yield radius": "2",
    },
  },
  {
    title: "No priority",
    src: "/ants/nopriority.mp4",
    params: {
      "Max. Ants": "110",
      "Noise": "20%",
      "Priority yield radius": "0",
    },
  },
  {
    title: "High priority radius",
    src: "/ants/wideradius.mp4",
    params: {
      "Max. Ants": "110",
      "Noise": "20%",
      "Priority yield radius": "2",
    },
  },
  {
    title: "High noise",
    src: "/ants/noisy.mp4",
    params: {
      "Max. Ants": "110",
      "Noise": "50%",
      "Priority yield radius": "2",
    },
  },
{
    title: "Large population",
    src: "/ants/manyants.mp4",
    params: {
      "Max. Ants": "250",
      "Noise": "20%",
      "Priority yield radius": "2",
    },
  },
  
];

function VideoBlock({ title, src, params }) {
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
    <div style={{ marginBottom: "44px", width: "100%" }}>
      {/* TITLE */}
      <div
        style={{
          fontSize: "26px",
          fontWeight: 800,
          marginBottom: "12px",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>

      {/* BADGES */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "14px",
        }}
      >
        {Object.entries(params).map(([k, v]) => (
          <div
            key={k}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 10px",
              borderRadius: "999px",
              background:
                "linear-gradient(180deg, #1e1e1e, #141414)",
              border: "1px solid #2a2a2a",
              color: "#e5e5e5",
              fontSize: "12px",
              fontFamily: "system-ui, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ opacity: 0.6 }}>{k}</span>
            <span style={{ opacity: 0.9 }}></span>
            <span style={{ fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>

      {/* VIDEO */}
      <video
        ref={ref}
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        style={{
          width: "100%",
          borderRadius: "14px",
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
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* MAIN TITLE */}
      <h1
        style={{
          fontSize: "38px",
          fontWeight: 900,
          margin: "10px 0 32px",
          textAlign: "center",
          letterSpacing: "-0.03em",
        }}
      >
        Ant Simulation Runs
      </h1>

      <div style={{ width: "100%", maxWidth: "500px" }}>
        {sims.map((sim, i) => (
          <VideoBlock
            key={i}
            title={sim.title}
            src={sim.src}
            params={sim.params}
          />
        ))}
      </div>
    </div>
  );
}