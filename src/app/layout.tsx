import StoreProvider from "@/store/StoreProvider";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import react from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

interface RootLayoutProps {
  children: react.ReactNode;
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "np" }];
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
