import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecrin Property Management Dashboard",
  description: "Next.js Property Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} h-screen flex`}>
        {/* Left side */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-red-200">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 lg:justify-start p-4"
          >
            <Image src="home.svg" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">Ecrin</span>
          </Link>
          <Menu />
        </div>
        {/* Right side */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-blue-200">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
