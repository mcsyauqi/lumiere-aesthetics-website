import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Lumière Aesthetics | Premium Aesthetic Clinic",
  description:
    "Where Science Meets Beauty. Advanced aesthetic treatments by board-certified dermatologists. Reveal your natural radiance with FDA-approved treatments.",
  keywords: [
    "aesthetic clinic",
    "dermatology",
    "skincare",
    "anti-aging",
    "botox",
    "facial rejuvenation",
    "laser therapy",
    "cosmetic treatments",
  ],
  openGraph: {
    title: "Lumière Aesthetics | Reveal Your Natural Radiance",
    description:
      "Advanced aesthetic treatments by board-certified dermatologists. FDA-approved treatments with visible results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700&family=Cormorant:wght@400;500;600;700&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
