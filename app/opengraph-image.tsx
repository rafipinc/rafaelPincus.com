import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name}, forward deployed engineer in Sydney`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 88,
          backgroundColor: "#FAFAF8",
        }}
      >
        <div
          style={{
            width: 96,
            height: 10,
            backgroundColor: "#1E7A4E",
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 500,
            color: "#161814",
            letterSpacing: "-0.03em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 32,
            maxWidth: 900,
            fontSize: 34,
            lineHeight: 1.4,
            color: "#4A4D46",
          }}
        >
          {site.oneLiner}
        </div>
      </div>
    ),
    size
  );
}
