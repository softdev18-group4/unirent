"use client"

import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

export default function PaymentForm(){
    const stripe = useStripe();
    const element = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cardElement = element?.getElement("card")!;
        // elements.getElement(CardElement)!;

        try{
            if(!stripe || !CardElement) return null;
            const { data } =  await axios.post("/api-unirent.1tpp.dev/payment/",{
                data: {orderId : "652badcae6839f6ce48b174a"},
            });
            
            // const { data } = dataObj
            const clientSecret = data;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });

            if(result.error){
                console.error(result.error.message)
            }else if (result.paymentIntent.status === "succeeded") {
                console.log("Payment succeeded!");
            }

        }catch(error){
            console.error(error);
        }
    };

    return(
        <form onSubmit={onSubmit} className="">
            <div className="flex flex-col justify-between h-full ">
                <CardElement className="py-8 px-10" />
                <div className="border-2 grid justify-items-center py-8 px-10">
                    <button className="w-36 h-12 rounded-fulltransition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] font-bold rounded-full" type="submit">submit</button>
                </div>
            </div>
        </form>
    );
}