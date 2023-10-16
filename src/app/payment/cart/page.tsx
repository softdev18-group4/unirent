"use client";

import Link from "next/link";
import CartCard from "./components/cartCard";
import TableHeader from "./components/tableHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  SelectedProduct,
  addToCart,
  removeFromCart,
  selectProduct,
  setCart,
  totalSelectedProduct,
} from "@/redux/features/cartSlice";
import { useEffect, useState } from "react";
import { CartItem } from "@/types";
import { useRouter } from "next/navigation";

function Cart() {
  const { push } = useRouter();
  const [error, setError] = useState(false);
  const totalselect = useSelector(totalSelectedProduct);
  const selectedProduct = useSelector(SelectedProduct);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  useEffect(() => {
    let cartData = localStorage.getItem("cart");
    if (cartData) {
      const data: CartItem[] = JSON.parse(cartData);
      if (cartData) dispatch(setCart(data));
    }
  }, []);
  //for testing
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        isSelected: true,
        productid: "sadasdasdas",
        imgSrc: "/product.png",
        location: "stasadsad",
        name: "notebook123",
        description: "test redux",
        type: "Daily",
        period: 8,
        price: 1000,
      })
    );
  };
  const handleNextPage = () => {
    if (totalselect == 1) {
      push("/payment/contract");
      setError(false);
    } else setError(true);
  };
  const handleSelected = async (productId: string) => {
    dispatch(selectProduct(productId));
  };
  const handleDelete = async (productId: string) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div className="px-[5%]">
      <div className="relative overflow-x-auto mt-4 min-">
        <table className="w-full border-separate border-spacing-y-4 text-xs md:text-sm lg:text-base table-fixed">
          <TableHeader></TableHeader>

          {cartItems.length == 0 ? (
            <tbody>
              <tr>
                <td>
                  <div>ไม่มีสินค้าในตะกร้า</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          ) : (
            cartItems.map((data, index) => (
              <tbody key={index}>
                <CartCard
                  imgSrc={data.imgSrc}
                  name={data.name}
                  description={data.description}
                  type={data.type}
                  period={data.period}
                  price={data.price}
                  productId={data.productid}
                  isSelected={data.isSelected}
                  handleSelected={handleSelected}
                  handleDelete={handleDelete}
                ></CartCard>
              </tbody>
            ))
          )}
        </table>
      </div>
      <div className="sticky pb-8 bottom-0 h-40 lg:h-40 lg:pb-4 z-40 bg-[#f1f6f9] border-t-2 border-slate-200 flex justify-between items-end">
        <Link href="/product/recommend" className="font-bold text-slate-400">
          &lt; Continue Shopping
        </Link>
        {error && (
          <div className="justify-self-center text-red-500 font-bold">
            โปรดเลือกสินค้า
          </div>
        )}

        <div className="flex flex-col items-end gap-4">
          <div className="font-bold text-slate-600">Subtotal</div>
          <div className="font-bold text-slate-600">
            {selectedProduct != null ? selectedProduct.price : 0} {" บาท"}
          </div>
          <button
            onClick={handleNextPage}
            className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] w-48 uppercase font-bold rounded-full h-12 flex justify-center items-center gap-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
