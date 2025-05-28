import type { Metadata } from "next";
import { K2D, Kanit, Sarabun } from "next/font/google";
import "../globals.css";

const k2d = K2D({
  subsets: ["thai"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Login",
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
        {children}
      </body>
    </html>
  );
}
