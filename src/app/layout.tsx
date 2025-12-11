import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export const metadata: Metadata = {
  title: "Manish Mittal DevOps | Azure & Automation Specialist",
  description: "Ship better software, faster with confidence.",
    icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans text-slate-800 antialiased relative min-h-screen bg-white overflow-x-hidden">
        
        {/* --- LAYER 1: Base Background (Deepest) --- */}
        <div className="fixed inset-0 bg-white -z-50"></div>

        {/* --- LAYER 2: Animated Blobs --- */}
        {/* Purple/Pink Blob (Top Left) */}
        <div className="fixed -top-24 -left-24 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob -z-10"></div>
        
        {/* Cyan/Blue Blob (Top Right) */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000 -z-10"></div>
        
        {/* Yellow/Soft Blob (Bottom Center) */}
        <div className="fixed -bottom-32 left-1/2 w-[600px] h-[600px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000 -z-10"></div>
        
        {/* --- LAYER 3: Content (Top) --- */}
        <div className="relative z-0">
          {children}
        </div>

      </body>
    </html>
  );
}
