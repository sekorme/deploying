import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";
import { NextThemeProvider } from "@/providers/NextThemeProvider";


const inter = Inter({ subsets: ["latin"], variable:  '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight:['400','700'],variable:  '--font-ibm-plex-serif'})

export const metadata: Metadata = {
  title: "Election System",
  description: "Agona West NDC Collation System",
  icons: {
    icon: '/logo.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body className={`bg-gray-200 ${inter.className}`}>
      
        {children}
       
        </body>
    </html>
  );
}
