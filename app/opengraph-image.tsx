import { ImageResponse } from "next/og";

export const alt = "Conatus — Tendência ao movimento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f6f8",
          color: "#1e262d",
          padding: 72,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              border: "2px solid #1e262d",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />
          Conatus
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1 }}>Todo corpo</div>
          <div style={{ fontSize: 96, lineHeight: 1 }}>tende a</div>
          <div style={{ fontSize: 96, lineHeight: 1, color: "#316989" }}>
            continuar.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#6d7883",
          }}
        >
          <span>Fisioterapia · Força · Movimento — 50+</span>
          <span>Vila Mariana — SP</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
