import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-MEDATT",
  description: "E-Medatt-Online Tele-Medicine Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  font-main`}>{children}</body>
    </html>
  );
}
