import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#6366f1",
        color: "#ffffff",
        fontSize: 20,
      }}
    >
      {profile.name.slice(0, 1).toUpperCase()}
    </div>,
    { ...size },
  );
}
