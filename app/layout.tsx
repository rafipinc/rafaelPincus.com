import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const description =
  "Sydney software engineer with five years of iOS experience at Suncorp. I build full-stack products, integrations and practical AI systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelpincus.com"),
  title: "Rafael Pincus | Software Engineer",
  description,
  openGraph: {
    title: "Rafael Pincus | Software Engineer",
    description,
    url: "/",
    siteName: "Rafael Pincus",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Pincus | Software Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
