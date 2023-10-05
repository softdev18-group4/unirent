"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "./searchBar";
import MessageCard from "./messageCard";

function MessageSideBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const toggleChat = () => {
    const checklg = document.getElementById("checklg");
    if (checklg?.offsetWidth != 144) {
      const Msgsidebar = document.getElementById("chatSidebar");
      const chathead = document.getElementById("chatHeader");
      if (chathead != null) {
        chathead.classList.toggle("hidden");
      }
      if (Msgsidebar != null) {
        Msgsidebar.classList.toggle("-translate-x-[60rem]");
        Msgsidebar.classList.toggle("lg:w-72");
        Msgsidebar.classList.toggle("min-[800px]:w-72");
      }
      const navhead = document.getElementById("navhead");
      if (navhead != null) navhead.classList.toggle("hidden");
      const checkmd = document.getElementById("checkmd");
      if (checkmd?.offsetWidth != 144) {
        const sidebar = document.getElementById("sidebar");
        if (!sidebar?.classList.contains("-translate-x-full")) {
          if (sidebar != null) sidebar.classList.toggle("-translate-x-full");
          const padding = document.getElementById("padding");
          if (padding != null) padding.classList.toggle("hidden");
          const unirent = document.getElementById("unirent");
          if (unirent != null) unirent.classList.toggle("hidden");
        }
      }
    }
  };
  return (
    <div className="sticky top-0 z-30">
      <div
        className="sticky top-0 right-0 hidden lg:flex items-center z-30 bg-[#f1f6f9] border-y border-slate-400 h-24"
        id="chatHeader"
      >
        <div className="w-36 hidden lg:flex" id="checklg"></div>
        <div className="w-36 hidden md:flex" id="checkmd"></div>
        <div className="flex items-center gap-4 p-4">
          <div
            className="w-8 h-8 flex items-center justify-center hover:bg-slate-300 rounded-full lg:hidden"
            onClick={toggleChat}
          >
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-150"
            >
              <path
                d="M0.378828 8.51152L5.80899 14.5769C5.92805 14.7109 6.06969 14.8174 6.22576 14.89C6.38182 14.9626 6.54922 15 6.71829 15C6.88735 15 7.05475 14.9626 7.21081 14.89C7.36688 14.8174 7.50852 14.7109 7.62758 14.5769C7.86611 14.3088 8 13.9463 8 13.5684C8 13.1904 7.86611 12.8279 7.62758 12.5598L3.09391 7.49587L7.62758 2.43188C7.86611 2.16386 8 1.80129 8 1.42338C8 1.04546 7.86611 0.682893 7.62758 0.41487C7.50792 0.282289 7.36599 0.177398 7.20996 0.10621C7.05392 0.0350207 6.88684 -0.00106249 6.71829 2.56372e-05C6.54974 -0.00106252 6.38266 0.0350207 6.22662 0.10621C6.07058 0.177398 5.92866 0.282289 5.80899 0.41487L0.378828 6.48021C0.25879 6.61319 0.163514 6.77141 0.0984947 6.94573C0.0334751 7.12005 -3.18033e-07 7.30702 -3.33637e-07 7.49587C-3.4924e-07 7.68471 0.033475 7.87168 0.0984946 8.046C0.163514 8.22032 0.25879 8.37854 0.378828 8.51152Z"
                fill="#394867"
              />
            </svg>
          </div>

          <Image
            src="/product.png"
            width={60}
            height={60}
            alt="Picture of the author"
            className="rounded-full h-[100%] aspect-square"
          />
          <div className="flex flex-col">
            <p className="font-bold truncate text-3xl">Captain Ameraica</p>
          </div>
        </div>
      </div>
      <aside
        className="w-full md:w-[calc(100%-255px)] fixed lg:top-0 lg:left-64 z-40 lg:w-72 h-screen lg:border-x border-slate-400 bg-[#f1f6f9] lg:bg-white transition-transform delay-50 lg:translate-x-0"
        aria-label="Sidebar"
        id="chatSidebar"
      >
        <div className="flex justify-left w-full px-2 lg:pt-12 lg:py-4 overflow-y-auto bg-[#f1f6f9] lg:bg-white">
          <ul className="space-y-4 font-medium px-2 w-full pb-4">
            <li>
              <div className="flex flex-col w-full cursor-pointer grow-[1] items-start justifiy-center py-3 ">
                <div className="font-bold text-2xl">All Message</div>
                <div className="font-medium text-lg text-slate-300">
                  80 Message, 5 Unread
                </div>
                <div className="px-6 lg:px-0 w-full">
                  <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    placeholder="Search"
                  ></SearchBar>
                </div>
              </div>
            </li>
            {[1, 2, 3, 4, 5].map((val, idx) => (
              <MessageCard
                key={idx}
                name="Captain Ameraica"
                imgSrc="/product.png"
                lastMsg="Hello, I want a computer"
                herf={"/profile/message/" + val}
                toggleChat={toggleChat}
              ></MessageCard>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
export default MessageSideBar;
