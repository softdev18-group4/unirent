import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import PaymentConfirm from "./PaymentConfirm";
import { useSelector } from "react-redux";
import { SelectedProduct } from "@/redux/features/cartSlice";

interface Props {
  setPayment: (value: boolean) => void;
}

export default function PaymentForm({ setPayment }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const [paymentState, setPaymentState] = useState<string>("none");
  const selectedProduct = useSelector(SelectedProduct);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
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

      if (!stripe || !cardElement) {
        throw new Error("Stripe or Card Element is not available.");
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
      console.log(data);
      const clientSecret = data.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (result.error) {
        console.error(result.error.message);

        await fetch(`/api/services/orders/${orderId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken || ""}`,
            "Content-Type": "application/json",
          },
        });

        setPaymentState("error");
      } else if (result.paymentIntent?.status === "succeeded") {
        console.log("Payment succeeded!");

        const rentStatus = {
          status: "rent",
        };

        await fetch(`/api/services/orders/${orderId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken || ""}`,
            Accept: "application/json",
          },
          body: JSON.stringify(rentStatus),
        });

        setPaymentState("success");
      }
    } catch (error) {
      console.error(error);
      setPaymentState("error");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit} className="">
          <div className="flex flex-col justify-between">
            <CardElement className="py-8 px-10" />
            <div className="grid justify-items-center py-8 px-10">
              <button
                className="w-36 h-12 rounded-full transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[var(--theme-color2)] font-bold rounded-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {paymentState !== "none" && (
        <PaymentConfirm setPayment={setPayment} paymentState={paymentState} />
      )}
    </div>
  );
}
