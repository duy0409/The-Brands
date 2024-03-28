import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayden Brands",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} style={{
        margin: 0,
        width: '100%',
        backgroundColor: '#181a1b',
      }}>{children}</body>
    </html>
  );
}
