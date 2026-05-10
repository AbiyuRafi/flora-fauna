import { useState, useEffect } from "react";
import BentangAlamCard from "./components/BentangAlamCard";
import { BentangAlam } from "./data/BentangAlam";
import hero_mangrove from "./assets/hero_mangrove.JPG";

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

const FLORA = [
  {
    id: 1,
    name: "Rafflesia Arnoldii",
    latin: "Rafflesia arnoldii",
    category: "Bunga Langka",
    region: "Sumatera",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    desc: "Bunga terbesar di dunia dengan diameter hingga 1 meter, tumbuh di hutan hujan Sumatera.",
    bbg: "#7a1a1a",
    btx: "#fde8e8",
  },
  {
    id: 2,
    name: "Anggrek Hitam",
    latin: "Coelogyne pandurata",
    category: "Anggrek",
    region: "Kalimantan",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc44?w=600&q=80",
    desc: "Anggrek endemik Kalimantan yang memiliki labellum berwarna hitam kehijauan yang memukau.",
    bbg: "#1b3a2d",
    btx: "#c8e6c9",
  },
  {
    id: 3,
    name: "Kantong Semar",
    latin: "Nepenthes rajah",
    category: "Karnivora",
    region: "Borneo",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    desc: "Tanaman karnivora raksasa yang mampu menampung hingga 3,5 liter cairan pencerna.",
    bbg: "#7a4f2e",
    btx: "#fdf0e0",
  },
  {
    id: 4,
    name: "Bunga Bangkai",
    latin: "Amorphophallus titanum",
    category: "Bunga Langka",
    region: "Sumatera",
    img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80",
    desc: "Bunga dengan perbungaan tertinggi di dunia, hanya mekar beberapa hari dalam beberapa tahun.",
    bbg: "#4a1a5e",
    btx: "#ead5f7",
  },
  {
    id: 5,
    name: "Pohon Meranti",
    latin: "Shorea leprosula",
    category: "Pohon",
    region: "Seluruh Indonesia",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    desc: "Pohon hutan tropis yang dapat mencapai ketinggian 70 meter, penopang ekosistem hutan.",
    bbg: "#1a3a5c",
    btx: "#ddeef8",
  },
  {
    id: 6,
    name: "Melati Putih",
    latin: "Jasminum sambac",
    category: "Bunga Nasional",
    region: "Seluruh Indonesia",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc44?w=600&q=80",
    desc: "Bunga nasional Indonesia yang melambangkan kesucian, simbol budaya dan tradisi bangsa.",
    bbg: "#7a5a00",
    btx: "#fff8dc",
  },
];

const FAUNA = [
  {
    id: 1,
    name: "Komodo",
    latin: "Varanus komodoensis",
    category: "Reptil",
    status: "Rentan",
    region: "Pulau Komodo",
    img: "https://images.unsplash.com/photo-1559548331-f9cb98280344?w=600&q=80",
    desc: "Kadal terbesar di dunia, predator puncak yang hanya ada di Kepulauan Nusa Tenggara.",
    sc: "#b56e10",
    sbg: "#fff3dc",
  },
  {
    id: 2,
    name: "Orangutan Sumatera",
    latin: "Pongo abelii",
    category: "Primata",
    status: "Kritis",
    region: "Sumatera",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80",
    desc: "Primata arboreal cerdas yang berbagi 97% DNA dengan manusia, terancam punah akibat deforestasi.",
    sc: "#8b1a1a",
    sbg: "#fde8e8",
  },
  {
    id: 3,
    name: "Harimau Sumatera",
    latin: "Panthera tigris sumatrae",
    category: "Mamalia",
    status: "Kritis",
    region: "Sumatera",
    img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&q=80",
    desc: "Subspesies harimau terkecil yang masih bertahan, simbol kekuatan alam Indonesia.",
    sc: "#8b1a1a",
    sbg: "#fde8e8",
  },
  {
    id: 4,
    name: "Cendrawasih",
    latin: "Paradisaea apoda",
    category: "Burung",
    status: "Aman",
    region: "Papua",
    img: "https://images.unsplash.com/photo-1552727131-5fc6af00c5e1?w=600&q=80",
    desc: "Burung surga Papua dengan bulu yang paling indah di dunia, simbol keajaiban alam timur.",
    sc: "#1a5e2a",
    sbg: "#d8f5e0",
  },
  {
    id: 5,
    name: "Penyu Belimbing",
    latin: "Dermochelys coriacea",
    category: "Reptil",
    status: "Rentan",
    region: "Lautan Indonesia",
    img: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&q=80",
    desc: "Penyu terbesar di dunia yang bermigrasi ribuan kilometer melintasi Samudra Pasifik.",
    sc: "#1a4a7a",
    sbg: "#ddeef8",
  },
  {
    id: 6,
    name: "Badak Jawa",
    latin: "Rhinoceros sondaicus",
    category: "Mamalia",
    status: "Kritis",
    region: "Jawa",
    img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&q=80",
    desc: "Salah satu mamalia paling langka di dunia, hanya sekitar 70 ekor tersisa di Ujung Kulon.",
    sc: "#8b1a1a",
    sbg: "#fde8e8",
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

/* ─── FLORA CARD ─────────────────────────────────────────────────── */
function FloraCard({ item, onClick }) {
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
        border: `1.5px solid ${hov ? C.brownLight : "#ddd0bc"}`,
        boxShadow: hov
          ? "0 22px 56px rgba(74,46,26,0.18)"
          : "0 4px 18px rgba(74,46,26,0.09)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hov ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.55s ease",
          }}
        />
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span
            style={{
              background: item.bbg,
              color: item.btx,
              borderRadius: 20,
              padding: "3px 12px",
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: 0.6,
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(transparent, rgba(27,58,45,0.75))",
            padding: "36px 16px 14px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: 11.5,
              margin: 0,
              fontWeight: 500,
            }}
          >
            📍 {item.region}
          </p>
        </div>
      </div>
      <div style={{ padding: "18px 20px 22px" }}>
        <h3
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: C.brownDark,
            margin: "0 0 3px",
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: C.brownMid,
            fontStyle: "italic",
            margin: "0 0 10px",
          }}
        >
          {item.latin}
        </p>
        <p
          style={{
            fontSize: 13.5,
            color: C.textMid,
            lineHeight: 1.65,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.desc}
        </p>
        <div
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 5,
            color: C.greenBase,
            fontSize: 12.5,
            fontWeight: 700,
          }}
        >
          <span>Lihat Detail</span>
          <span
            style={{
              transition: "transform 0.2s",
              transform: hov ? "translateX(5px)" : "translateX(0)",
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── FAUNA CARD ─────────────────────────────────────────────────── */
function FaunaCard({ item, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={() => onClick(item)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        background: C.cream,
        border: `1.5px solid ${hov ? C.brownLight : "#ddd0bc"}`,
        boxShadow: hov
          ? "0 18px 50px rgba(74,46,26,0.18)"
          : "0 4px 16px rgba(74,46,26,0.09)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        minHeight: 178,
      }}
    >
      <div style={{ width: 155, minWidth: 155, overflow: "hidden" }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
      </div>
      <div style={{ padding: "16px 18px", flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
            gap: 8,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 15.5,
                fontWeight: 800,
                color: C.brownDark,
                margin: "0 0 2px",
              }}
            >
              {item.name}
            </h3>
            <p
              style={{
                fontSize: 11.5,
                color: C.brownMid,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              {item.latin}
            </p>
          </div>
          <span
            style={{
              background: item.sbg,
              color: item.sc,
              border: `1px solid ${item.sc}44`,
              borderRadius: 20,
              padding: "3px 10px",
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item.status}
          </span>
        </div>
        <p
          style={{
            fontSize: 12,
            color: C.greenBase,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          🐾 {item.category} · 📍 {item.region}
        </p>
        <p
          style={{
            fontSize: 13,
            color: C.textMid,
            lineHeight: 1.62,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.desc}
        </p>
      </div>
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
        style={{ padding: "88px 5%", background: C.greenBg }}
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
                alignItems: "start",
              }}
            >
              {BentangAlam.map((item) => (
                <BentangAlamCard
                  key={item.id}
                  item={item}
                  C={C}
                  onClick={(i) => {
                    setModal(i);
                    setModalType("bentang");
                  }}
                />
              ))}
            </div>
          ) : activeTab === "Flora" ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 26,
                alignItems: "start",
              }}
            >
              {FLORA.map((item) => (
                <FloraCard
                  key={item.id}
                  item={item}
                  onClick={(i) => {
                    setModal(i);
                    setModalType("flora");
                  }}
                />
              ))}
            </div>
          ) : (
            <div
              id="fauna"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
                gap: 22,
                alignItems: "start",
              }}
            >
              {FAUNA.map((item) => (
                <FaunaCard
                  key={item.id}
                  item={item}
                  onClick={(i) => {
                    setModal(i);
                    setModalType("fauna");
                  }}
                />
              ))}
            </div>
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
