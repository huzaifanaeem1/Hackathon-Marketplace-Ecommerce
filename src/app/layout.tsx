import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import MiddleBar from "@/components/navbar/MiddleBar";
import Navbar from "@/components/navbar/Navbar";
import TopBar from "@/components/navbar/TopBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto max-w-[1440px]`}>
        <TopBar />
        <MiddleBar/>
        <Navbar/>
    
        {children}
        <Footer/>
        </body>        
    </html>
  );
}