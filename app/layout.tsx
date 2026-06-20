import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matosdev.xyz"),
  title: "MatosDev | Página en construcción",
  description: "La nueva web de MatosDev está en construcción. Visita nuestros enlaces oficiales mientras preparamos la nueva experiencia.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MatosDev | Página en construcción",
    description: "La nueva web de MatosDev está en construcción. Visita nuestros enlaces oficiales mientras preparamos la nueva experiencia.",
    url: "https://matosdev.xyz",
    siteName: "MatosDev",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Links oficiales de MatosDev",
      },
    ],
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MatosDev | Página en construcción",
    description: "La nueva web de MatosDev está en construcción. Visita nuestros enlaces oficiales mientras preparamos la nueva experiencia.",
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f2f0eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} bg-paper font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
