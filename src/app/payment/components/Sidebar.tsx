"use client";

import { SelectedProduct, setCart } from "@/redux/features/cartSlice";
import { CartItem } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const pathname = usePathname();

  const selectedProduct = useSelector(SelectedProduct);
  const dispatch = useDispatch();
  const discount = 2000;
  useEffect(() => {
    let cartData = localStorage.getItem("cart");
    if (cartData) {
      const data: CartItem[] = JSON.parse(cartData);
      if (cartData) dispatch(setCart(data));
    }
  }, []);

  return !pathname.includes("/payment/cart") ? (
    <div className="lg:fixed lg:top-0 lg:right-0 lg:h-full mb-10 lg:mb-0 mx-[5%] lg:mx-0 py-10 lg:py-20 px-10 lg:px-6 rounded-xl lg:rounded-none drop-shadow-xl lg:drop-shadow-none lg:border-l w-[90%] lg:w-[35%] border-slate-400 z-40 bg-white flex flex-col gap-10">
      <div className="flex gap-2">
        <div className="w-[40%]">
          <Image
            src={selectedProduct?.imgSrc != null ? selectedProduct.imgSrc : ""}
            width={800}
            height={800}
            alt="selected product pic"
            className="aspect-square rounded-xl"
          ></Image>
        </div>

        <div className="flex flex-col gap-2 w-[60%] break-words">
          <div className="font-bold">{selectedProduct?.name}</div>
          <div className="text-slate-400">{selectedProduct?.description}</div>
        </div>
      </div>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Coupon"
          className="rounded-xl h-12 p-4 bg-[#f1f6f9] grow"
        ></input>
        <button className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] w-36 uppercase font-bold rounded-xl h-12 flex justify-center items-center gap-2">
          apply
        </button>
      </div>
      <div className="w-full h-0 border boerder-slate-400"></div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="font-bold">Subtotal</div>
          <div className="font-bold"> {selectedProduct?.price} บาท</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Discounted</div>
          <div className="font-bold"> {discount} บาท</div>
        </div>
      </div>
      <div className="w-full h-0 border boerder-slate-400"></div>
      <div className="flex justify-between">
        <div className="font-bold">Total</div>
        <div className="font-bold text-[color:var(--theme-color2)]">
          {selectedProduct?.price == null
            ? 0
            : selectedProduct.price - discount}{" "}
          บาท
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Sidebar;
