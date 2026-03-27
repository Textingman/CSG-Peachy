import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Peachy Insurance",
  description: "Peachy Insurance",
  openGraph: {
    title: "Peachy Insurance",
    description: "Peachy Insurance",
    siteName: "Peachy Insurance",
  },
  twitter: {
    title: "Peachy Insurance",
    description: "Peachy Insurance",
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
