import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Three Fields - Premium Healthy Snacks & Superfoods",
  description: "Discover premium foxnuts, nuts & seeds crafted for everyday energy. 100% natural, zero preservatives, premium quality healthy snacks from Three Fields.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${righteous.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
