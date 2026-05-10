import { useState, useEffect } from "react";
import BentangAlamCard from "./components/BentangAlamCard";
import { BentangAlam } from "./data/BentangAlam";
import FloraCard from "./components/FloraCard";
import { Flora } from "./data/Flora";
import FaunaCard from "./components/FaunaCard";
import { Fauna } from "./data/Fauna";
import hero_mangrove from "./assets/hero_mangrove.JPG";
import { useRef } from "react";

const C = {
  greenDark: "#1b3a2d", // navbar, footer
  greenMid: "#2d5a3d", // gallery section bg
  greenBase: "#3a7a52", // primary accent / buttons
  greenLight: "#5faa76", // hover highlights
  greenPale: "#d4ead9", // pale tint text on dark
  greenBg: "#e8f4ea", // ← main page background
  brownDark: "#4a2e1a", // headings
  brownMid: "#7a4f2e", // sub-labels
  brownLight: "#c49a6c", // accent / CTA
  brownPale: "#f5ede0", // ekosistem section bg
  blueDeep: "#1a3a5c",
  blueMid: "#2e6a9e",
  bluePale: "#ddeef8",
  cream: "#faf7f0", // card surfaces
  textDark: "#1e2d1e",
  textMid: "#3d5c3d",
  textMuted: "#7a9a7a",
};

const NAV_LINKS = [
  "Beranda",
  "Bentang Alam",
  "Flora",
  "Fauna",
  "Ekosistem",
  "Galeri",
  "Video",
];

const HERO_SLIDES = [
  {
    img: hero_mangrove,
    title: "Bentang Alam Eksotis",
    subtitle: "Pantai, laguna, dan pesona alam pesisir yang memukau",
    tag: "Bentang Alam",
  },
  {
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1600&q=80",
    title: "Dunia Satwa Liar",
    subtitle: "Jutaan spesies menunggu untuk ditemukan",
    tag: "Fauna",
  },
  {
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1600&q=80",
    title: "Taman Bunga Abadi",
    subtitle: "Keanekaragaman hayati yang tak ternilai",
    tag: "Flora",
  },
];


const VIDEOS = [
  {
    id: 1,
    title: "Hutan Hujan Tropis Indonesia",
    duration: "12:34",
    views: "2.3 Juta",
    thumb:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    category: "Ekosistem",
  },
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
  { value: "17.000+", label: "Pulau Nusantara", icon: "🏝️" },
  { value: "40.000+", label: "Spesies Tumbuhan", icon: "🌿" },
  { value: "300.000+", label: "Spesies Hewan", icon: "🦁" },
  { value: "10%", label: "Spesies Dunia", icon: "🌍" },
];

const GALLERY = [
  {
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    label: "Hutan Tropis",
  },
  {
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=80",
    label: "Satwa Liar",
  },
  {
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    label: "Bunga Liar",
  },
  {
    img: "https://images.unsplash.com/photo-1559548331-f9cb98280344?w=400&q=80",
    label: "Reptil",
  },
  {
    img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80",
    label: "Flora Eksotis",
  },
  {
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    label: "Cahaya Hutan",
  },
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

/* ─── GALLERY ITEM ───────────────────────────────────────────────── */
function GalleryItem({ item, index }) {
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

  // Scroll ke #biodiversity saat showAll jadi false
  useEffect(() => {
    if (scrollBack && !showAll) {
      const el = document.getElementById("biodiversity");
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
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  color: "rgba(255,255,255,0.82)",
                  textDecoration: "none",
                  padding: "7px 15px",
                  borderRadius: 30,
                  fontSize: 13.5,
                  fontWeight: 500,
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
              </a>
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
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  padding: "11px 24px",
                  fontSize: 14.5,
                }}
              >
                {l}
              </a>
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
              href="#biodiversity"
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
            <a
              href="#video"
              style={{
                background: "rgba(255,255,255,0.14)",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 38px",
                borderRadius: 50,
                fontSize: 14.5,
                fontWeight: 700,
                border: "2px solid rgba(255,255,255,0.38)",
                backdropFilter: "blur(8px)",
              }}
            >
              ▶ Tonton Video
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
        id="biodiversity"
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
                  gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
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
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
                  background: C.brownLight,
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  height: 6,
                  width: 6,
                  borderRadius: "50%",
                  background: C.brownLight,
                }}
              />
              <div
                style={{
                  height: 2,
                  width: 30,
                  background: C.brownLight,
                  borderRadius: 2,
                }}
              />
            </div>
            <span
              style={{
                color: C.brownLight,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Galeri Foto
            </span>
            <h2
              style={{
                fontSize: "clamp(28px,5vw,50px)",
                fontWeight: 900,
                margin: "14px 0 0",
                color: C.greenPale,
                letterSpacing: -1,
              }}
            >
              Keindahan Alam Indonesia
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 195px)",
              gap: 12,
            }}
          >
            {GALLERY.map((g, i) => (
              <GalleryItem key={i} item={g} index={i} />
            ))}
          </div>
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

      {/* EKOSISTEM */}
      <section
        id="ekosistem"
        style={{ padding: "88px 5%", background: C.brownPale }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
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
                Mengapa Penting
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px,4vw,46px)",
                  fontWeight: 900,
                  margin: "14px 0 20px",
                  letterSpacing: -0.5,
                  lineHeight: 1.14,
                  color: C.brownDark,
                }}
              >
                Lindungi Ekosistem,
                <br />
                <span style={{ color: C.greenBase }}>Jaga Masa Depan</span>
              </h2>
              <p
                style={{
                  color: C.textMid,
                  fontSize: 15.5,
                  lineHeight: 1.82,
                  marginBottom: 30,
                }}
              >
                Indonesia memiliki 3 dari 25 biodiversity hotspot dunia. Hutan
                tropisnya menyimpan lebih dari 10% keanekaragaman hayati dunia,
                namun terancam oleh deforestasi dan perubahan iklim.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {[
                  {
                    icon: "🌳",
                    title: "Hutan Hujan",
                    sub: "Paru-paru dunia",
                    bg: C.greenPale,
                    br: "#b0d8b8",
                  },
                  {
                    icon: "🌊",
                    title: "Terumbu Karang",
                    sub: "Surga bawah laut",
                    bg: C.bluePale,
                    br: "#a0c8e0",
                  },
                  {
                    icon: "🦋",
                    title: "Keanekaragaman",
                    sub: "Jutaan spesies unik",
                    bg: "#f0ead8",
                    br: C.brownLight,
                  },
                  {
                    icon: "🌱",
                    title: "Konservasi",
                    sub: "Pelestarian aktif",
                    bg: C.greenPale,
                    br: "#b0d8b8",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    style={{
                      background: f.bg,
                      borderRadius: 14,
                      padding: "16px 18px",
                      border: `1.5px solid ${f.br}`,
                    }}
                  >
                    <div style={{ fontSize: 26, marginBottom: 6 }}>
                      {f.icon}
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: C.brownDark,
                        marginBottom: 2,
                        fontSize: 14,
                      }}
                    >
                      {f.title}
                    </div>
                    <div style={{ fontSize: 12.5, color: C.textMid }}>
                      {f.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80"
                alt="Ekosistem"
                style={{
                  width: "100%",
                  borderRadius: 24,
                  boxShadow: "0 24px 72px rgba(27,58,45,0.22)",
                  border: `3px solid ${C.brownLight}`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -22,
                  left: -22,
                  background: C.greenDark,
                  color: C.brownLight,
                  borderRadius: 18,
                  padding: "16px 24px",
                  boxShadow: "0 10px 36px rgba(27,58,45,0.4)",
                  border: `2px solid ${C.brownLight}`,
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 900 }}>40.000+</div>
                <div
                  style={{ fontSize: 12.5, color: C.greenPale, marginTop: 2 }}
                >
                  Spesies Tumbuhan
                </div>
              </div>
            </div>
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
                  Flora<span style={{ color: C.brownLight }}>Fauna</span>
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
                links: ["Flora", "Fauna", "Ekosistem", "Galeri"],
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
            © 2026 FloraFauna Indonesia
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
