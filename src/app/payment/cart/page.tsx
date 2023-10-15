"use client";

import Link from "next/link";
import CartCard from "./components/CartCard";
import TableHeader from "./components/TableHeader";

function Cart() {
  const handleSelected = async (productId: string) => {
    //select cart
  };
  const handleDelete = async (productId: string) => {
    //delete cart
  };
  return (
    <div className="px-[5%]">
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full border-separate border-spacing-y-4 text-xs md:text-sm lg:text-base table-fixed">
          <TableHeader></TableHeader>

          {[1, 2, 3, 4].map((data, index) => (
            <tbody key={index}>
              <CartCard
                imgSrc="/product.png"
                name="noteboox"
                description="test 123 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                type="daily"
                period="ุ8 วัน"
                price="1000"
                productId="{data.productId}"
                isSelected={false}
                handleSelected={handleSelected}
                handleDelete={handleDelete}
              ></CartCard>
            </tbody>
          ))}
        </table>
      </div>
      <div className="sticky pb-16 bottom-0 h-48 lg:h-52 z-40 bg-[#f1f6f9] border-t-2 border-slate-200 flex justify-between items-end">
        <Link href="/product/recommend" className="font-bold text-slate-400">
          &lt; Continue Shopping
        </Link>
        <div className="flex flex-col items-end gap-4">
          <div className="font-bold text-slate-600">Subtotal</div>
          <div className="font-bold text-slate-600">1800</div>
          <button className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] w-48 uppercase font-bold rounded-full h-12 flex justify-center items-center gap-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
