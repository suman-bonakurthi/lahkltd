import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import AutoBreadcrumb from "./components/AutoBreadcrumb";
import Footer from "./components/Footer";

// Google Fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L&A Garment Sourcing & Manufacturing",
  description: "Your one-stop solution for garment sourcing and manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-poppins), var(--font-geist-sans), var(--font-geist-mono), sans-serif",
        }}
      >
        <Navbar />
        <CookieBanner />

        {/* Breadcrumb  */}
        <div className="max-w-6xl mx-auto px-4">
          <AutoBreadcrumb />
          
        </div>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
