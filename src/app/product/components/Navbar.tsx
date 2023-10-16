"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCart } from "@/redux/features/cartSlice";
import { CartItem } from "@/types";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  useEffect(() => {
    let cartData = localStorage.getItem("cart");
    if (cartData) {
      const data: CartItem[] = JSON.parse(cartData);
      if (cartData) dispatch(setCart(data));
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="px-[5%] sticky top-0 z-50 bg-[#f1f6f9] font-inter">
      <nav>
        {/* >md size  */}
        <div className="hidden md:flex justify-between items-center py-4">
          <div className="flex grow-[1] items-center justifiy-center uppercase pr-3 py-3 font-extrabold text-3xl">
            <Link href="/product/recommend" className="cursor-pointer flex">
              <div className="theme-text-color2">uni</div>
              <div className="theme-text-color1">rent</div>
            </Link>
          </div>

          <div className="grow-[3] flex items-center justify-evenly theme-bg-color1 rounded-full font-medium font-inter px-3 py-2">
            {[
              ["Recommend", "/product/recommend"],
              ["Method", "/product/recommend"],
              ["Customers", "/product/recommend"],
              ["Rents", "/product/recommend"],
              ["FAQ", "/product/recommend"],
            ].map(([title, url], index) => (
              <Link
                key={index}
                href={url}
                className="grow rounded-full px-1 py-1 text-white text-center font-inter font-thin hover:bg-[color:var(--theme-color2)] hover:font-normal"
              >
                {title}
              </Link>
            ))}
          </div>

          <div className="grow-[1] flex items-center pl-3 py-3 font-medium justify-end ">
            {/* computer icon */}
            <div onClick={() => push("/payment/cart")} className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cursor-pointer rounded-full w-12 h-12 fill-white theme-bg-color1 p-3 mx-2 hover:bg-[color:var(--theme-color2)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              {cartItems.length != 0 && (
                <span className="absolute -top-2 right-0 flex w-6 h-6 bg-[color:var(--theme-color2)] text-white rounded-full justify-center items-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--theme-color2)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[color:var(--theme-color2)] justify-center items-center">
                    {cartItems.length}
                  </span>
                </span>
              )}
            </div>

            {/* person icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              onClick={() => push("/profile/my-profile")}
              className="cursor-pointer rounded-full w-28 h-12 fill-white theme-bg-color1 p-3 mx-2 hover:bg-[color:var(--theme-color2)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
        {/* <md size  */}
        <div className="md:hidden flex justify-between items-center">
          <div className="block grow-[1]">
            <div className="w-full py-6 pb-6">
              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="-ml-5 px-4 py-2 bg-transparent hover:ring-4 hover:outline-none hover:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 fill-black"
                  >
                    <path d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute left-0 mt-2 w-44 rounded-lg shadow-lg theme-bg-color1 ring-1 ring-black ring-opacity-5">
                    <ul
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {[
                        ["Recommend", "/product/recommend"],
                        ["Method", "/product/recommend"],
                        ["Customers", "/product/recommend"],
                        ["Rents", "/product/recommend"],
                        ["FAQ", "/product/recommend"],
                        ["Cart", "/payment/cart"],
                        ["Profile", "/profile/my-profile"],
                      ].map(([title, url], index) => (
                        <li key={index}>
                          <Link
                            href={url}
                            className="block rounded-lg px-1 py-1 text-white text-center font-thin hover:bg-[color:var(--theme-color2)] hover:font-normal"
                            onClick={closeDropdown}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grow-[3] flex justify-center items-center cursor-default uppercase pl-3 py-3 font-extrabold text-3xl">
            <Link href="/product/recommend" className="cursor-pointer flex">
              <div className="theme-text-color2">uni</div>
              <div className="theme-text-color1">rent</div>
            </Link>
          </div>
          <div className="grow-[1] flex items-center pl-3 py-3 font-medium justify-end ">
            {/* computer icon */}
            <div onClick={() => push("/payment/cart")} className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cursor-pointer rounded-full w-12 h-12 fill-white theme-bg-color1 p-3 mx-2 hover:bg-[color:var(--theme-color2)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              {cartItems.length != 0 && (
                <span className="absolute -top-2 right-0 flex w-6 h-6 bg-[color:var(--theme-color2)] text-white rounded-full justify-center items-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--theme-color2)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[color:var(--theme-color2)] justify-center items-center">
                    {cartItems.length}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
