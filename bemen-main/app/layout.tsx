import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import type React from "react";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "BEMEN Madrid - Servicios Premium de Bienestar Masculino | Barbería, Masajes, Estética",
  description:
    "Centro premium de bienestar masculino en Madrid. Barbería profesional, masajes terapéuticos, depilación, manicura y tratamientos estéticos. Santísima Trinidad 11, Metro Iglesia.",
  keywords: [
    "barbería Madrid",
    "masajes Madrid",
    "estética masculina Madrid",
    "depilación hombres Madrid",
    "manicura masculina Madrid",
    "bienestar masculino",
    "Metro Iglesia",
    "Santísima Trinidad",
    "BEMEN Madrid",
    "servicios premium hombres",
  ].join(", "),
  authors: [{ name: "BEMEN Madrid", url: "https://bemen-madrid.com" }],
  creator: "BEMEN Madrid",
  publisher: "BEMEN Madrid",
  robots: "index, follow",
  openGraph: {
    title: "BEMEN Madrid - Servicios Premium de Bienestar Masculino",
    description: "Centro premium de bienestar masculino en Madrid. Barbería, masajes, estética y más.",
    url: "https://bemen-madrid.com",
    siteName: "BEMEN Madrid",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "BEMEN Madrid - Bienestar Masculino Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEMEN Madrid - Servicios Premium de Bienestar Masculino",
    description: "Centro premium de bienestar masculino en Madrid.",
    images: ["/images/logo.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#D4AF37",
  manifest: "/manifest.json",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="bg-pure-white text-deep-black">
        <Navigation />
        <main className="min-h-screen text-deep-black bg-pure-white font-sans antialiased">
          <Navigation />
          <main className="min-h-screen text-deep-black bg-pure-white">{children}</main>
          <Footer />
          <Toaster />
          <noscript>
            <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f3f4f6", color: "#212529" }}>
              Este sitio web requiere JavaScript para funcionar correctamente. Por favor, habilita JavaScript en tu navegador.
            </div>
          </noscript>
        </main>
      </body>
    </html>
  );
}
