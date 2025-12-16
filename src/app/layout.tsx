import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ateliê Paslauski — Contemporary Art",
  description:
    "Contemporary paintings and limited editions by Ana Paslauski. Original works exploring light, texture, and form from a Lisbon studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
