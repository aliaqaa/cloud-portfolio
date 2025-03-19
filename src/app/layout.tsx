import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Ali 2c",
  description: "My Persolnal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased w-screen h-screen text-center items-center overflow-hidden`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
