import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import ReduxProviders from "@/redux/provider";
import AuthProvider from "../contexts/auth";
// import SocketProvider from "@/contexts/socket";

const kanit = Kanit({
  subsets: ["latin", "latin-ext", "thai"],
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
        <ReduxProviders>
          <AuthProvider>
            {/* <SocketProvider> */}
            {children}
            {/* </SocketProvider> */}
          </AuthProvider>
        </ReduxProviders>
      </body>
    </html>
  );
}
