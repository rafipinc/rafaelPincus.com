import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name}, software engineer in Sydney`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const match = css.match(
      /src: url\((.+?)\) format\('(opentype|truetype)'\)/
    );
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const [fraunces, geist] = await Promise.all([
    loadGoogleFont("Fraunces", 600, site.name),
    loadGoogleFont("Geist", 400, site.oneLiner),
  ]);

  const fonts = [
    ...(fraunces
      ? [{ name: "Fraunces", data: fraunces, weight: 600, style: "normal" } as const]
      : []),
    ...(geist
      ? [{ name: "Geist", data: geist, weight: 400, style: "normal" } as const]
      : []),
  ];

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
          backgroundColor: "#FAF8F5",
        }}
      >
        <div
          style={{
            width: 96,
            height: 10,
            backgroundColor: "#E4572E",
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: "#1B1815",
            letterSpacing: "-0.02em",
            fontFamily: fraunces ? "Fraunces" : undefined,
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
            color: "#44403C",
            fontFamily: geist ? "Geist" : undefined,
          }}
        >
          {site.oneLiner}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
