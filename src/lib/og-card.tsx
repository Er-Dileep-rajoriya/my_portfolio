import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgCard({
  kicker,
  title,
  footer,
}: {
  kicker: string;
  title: string;
  footer: string;
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0f",
        color: "#e8e8ed",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          color: "#6366f1",
          textTransform: "uppercase",
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          lineHeight: 1.05,
          letterSpacing: -1,
          maxWidth: 980,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#8888a0" }}>
        {footer}
      </div>
    </div>,
    { ...ogSize },
  );
}
