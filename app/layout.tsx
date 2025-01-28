import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
// import { Variable } from "lucide-react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wen - Portfolio",
  description: "Data Science Portfolio",
  icons: "/animal.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.variable} ${SpaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
