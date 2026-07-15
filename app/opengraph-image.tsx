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
          background: "#161826",
          color: "#E9E9ED",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marqueur EN DIRECT */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "999px",
              background: "#E0483D",
            }}
          />
          <div style={{ fontSize: "24px", letterSpacing: "6px", color: "#9E9EAE" }}>
            EN DIRECT
          </div>
        </div>

        {/* Titre + gélule sobre */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div
            style={{
              width: "24px",
              height: "150px",
              borderRadius: "999px",
              background: "linear-gradient(180deg, #D2CEFD, #796CBF)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "88px", fontWeight: 700, lineHeight: 1.05 }}>PilluleCast</div>
            <div style={{ fontSize: "40px", color: "#9E9EAE", marginTop: "12px" }}>
              Studio podcast &amp; vidéo à Lyon
            </div>
          </div>
        </div>

        {/* Pied */}
        <div style={{ fontSize: "30px", color: "#D2CEFD" }}>Réserver une séance →</div>
      </div>
    ),
    size
  );
}
