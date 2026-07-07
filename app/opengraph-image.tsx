import { ImageResponse } from "next/og";

// Image de partage (réseaux sociaux / messageries).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PilluleCast — Studio podcast & vidéo à Lyon";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0C12",
          color: "#F4F4F2",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge ON AIR */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "999px",
              background: "#34E0C8",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "6px",
              color: "#9E9EAE",
            }}
          >
            ON AIR
          </div>
        </div>

        {/* Titre + gélule */}
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {/* Gélule bicolore */}
          <div
            style={{
              width: "96px",
              height: "220px",
              borderRadius: "48px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transform: "rotate(18deg)",
            }}
          >
            <div style={{ flex: 1, background: "#34E0C8" }} />
            <div style={{ flex: 1, background: "#A78BFA" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "88px", fontWeight: 700, lineHeight: 1.05 }}>
              PilluleCast
            </div>
            <div style={{ fontSize: "40px", color: "#9E9EAE", marginTop: "12px" }}>
              Studio podcast &amp; vidéo à Lyon
            </div>
          </div>
        </div>

        {/* Pied */}
        <div style={{ fontSize: "30px", color: "#34E0C8" }}>
          Réserver une séance →
        </div>
      </div>
    ),
    size
  );
}
