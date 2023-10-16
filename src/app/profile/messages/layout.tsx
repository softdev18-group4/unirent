import { Metadata } from "next";
import MessageSideBar from "./components/MessageSideBar";
import { io } from "socket.io-client";
import SocketProvider from "@/contexts/socket";

export const metadata: Metadata = {
  title: "Message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SocketProvider>
      <div>
        <MessageSideBar></MessageSideBar>
        <div className="lg:ml-72 z-30">
          <main>{children}</main>
        </div>
      </div>
    </SocketProvider>
  );
}
