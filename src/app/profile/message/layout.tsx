import { Metadata } from "next";
import MessageSideBar from "./components/messageSideBar";

export const metadata: Metadata = {
  title: "Message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MessageSideBar></MessageSideBar>
      <div className=" lg:ml-72 z-30">
        <main>{children}</main>
      </div>
    </div>
  );
}
