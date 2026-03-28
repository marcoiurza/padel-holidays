import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0e5b59, #111417)",
          color: "#f7f1e8",
          padding: 48,
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <div style={{ fontSize: 72, maxWidth: 700 }}>Padel Holidays</div>
        <div style={{ fontSize: 28 }}>Watamu, Kenya</div>
      </div>
    ),
    size
  );
}
