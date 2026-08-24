import type { Metadata } from "next";
import { Manrope, Karla } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "S-CONET — Snakebite Control Network",
  description:
    "S-CONET unites clinicians, researchers, and communities across sub-Saharan Africa to close the gap between a bite and life-saving care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${karla.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
