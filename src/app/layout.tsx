import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Society Mortgage",
  description: "Society Mortgage",
  openGraph: {
    title: "Society Mortgage",
    description: "Society Mortgage",
    siteName: "Society Mortgage",
  },
  twitter: {
    title: "Society Mortgage",
    description: "Society Mortgage",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
