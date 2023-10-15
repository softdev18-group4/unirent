import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";

interface Mordal{
    showModal : (show : boolean) => void;
}

export default function PaymentModal({ showModal } : Mordal){
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );

    const handleMordal = () =>{
        showModal(false)
    }

    return(
        <div className="fixed top-0 left-0 right-0 z-40 h-full w-full bg-black bg-opacity-50 grid justify-items-center items-center">
            <div onClick={handleMordal} className="bg-white rounded-xl shadow sm:w-1/2 sm:h-2/3 md:w-4/5 md:h-1/2 lg:w-1/2 lg:h-2/3 w-4/5 h-1/2">
                <div className="h-full w-full flex flex-col justify-start md:gap-24">
                    <div className="grid justify-items-end px-4 py-4">
                            <svg className="w-12" fill="#FF6E31" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="cross-circle" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.42,9.71,15.71a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.58,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.58l2.29-2.29a1,1,0,0,1,1.42,1.42L13.42,12Z"></path></g></svg>
                    </div>
                    <div className="h-full w-full">
                        <Elements stripe={stripePromise}>
                            <PaymentForm/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
}