import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Chinmay Patil — Portfolio",
  description: "MSc Business Analytics | FMCG & e‑commerce | Data & Product",
  openGraph: {
    title: "Chinmay Patil — Portfolio",
    description: "MSc Business Analytics | FMCG & e‑commerce | Data & Product",
    url: "https://your-domain.vercel.app",
    siteName: "Chinmay Patil",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmay Patil — Portfolio",
    description: "MSc Business Analytics | FMCG & e‑commerce | Data & Product",
    images: ["/og.png"]
  },
  metadataBase: new URL("https://your-domain.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main className="container-max py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}