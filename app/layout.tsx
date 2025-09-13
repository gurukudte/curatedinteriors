import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curated Interiors - Luxury Interior Design Services",
  description:
    "Transform your space with our award-winning interior design studio. Specializing in luxury residential and commercial design with timeless elegance.",
  keywords:
    "interior design, luxury interiors, home design, commercial design, renovation, interior styling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
