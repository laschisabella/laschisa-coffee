// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Merriweather, Karla, Varta } from "next/font/google";
import Footer from "@coffee/components/Footer";
import { ReactNode } from "react";

const merriweather = Merriweather({
  weight: ["400", "300", "700", "900"],
  subsets: ["latin"],
});

const karla = Karla({
  weight: ["400", "300", "500", "700", "800"],
  subsets: ["latin"],
});

const varta = Varta({
  weight: ["400", "300", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laschisa Coffee Shop",
  description:
    "Portfolio project by Isabella Laschi, see more at isabella-laschi.vercel.app",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweather.className} ${karla.className} ${varta.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
