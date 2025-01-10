import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

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
    <html
      lang="en"
      className={`${GeistSans.className} antialiased dark:bg-gray-950`}
    >
      <body className="h-screen flex  bg-gray-200">
        {/* Left side */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-gray-900 fixed top-0 h-screen lg:ps-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 lg:justify-start p-4"
          >
            <Image
              src="home.svg"
              alt="logo"
              width={32}
              height={32}
              className="invert"
            />
            <span className="hidden lg:block text-white">Ecrin</span>
          </Link>
          <Menu />
        </div>
        {/* Right side */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] ml-[14%] md:ml-[8%] lg:ml-[16%]">
          <div className="sticky top-0 bg-gray-400 z-10">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
