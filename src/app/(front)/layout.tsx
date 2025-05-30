import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "../globals.css";
import Navbar01Page from "@/src/components/navbar-01/navbar-01";

const k2d = K2D({
  subsets: ["thai"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosci Shop",
  description: "Page for Cosci Shop",
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
