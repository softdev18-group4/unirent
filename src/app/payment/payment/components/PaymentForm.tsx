"use client"

import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import { API_HOST } from "@/app/config";
import PaymentConfirm from "./PaymentConfirm";

interface Props {
    setPayment: (value: boolean) => void
}

export default function PaymentForm({ setPayment }: Props) {
    const stripe = useStripe();
    const element = useElements();
    const { data: session } = useSession();
    const [paymentState, setPaymentState] = useState<string>('none');


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cardElement = element?.getElement("card")!;
        // elements.getElement(CardElement)!;

        try {
            if (!stripe || !CardElement) return null;
            const orderId = "652badcae6839f6ce48b174a"
            const res = await fetch(`${API_HOST}/payment/${orderId}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${session?.user.accessToken}`
                },
            })


            const data = await res.json()
            console.log(data)
            const clientSecret = data.client_secret

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });

            if (result.error) {
                console.log(result.error.message)
                setPaymentState('error');
            } else if (result.paymentIntent.status === "succeeded") {
                console.log("Payment succeeded!");
                setPaymentState('success');
            }

        } catch (error) {
            console.log(error);
            setPaymentState('error');
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={onSubmit} className="">
                    <div className="flex flex-col justify-between">
                        <CardElement className="py-8 px-10" />
                        <div className="border-2 grid justify-items-center py-8 px-10">
                            <button className="w-36 h-12 rounded-fulltransition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] font-bold rounded-full"
                                type="submit">
                                submit </button>
                        </div>
                    </div>
                </form>
            </div>
            {paymentState != 'none' ? <PaymentConfirm setPayment={setPayment} paymentState={paymentState} /> : null}
        </div>
    );
}