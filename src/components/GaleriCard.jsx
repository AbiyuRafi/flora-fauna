import { useState } from "react";

export default function GalleryCard({ item, index }) {
  const [hov, setHov] = useState(false);

  const gs = [
    { gridColumn: "1 / 3", gridRow: "1 / 3" },
    { gridColumn: "3", gridRow: "1" },
    { gridColumn: "4", gridRow: "1" },
    { gridColumn: "3", gridRow: "2" },
    { gridColumn: "4", gridRow: "2" },
    { gridColumn: "1 / 3", gridRow: "3" },
  ];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...gs[index],
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <img
        src={item.img}
        alt={item.label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hov ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov ? "rgba(27,58,45,0.52)" : "rgba(27,58,45,0.14)",
          transition: "background 0.35s ease",
          display: "flex",
          alignItems: "flex-end",
          padding: 14,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: 13,
            opacity: hov ? 1 : 0,
            transform: hov ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.3s ease",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          {item.label}
        </span>
      </div>
    </div>
  );
}
