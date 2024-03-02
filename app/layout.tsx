import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "./component/main/starBackground";
import Navbar from "./component/main/Navbar";
import Footer from "./component/main/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll custom-scrollbar overflow-x-hidden `}
      >
        <Navbar />
        <StarCanvas />

        {children}
        <Footer />
      </body>
    </html>
  );
}
