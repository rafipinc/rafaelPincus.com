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
  const [archivoMedium, archivoRegular] = await Promise.all([
    loadGoogleFont("Archivo", 500, site.name),
    loadGoogleFont("Archivo", 400, site.oneLiner),
  ]);

  const fonts = [
    ...(archivoMedium
      ? [
          {
            name: "Archivo",
            data: archivoMedium,
            weight: 500,
            style: "normal",
          } as const,
        ]
      : []),
    ...(archivoRegular
      ? [
          {
            name: "Archivo",
            data: archivoRegular,
            weight: 400,
            style: "normal",
          } as const,
        ]
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
            fontFamily: archivoMedium ? "Archivo" : undefined,
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
            fontFamily: archivoRegular ? "Archivo" : undefined,
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
