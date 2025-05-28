import type { Metadata } from "next";
import { K2D, Kanit, Sarabun } from "next/font/google";
import "./globals.css";
// import AppNavbar from "./about/AppNavbar";
import Navbar01Page from "@/components/navbar-01/navbar-01";

const k2d = K2D({
  subsets: ["thai"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sell goods by cosci shop",
  description: "goods selling by cosci students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${k2d.className}`}
      >
        <Navbar01Page />

        {children}
      </body>
    </html>
  );
}
