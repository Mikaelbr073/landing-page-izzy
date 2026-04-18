import { ImageResponse } from "next/og";

export const alt = "Izzy Peazy — Aprender ficou mais divertido";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mascotData = await fetch(
    "https://www.figma.com/api/mcp/asset/940cd15a-1c73-4d83-94c2-786d7b55a32a"
  ).then((r) => r.arrayBuffer());

  const mascotSrc = `data:image/png;base64,${Buffer.from(mascotData).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#fff6e8",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 620 }}>
          {/* Badge */}
          <div
            style={{
              background: "#e4e6ff",
              color: "#3a4bfd",
              fontSize: 20,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 999,
              alignSelf: "flex-start",
            }}
          >
            Acesso antecipado — vagas limitadas
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#1a1a2e",
              lineHeight: 1.1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Aprender ficou</span>
            <span>
              mais divertido{" "}
              <span style={{ color: "#ccd537" }}>✨</span>
            </span>
          </div>

          {/* Description */}
          <div style={{ fontSize: 26, color: "#817e79", lineHeight: 1.5 }}>
            O monitor de estudos inteligente que ajuda crianças do ensino
            fundamental a tirar dúvidas na hora.
          </div>

          {/* Brand name */}
          <div style={{ fontSize: 28, fontWeight: 800, color: "#ccd537", marginTop: 8 }}>
            izzypeazy.com
          </div>
        </div>

        {/* Right: mascot */}
        <img
          src={mascotSrc}
          style={{ height: 480, width: 400, objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
