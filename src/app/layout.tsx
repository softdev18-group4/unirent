import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/redux/provider";
import AuthProvider from "./context/auth";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Unirent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
