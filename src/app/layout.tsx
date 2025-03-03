import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ecrin Property Management Dashboard",
  description: "Next.js Property Management System",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased dark:bg-gray-950`}
    >
      <body className="h-screen flex bg-gray-200">
        {/* Left side */}
        <div className="w-[14%] sm:w-[10%] md:w-[8%] lg:w-[16%] bg-ecrinNavy fixed top-0 h-screen lg:px-3 z-30">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 lg:justify-start p-3 sm:p-4"
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={32}
              height={32}
              className="invert"
            />
            <Image
              className="hidden lg:block invert"
              src="/images/logo_text.png"
              width={66}
              height={30}
              alt="logo"
            />
          </Link>
          <Menu />
        </div>
        {/* Right side */}
        <div className="w-[86%] sm:w-[90%] md:w-[92%] lg:w-[84%] ml-[14%] sm:ml-[10%] md:ml-[8%] lg:ml-[16%]">
          <div className="sticky top-0 bg-ecrinNavy z-30">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
