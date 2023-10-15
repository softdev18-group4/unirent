import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/redux/provider";
import AuthProvider from "./context/auth";
<<<<<<< HEAD
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin", "latin-ext", "thai"],
  weight: "400",
});
=======
import { Inter } from "@next/font/google";
>>>>>>> a05d5da4d8da19fa1ef21e522d7bb7073a224921

export const metadata: Metadata = {
  title: "Unirent",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main">
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
