import { useState } from "react";

export default function BentangAlamCard({ item, onClick, C }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={() => onClick(item)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 22,
        overflow: "hidden",
        cursor: "pointer",
        background: C.cream,
        border: `1.5px solid ${hov ? C.greenBase : "#d7d7d7"}`,
        boxShadow: hov
          ? "0 22px 56px rgba(27,58,45,0.18)"
          : "0 4px 18px rgba(27,58,45,0.08)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          position: "relative",
          height: 240,
          overflow: "hidden",
        }}
      >
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        />

        {/* CATEGORY */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.92)",
              color: C.greenDark,
              borderRadius: 30,
              padding: "5px 14px",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              backdropFilter: "blur(10px)",
            }}
          >
            🏝️ {item.category}
          </span>
        </div>

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.05))",
          }}
        />

        {/* REGION */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: 12,
              margin: 0,
              fontWeight: 600,
            }}
          >
            📍 {item.region}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "20px 22px 24px" }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: C.brownDark,
            margin: "0 0 12px",
          }}
        >
          {item.name}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: C.textMid,
            lineHeight: 1.7,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.desc}
        </p>

        {/* FOOTER */}
        <div
          style={{
            marginTop: 18,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            {item.tags?.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  background: "#edf5ed",
                  color: C.greenDark,
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "5px 10px",
                  borderRadius: 20,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            style={{
              color: C.greenBase,
              fontWeight: 800,
              fontSize: 13,
              transition: "transform 0.25s ease",
              transform: hov ? "translateX(4px)" : "translateX(0)",
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
