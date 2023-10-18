"use client";

import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import PaymentConfirm from "./PaymentConfirm";
import { useSelector, useDispatch } from "react-redux";
import { SelectedProduct, setCart } from "@/redux/features/cartSlice";
import { ScaleLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { CartItem } from "@/types";
interface Props {
  setPayment: (value: boolean) => void;
}

export default function PaymentForm({ setPayment }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const [paymentState, setPaymentState] = useState<string>("none");
  const selectedProduct = useSelector(SelectedProduct);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (elements == null) {
        return;
      }

      setIsLoading(true);
      const cardElement = elements?.getElement("card");
      if (!stripe || !cardElement) {
        throw new Error("Stripe or Card Element is not available.");
      }
      const productId = selectedProduct?.productid;

      if (!productId) {
        throw new Error("Product ID is missing.");
      }

      const query = {
        rentalId: selectedProduct?.rentalId,
        rentTime: selectedProduct?.rentTime,
      };

      if (!query.rentalId || !query.rentTime) {
        throw new Error("Rental ID or rent time is missing.");
      }

      const createOrder = await fetch(`/api/services/orders/${productId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken || ""}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });

      if (!createOrder.ok) {
        throw new Error("Failed to create an order.");
      }

      const orderData = await createOrder.json();
      const orderId = orderData.order.id;

      const res = await fetch(`/api/services/payment/${orderId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken || ""}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const clientSecret = data.client_secret;
      console.log(clientSecret);

      // const result = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: { card: cardElement },
      // });

      // if (result?.error?.message) {
      //   await fetch(`/api/services/orders/${orderId}`, {
      //     method: "DELETE",
      //     headers: {
      //       Authorization: `Bearer ${session?.user?.accessToken || ""}`,
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   setPaymentState("error");
      // } else {
      await fetch(`/api/services/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken || ""}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          status: "rent",
        }),
      });
      setIsLoading(false);
      setPaymentState("success");
      //clear local storage
      localStorage.clear();
      const cart: CartItem[] = [];
      dispatch(setCart(cart));
      router.push("/my-shop/orders");
      // }
    } catch (error) {
      console.error(error);
      // setPaymentState("error");
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-24">
          <ScaleLoader
            color={"#FF6E31"}
            loading={isLoading}
            width={6}
            radius={2}
            margin={6}
          />
        </div>
      ) : (
        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col justify-between">
              <CardElement className="py-8 px-10" />
              <div className="grid justify-items-center py-8 px-10">
                <button
                  className="w-36 h-12 transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[var(--theme-color2)] font-bold rounded-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {paymentState !== "none" && (
        <PaymentConfirm setPayment={setPayment} paymentState={paymentState} />
      )}
    </div>
  );
}
