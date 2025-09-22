import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ginni Interior - Transforming Spaces with Modern Elegance",
  description: "Premier interior design studio specializing in residential and commercial spaces. Experience luxury and sophistication with our expert design solutions.",
  keywords: "interior design, home decor, luxury interiors, residential design, commercial design, renovation, 3D visualization",
  authors: [{ name: "Ginni Interior" }],
  openGraph: {
    title: "Ginni Interior - Transforming Spaces with Modern Elegance",
    description: "Premier interior design studio specializing in residential and commercial spaces.",
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
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
