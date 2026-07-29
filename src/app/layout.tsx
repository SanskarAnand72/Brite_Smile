import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTAs } from "@/components/layout/FloatingCTAs";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookingProvider } from "@/components/booking/BookingContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Brite Smile Dental Care | Best Dental Clinic in Lucknow",
  description: "Expert dental care by Dr. Priyank Prakash — Teeth Whitening, Implants, Root Canal & Orthodontics in Lucknow. Book your appointment online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden max-w-full">
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-slate-800 overflow-x-hidden max-w-full w-full`}
      >
        <BookingProvider>
          <TooltipProvider>
            <Header />
            <main className="flex-1 w-full max-w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
            <FloatingCTAs />
            <Toaster position="top-center" richColors />
          </TooltipProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
