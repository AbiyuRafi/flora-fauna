import { useState, useEffect } from "react";
import BentangAlamCard from "./components/BentangAlamCard";
import { BentangAlam } from "./data/BentangAlam";
import FloraCard from "./components/FloraCard";
import { Flora } from "./data/Flora";
import FaunaCard from "./components/FaunaCard";
import { Fauna } from "./data/Fauna";
import GaleriCard from "./components/GaleriCard";
import { GALLERY } from "./data/Galeri";
import hero_mangrove from "./assets/hero_mangrove.JPG";
import { useRef } from "react";

const C = {
  greenDark: "#1b3a2d",
  greenMid: "#2d5a3d",
  greenBase: "#3a7a52",
  greenLight: "#5faa76",
  greenPale: "#d4ead9",
  greenBg: "#e8f4ea",
  brownDark: "#4a2e1a",
  brownMid: "#7a4f2e",
  brownLight: "#c49a6c",
  brownPale: "#f5ede0",
  blueDeep: "#1a3a5c",
  blueMid: "#2e6a9e",
  bluePale: "#ddeef8",
  cream: "#faf7f0",
  textDark: "#1e2d1e",
  textMid: "#3d5c3d",
  textMuted: "#7a9a7a",
};

const NAV_LINKS = [
  "Beranda",
  "Bentang Alam",
  "Flora",
  "Fauna",
  "Galeri",
  "Video",
];

const HERO_SLIDES = [
  {
    img: hero_mangrove,
    title: "Bentang Alam Eksotis",
    subtitle: "Pantai, mangrove, hingga savana yang memukau",
    tag: "Bentang Alam",
  },
  {
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1600&q=80",
    title: "Rumah Satwa Liar",
    subtitle: "Ribuan spesies hidup di Baluran",
    tag: "Fauna",
  },
  {
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1600&q=80",
    title: "Keanekaragaman Flora",
    subtitle: "Tumbuhan potensial yang kaya akan manfaat",
    tag: "Flora",
  },
];

const VIDEOS = [
  {
    id: 2,
    title: "Kehidupan Bawah Laut Raja Ampat",
    duration: "18:22",
    views: "4.1 Juta",
    thumb:
      "https://images.unsplash.com/photo-1559548331-f9cb98280344?w=800&q=80",
    category: "Fauna Laut",
  },
  {
    id: 3,
    title: "Migrasi Burung Cendrawasih Papua",
    duration: "8:57",
    views: "890 Ribu",
    thumb:
      "https://images.unsplash.com/photo-1552727131-5fc6af00c5e1?w=800&q=80",
    category: "Burung",
  },
  {
    id: 4,
    title: "Rafflesia: Bunga Terbesar Dunia",
    duration: "21:05",
    views: "1.7 Juta",
    thumb:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    category: "Flora Langka",
  },
];

const STATS = [
  { value: "±42 KM", label: "Garis Pantai", icon: "🏝️" },
  { value: "750", label: "Jenis Tumbuhan", icon: "🌿" },
  { value: "47", label: "Spesies Fauna Dilindungi", icon: "🦁" },
];
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function Divider({ light }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          height: 2,
          width: 30,
          background: light ? C.brownLight : C.brownMid,
          borderRadius: 2,
        }}
      />
      <div
        style={{
          height: 6,
          width: 6,
          borderRadius: "50%",
          background: light ? C.brownLight : C.brownMid,
        }}
      />
      <div
        style={{
          height: 2,
          width: 30,
          background: light ? C.brownLight : C.brownMid,
          borderRadius: 2,
        }}
      />
    </div>
  );
}
/* ─── VIDEO CARD ─────────────────────────────────────────────────── */
function VideoCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        background: C.greenDark,
        boxShadow: hov
          ? "0 22px 55px rgba(27,58,45,0.3)"
          : "0 6px 22px rgba(27,58,45,0.14)",
        transform: hov ? "scale(1.025)" : "scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ position: "relative", paddingBottom: "56.25%" }}>
        <img
          src={item.thumb}
          alt={item.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hov ? 0.62 : 0.82,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(27,58,45,0.88) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: hov ? C.cream : "rgba(250,247,240,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
              transform: hov ? "scale(1.14)" : "scale(1)",
              transition: "all 0.25s ease",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "9px solid transparent",
                borderBottom: "9px solid transparent",
                borderLeft: `17px solid ${C.brownDark}`,
                marginLeft: 4,
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "rgba(27,58,45,0.88)",
            color: C.greenPale,
            fontSize: 11,
            fontWeight: 800,
            padding: "3px 9px",
            borderRadius: 7,
          }}
        >
          {item.duration}
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: `${C.brownMid}cc`,
            color: "#fff8e8",
            fontSize: 10.5,
            fontWeight: 800,
            padding: "3px 10px",
            borderRadius: 20,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {item.category}
        </div>
      </div>
      <div style={{ padding: "14px 18px 18px", background: C.greenMid }}>
        <h4
          style={{
            color: C.greenPale,
            fontSize: 14.5,
            fontWeight: 700,
            margin: "0 0 6px",
            lineHeight: 1.4,
          }}
        >
          {item.title}
        </h4>
        <p style={{ color: `${C.greenPale}88`, fontSize: 12, margin: 0 }}>
          👁️ {item.views} penonton
        </p>
      </div>
    </div>
  );
}
/* ─── MODAL ──────────────────────────────────────────────────────── */
function Modal({ item, type, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(27,58,45,0.72)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: C.cream,
          borderRadius: 28,
          maxWidth: 680,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
          position: "relative",
          boxShadow: "0 40px 100px rgba(27,58,45,0.4)",
          border: `2px solid ${C.brownLight}`,
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 2,
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "none",
            background: "rgba(27,58,45,0.65)",
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: "26px 26px 0 0",
          }}
        />

        {/* CONTENT */}
        <div style={{ padding: "26px 30px 32px" }}>
          {/* STATUS */}
          {type === "fauna" && (
            <div style={{ marginBottom: 12 }}>
              <span
                style={{
                  background: item.sbg,
                  color: item.sc,
                  border: `1px solid ${item.sc}44`,
                  borderRadius: 20,
                  padding: "4px 14px",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                {item.status}
              </span>
            </div>
          )}

          {/* TITLE */}
          <h2
            style={{
              fontSize: 26,
              fontWeight: 900,
              color: C.brownDark,
              margin: "0 0 4px",
            }}
          >
            {item.name}
          </h2>

          {/* LATIN NAME */}
          <p
            style={{
              fontSize: 14,
              color: C.brownMid,
              fontStyle: "italic",
              margin: "0 0 16px",
            }}
          >
            {item.latin}
          </p>

          {/* TAG INFO */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                background: C.greenPale,
                color: C.greenDark,
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              📍 {item.region}
            </span>

            <span
              style={{
                background: C.brownPale,
                color: C.brownDark,
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              🏷️ {item.category}
            </span>
          </div>

          {/* DESCRIPTION */}
          <div
            style={{
              marginTop: 6,
              color: C.textDark,
              fontSize: 15.5,
              lineHeight: 1.9,
            }}
          >
            <ul
              style={{
                paddingLeft: 24,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {(Array.isArray(item.desc) ? item.desc : [item.desc]).map(
                (text, index) => (
                  <li
                    key={index}
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    {text}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── APP ────────────────────────────────────────────────────────── */
export default function App() {
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("Flora");
  const [modal, setModal] = useState(null);
  const [modalType, setModalType] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollY = useScrollY();
  const [showAll, setShowAll] = useState(false);
  const gridTopRef = useRef(null);
  const [scrollBack, setScrollBack] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    if (scrollBack && !showAll) {
      const el = document.getElementById("bentang-alam");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showAll, scrollBack]);

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => clearInterval(t);
  }, []);

  const scrolled = scrollY > 60;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColumns(2);
      } else if (window.innerWidth <= 1200) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: C.greenBg,
        minHeight: "100vh",
        color: C.textDark,
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? `${C.greenDark}f5` : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 4px 28px rgba(27,58,45,0.35)" : "none",
          transition: "all 0.4s ease",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 26 }}>🌿</span>
            <span
              style={{
                fontSize: 19,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: -0.5,
              }}
            >
              Pesona<span style={{ color: C.brownLight }}>Labuhan</span>Merak
            </span>
          </div>
          <div className="desk-nav" style={{ display: "flex", gap: 4 }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => {
                  // FLORA
                  if (l === "Flora") {
                    setActiveTab("Flora");

                    document
                      .getElementById("bentang-alam")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  // FAUNA
                  else if (l === "Fauna") {
                    setActiveTab("Fauna");

                    document
                      .getElementById("bentang-alam")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  // BENTANG ALAM
                  else if (l === "Bentang Alam") {
                    setActiveTab("Bentang Alam");

                    document
                      .getElementById("bentang-alam")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  // SECTION LAIN
                  else {
                    document
                      .getElementById(l.toLowerCase().replace(/\s+/g, "-"))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  color: "rgba(255,255,255,0.82)",
                  background: "transparent",
                  border: "none",
                  padding: "7px 15px",
                  borderRadius: 30,
                  fontSize: 13.5,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.12)";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "rgba(255,255,255,0.82)";
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            className="mob-btn"
            onClick={() => setMobileMenu((m) => !m)}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
              borderRadius: 10,
              padding: "7px 11px",
            }}
          >
            ☰
          </button>
        </div>
        {mobileMenu && (
          <div
            style={{
              background: `${C.greenDark}fc`,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              padding: "12px 0",
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setMobileMenu(false);

                  // FLORA
                  if (l === "Flora") {
                    setActiveTab("Flora");

                    document
                      .getElementById("bentang-alam")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  // FAUNA
                  else if (l === "Fauna") {
                    setActiveTab("Fauna");

                    document
                      .getElementById("bentang-alam")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  // BENTANG ALAM
                  else if (l === "Bentang Alam") {
                    setActiveTab("Bentang Alam");

                    document
                      .getElementById("bentang-alam")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }

                  // SECTION LAIN
                  else {
                    document
                      .getElementById(l.toLowerCase().replace(/\s+/g, "-"))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.85)",
                  padding: "11px 24px",
                  fontSize: 14.5,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.08)";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "rgba(255,255,255,0.85)";
                }}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="beranda"
        style={{ height: "100vh", position: "relative", overflow: "hidden" }}
      >
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === slide ? 1 : 0,
              transition: "opacity 1.3s ease",
              pointerEvents: i === slide ? "auto" : "none",
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(27,58,45,0.3) 0%, rgba(27,58,45,0.72) 100%)",
              }}
            />
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <span
            style={{
              background: C.brownLight,
              color: C.brownDark,
              borderRadius: 20,
              padding: "5px 18px",
              fontSize: 11.5,
              fontWeight: 900,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            {HERO_SLIDES[slide].tag}
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(38px,7vw,90px)",
              fontWeight: 900,
              margin: "0 0 16px",
              lineHeight: 1.08,
              textShadow: "0 4px 32px rgba(0,0,0,0.45)",
              letterSpacing: -2,
            }}
          >
            {HERO_SLIDES[slide].title}
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.84)",
              fontSize: "clamp(16px,2.4vw,21px)",
              margin: "0 0 42px",
              maxWidth: 540,
            }}
          >
            {HERO_SLIDES[slide].subtitle}
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href="#bentang-alam"
              onClick={() => setActiveTab("Bentang Alam")}
              style={{
                background: C.brownLight,
                color: C.brownDark,
                textDecoration: "none",
                padding: "14px 38px",
                borderRadius: 50,
                fontSize: 14.5,
                fontWeight: 800,
                boxShadow: "0 8px 28px rgba(196,154,108,0.45)",
              }}
            >
              Jelajahi Sekarang
            </a>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
          }}
        >
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: i === slide ? 30 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  i === slide ? C.brownLight : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 34,
            right: 32,
            color: "rgba(255,255,255,0.5)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2.5,
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Scroll ↓
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: C.greenDark, padding: "56px 5%" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
              <div
                style={{
                  fontSize: "clamp(26px,3.5vw,42px)",
                  fontWeight: 900,
                  color: C.brownLight,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13.5,
                  marginTop: 7,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLORA / FAUNA */}
      <section
        id="bentang-alam"
        style={{
          padding: "88px 5%",
          background: C.greenBg,
          scrollMarginTop: 80,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Divider />

            <span
              style={{
                color: C.brownMid,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Keanekaragaman Alam
            </span>

            <h2
              style={{
                fontSize: "clamp(28px,5vw,52px)",
                fontWeight: 900,
                margin: "14px 0 16px",
                letterSpacing: -1,
                color: C.brownDark,
              }}
            >
              Eksplorasi Bentang Alam, Flora & Fauna
            </h2>

            <p
              style={{
                color: C.textMid,
                fontSize: 16.5,
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Indonesia memiliki kekayaan alam luar biasa mulai dari bentang
              alam, tumbuhan khas, hingga satwa endemik yang mempesona
            </p>
          </div>

          {/* TAB BUTTON */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 44,
              flexWrap: "wrap",
            }}
          >
            {["Bentang Alam", "Flora", "Fauna"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 34px",
                  borderRadius: 50,
                  border: `2px solid ${
                    activeTab === tab ? C.greenBase : "#c4d4c4"
                  }`,
                  cursor: "pointer",
                  fontSize: 14.5,
                  fontWeight: 800,
                  background: activeTab === tab ? C.greenDark : C.cream,
                  color: activeTab === tab ? C.brownLight : C.textMid,
                  boxShadow:
                    activeTab === tab
                      ? "0 8px 24px rgba(27,58,45,0.25)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {tab === "Bentang Alam" ? "🏝️" : tab === "Flora" ? "🌿" : "🦁"}{" "}
                {tab}
              </button>
            ))}
          </div>

          {/* BENTANG ALAM */}
          {activeTab === "Bentang Alam" ? (
            <>
              <div
                ref={gridTopRef}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                {(showAll ? BentangAlam : BentangAlam.slice(0, 6)).map(
                  (item) => (
                    <BentangAlamCard
                      key={item.id}
                      item={item}
                      C={C}
                      onClick={(i) => {
                        setModal(i);
                        setModalType("bentang");
                      }}
                    />
                  ),
                )}
              </div>

              {BentangAlam.length > 6 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 42,
                  }}
                >
                  <button
                    onClick={() => {
                      if (showAll) {
                        setScrollBack(true);
                        setShowAll(false);
                      } else {
                        setShowAll(true);
                      }
                    }}
                    style={{
                      padding: "14px 34px",
                      borderRadius: 999,
                      border: "none",
                      background: C.greenDark,
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 14,
                      cursor: "pointer",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {showAll ? "Lihat Lebih Sedikit" : "Lihat Semua"}
                  </button>
                </div>
              )}
            </>
          ) : activeTab === "Flora" ? (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 26,
                  alignItems: "start",
                }}
              >
                {(showAll ? Flora : Flora.slice(0, 6)).map((item) => (
                  <FloraCard
                    key={item.id}
                    item={item}
                    C={C}
                    onClick={(i) => {
                      setModal(i);
                      setModalType("flora");
                    }}
                  />
                ))}
              </div>

              {Flora.length > 6 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 42,
                  }}
                >
                  <button
                    onClick={() => {
                      if (showAll) {
                        setScrollBack(true);
                        setShowAll(false);
                      } else {
                        setShowAll(true);
                      }
                    }}
                    style={{
                      padding: "14px 34px",
                      borderRadius: 999,
                      border: "none",
                      background: C.greenDark,
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 14,
                      cursor: "pointer",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {showAll ? "Lihat Lebih Sedikit" : "Lihat Semua"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div
                id="fauna"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 22,
                  alignItems: "start",
                }}
              >
                {(showAll ? Fauna : Fauna.slice(0, 6)).map((item) => (
                  <FaunaCard
                    key={item.id}
                    item={item}
                    C={C}
                    onClick={(i) => {
                      setModal(i);
                      setModalType("fauna");
                    }}
                  />
                ))}
              </div>

              {Fauna.length > 6 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 42,
                  }}
                >
                  <button
                    onClick={() => {
                      if (showAll) {
                        setScrollBack(true);
                        setShowAll(false);
                      } else {
                        setShowAll(true);
                      }
                    }}
                    style={{
                      padding: "14px 34px",
                      borderRadius: 999,
                      border: "none",
                      background: C.greenDark,
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 14,
                      cursor: "pointer",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {showAll ? "Lihat Lebih Sedikit" : "Lihat Semua"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="galeri"
        style={{ padding: "80px 5%", background: C.greenMid }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>...</div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 195px)",
              gap: 12,
            }}
          >
            {GALLERY.slice(0, 8).map((g, i) => (
              <GaleriCard key={i} item={g} index={i} />
            ))}
          </div>

          {/* BUTTON */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <button
              onClick={() => setOpenGallery(true)}
              style={{
                padding: "14px 30px",
                borderRadius: 999,
                border: "none",
                background: C.brownLight,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "0.3s ease",
                boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Lihat Semua →
            </button>
          </div>

          {/* MODAL */}
          {openGallery && (
            <div
              onClick={() => setOpenGallery(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.88)",
                zIndex: 9999,
                overflowY: "auto",
                padding: 40,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: 1400,
                  margin: "0 auto",
                }}
              >
                {/* HEADER MODAL */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <h2
                    style={{
                      color: "#fff",
                      fontSize: 36,
                      fontWeight: 900,
                    }}
                  >
                    Semua Galeri
                  </h2>

                  <button
                    onClick={() => setOpenGallery(false)}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      border: "none",
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontSize: 24,
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </div>

                {/* GRID FULL */}
                <div
                  style={{
                    columnCount: columns,
                  }}
                >
                  {GALLERY.map((g, i) => (
                    <div
                      key={i}
                      style={{
                        breakInside: "avoid",
                        marginBottom: 16,
                        borderRadius: 22,
                        overflow: "hidden",
                        background: "#111",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                      }}
                    >
                      <img
                        src={g.img}
                        alt={g.title || `gallery-${i}`}
                        style={{
                          width: "100%",
                          display: "block",
                          objectFit: "cover",
                        }}
                      />

                      {(g.title || g.desc) && (
                        <div
                          style={{
                            padding: 14,
                            background: "#fff",
                          }}
                        >
                          {g.title && (
                            <h4
                              style={{
                                margin: "0 0 6px",
                                fontSize: 15,
                                fontWeight: 800,
                                color: C.brownDark,
                              }}
                            >
                              {g.title}
                            </h4>
                          )}

                          {g.desc && (
                            <p
                              style={{
                                margin: 0,
                                fontSize: 13,
                                lineHeight: 1.6,
                                color: C.textMid,
                              }}
                            >
                              {g.desc}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" style={{ padding: "80px 5%", background: C.greenBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Divider />
            <span
              style={{
                color: C.brownMid,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Video Dokumenter
            </span>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,50px)",
                fontWeight: 900,
                margin: "14px 0 14px",
                letterSpacing: -1,
                color: C.brownDark,
              }}
            >
              Saksikan Alam Bercerita
            </h2>
            <p
              style={{
                color: C.textMid,
                fontSize: 16,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Dokumenter pilihan tentang keajaiban alam flora dan fauna
              Indonesia
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: 24,
            }}
          >
            {VIDEOS.map((v) => (
              <VideoCard key={v.id} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: C.greenDark,
          color: "rgba(255,255,255,0.6)",
          padding: "60px 5% 36px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 40,
              marginBottom: 40,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <span style={{ fontSize: 22 }}>🌿</span>
                <span style={{ fontSize: 17, fontWeight: 900, color: "#fff" }}>
                  Pesona<span style={{ color: C.brownLight }}>Labuhan </span>Merak
                </span>
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.72,
                  color: "rgba(255,255,255,0.42)",
                  margin: 0,
                }}
              >
                Platform edukasi keanekaragaman hayati Indonesia yang
                menakjubkan.
              </p>
            </div>
            {[
              {
                title: "Eksplorasi",
                links: ["Flora", "Fauna", "Galeri"],
              },
              {
                title: "Informasi",
                links: ["Tentang Kami", "Konservasi", "Penelitian", "Kontak"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    color: C.brownLight,
                    fontWeight: 800,
                    marginBottom: 14,
                    fontSize: 14,
                    margin: "0 0 14px",
                  }}
                >
                  {col.title}
                </h4>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.42)",
                      textDecoration: "none",
                      fontSize: 13.5,
                      marginBottom: 9,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = C.brownLight)}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.42)")
                    }
                  >
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: 22,
              textAlign: "center",
              color: "rgba(255,255,255,0.25)",
              fontSize: 12.5,
            }}
          >
            © 2026 Pesona Labuhan Merak. All rights reserved.
          </div>
        </div>
      </footer>

      {modal && (
        <Modal item={modal} type={modalType} onClose={() => setModal(null)} />
      )}

      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 768px) { .desk-nav { display: none !important; } }
        @media (min-width: 769px) { .mob-btn { display: none !important; } }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${C.greenPale}; }
        ::-webkit-scrollbar-thumb { background: ${C.greenBase}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.brownMid}; }
      `}</style>
    </div>
  );
}
