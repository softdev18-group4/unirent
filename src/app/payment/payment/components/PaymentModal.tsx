import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "@/app/config";

interface Mordal {
  showModal: (show: boolean) => void;
  paymentMethod:number;
}

export default function PaymentModal({ showModal, paymentMethod }: Mordal) {
  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY!);

  const handleMordal = () => {
    showModal(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-full w-full bg-black bg-opacity-50 grid justify-items-center items-center">
      <div className="bg-white rounded-xl shadow sm:w-1/2 sm:h-2/3 md:w-4/5 md:h-1/2 lg:w-1/2 lg:h-2/3 w-4/5 h-1/2">
        <div className="grid justify-items-end px-4 py-4">
            <svg
              onClick={handleMordal}
              className="w-12 cursor-pointer"
              fill="#FF6E31"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="cross-circle"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.42,9.71,15.71a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.58,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.58l2.29-2.29a1,1,0,0,1,1.42,1.42L13.42,12Z"></path>
              </g>
            </svg>
        </div>
        <div className="flex flex-col">
          <div style={{display : `${paymentMethod == 3 ? "" : "none"}`}}>
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </div>
          <div style={{display : `${paymentMethod != 3 ? "" : "none"}`}} className="w-full border-2">
            <div className="font-semibold	text-4xl grid justify-items-center">Coming Soon!</div>
          </div>
          </div>
      </div>
    </div>
  );
}
