import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "@/app/Components/Footer";
import WhatsAppButton from "@/app/Components/WhatsAppButton"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rimsha Labs - Medical Diagnostic Laboratory",
  description: "Medical Diagnostic Lab providing quality pathology services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.jpg" type="image/x-icon" />

        {/* JSON-LD Structured Data for Organization Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rimsha Labs",
              url: "https://www.rimshalabs.com",
              logo: "https://www.rimshalabs.com/favicon.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-323-1486205",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=100090405991627",
                "https://www.instagram.com/rimshalab/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
