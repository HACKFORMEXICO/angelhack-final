import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ecolyf",
  description: "Start impact and earn rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar className="fixed top-0 left-0 right-0 z-50" />
        <main className="flex-grow overflow-auto pt-[navbar-height] pb-[navigation-height]">
          {children}
        </main>
        <Navigation className="fixed bottom-0 left-0 right-0 z-50" />
      </body>
    </html>
  );
}
