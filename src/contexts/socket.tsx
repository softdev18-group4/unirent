"use client";

import * as socketIO from "socket.io-client";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { API_HOST } from "@/config";

const initialData = {
  socket: undefined,
  conversations: [],
  messages: {},
};

const SocketContext = createContext<any>(initialData);

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [conversations, setConversations] = useState({});
  const [socket, setSocket] = useState<socketIO.Socket | undefined>(undefined); // Initialize socket as undefined
  const [messages, setMessages] = useState<{ [key: string]: any[] }>({});
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // if (!session) {
    //   router.replace("/");
    //   return;
    // }

    const socket = socketIO.connect(API_HOST!, {
      transports: ["websocket", "polling"],
      auth: {
        // token: session.user.accessToken,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhM2M3OTgwZTI0YWI5ZThlOWU4YTciLCJyb2xlIjoidXNlciIsImlhdCI6MTY5NzQ3MjMxMywiZXhwIjoxNjk3NTE1NTEzfQ.EgPP0T5EZqrkyUNZ0A2MTlO0iR9rnQTSPVAn-akD2E4",
      },
    });

    socket.on("conversations", (data) => {
      console.log(data);
      setConversations(data);
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, conversations, messages }}>
      {children}
    </SocketContext.Provider>
  );
}
