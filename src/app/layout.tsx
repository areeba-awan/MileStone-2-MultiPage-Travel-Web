import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// IMPORT NAVBAR AND FOOTER ON ALL PAGES
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tripi Milestone-2",
  description: "Your Next Go To Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        {children}
        <Footer/>


      </body>
    </html>
  );
}
