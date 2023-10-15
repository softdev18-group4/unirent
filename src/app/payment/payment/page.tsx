"use client"

import { useState } from "react";
import Link from "next/link";
import PaymentModal from "./components/PaymentModal";


function Payment() {
  const [paymentMethod,setPaymentMethod] = useState<number>(1)
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return(
    <div>
    <div className="px-[5%]">
    <div className="my-3 font-bold text-gray-500">Payment Method</div>  
    <div className="flex flex-col space-y-5">    
        <div className="lg:w-2/3 lg:pr-[5%]">
            <div onClick={()=>setPaymentMethod(1)} className="bg-white w-full h-28 rounded-2xl" style={{
              border : `${paymentMethod == 1 ? "3px solid coral" : "none"}`
            }}>
              <div className="flex justify-between px-4 h-full">
                <div className="flex justify-start gap-x-4">
                  <div className="w-20 flex justify-center">
                  <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="6.5" y="3" width="12" height="18" rx="3" stroke="#394867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M12.5 18.5C12.3665 18.5 12.2409 18.448 12.1465 18.3536C12.052 18.2591 12 18.1336 12 18C12 17.9008 12.0291 17.8047 12.0843 17.7222C12.1394 17.6397 12.217 17.576 12.3086 17.5381C12.3696 17.5128 12.434 17.5 12.5 17.5C12.5327 17.5 12.5655 17.5032 12.5975 17.5096C12.6949 17.529 12.7834 17.5763 12.8536 17.6464C12.9237 17.7166 12.971 17.8051 12.9904 17.9025C13.0098 17.9998 12.9999 18.0997 12.9619 18.1913C12.924 18.283 12.8603 18.3606 12.7778 18.4157C12.6953 18.4709 12.5992 18.5 12.5 18.5Z" fill="#394867"></path> <path d="M12.5 19C12.2348 19 11.9804 18.8946 11.7929 18.7071C11.6054 18.5196 11.5 18.2652 11.5 18C11.5 17.8022 11.5586 17.6089 11.6685 17.4444C11.7784 17.28 11.9346 17.1518 12.1173 17.0761C12.3 17.0004 12.5011 16.9806 12.6951 17.0192C12.8891 17.0578 13.0673 17.153 13.2071 17.2929C13.347 17.4327 13.4422 17.6109 13.4808 17.8049C13.5194 17.9989 13.4996 18.2 13.4239 18.3827C13.3482 18.5654 13.22 18.7216 13.0556 18.8315C12.8911 18.9414 12.6978 19 12.5 19Z" fill="#394867"></path> </g></svg>
                  </div>
                  <div className="text-lg align-middle font-bold text-[#394867] flex items-center ">
                    Mobile Banking
                  </div>
                </div>
                <div className="w-12  flex justify-center" style={{display : `${paymentMethod == 1 ? "" : "none"}`}}>
                  <svg fill="#FF6E31" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path></g></svg>
                </div>
              </div>
            </div>
        </div>
      <div className="lg:w-2/3 lg:pr-[5%]">
            <div onClick={()=>setPaymentMethod(2)} className="bg-white w-full h-28 rounded-2xl" style={{
              border : `${paymentMethod == 2 ? "3px solid coral" : "none"}`
            }}>
              <div className="flex justify-between px-4 h-full">
                <div className="flex justify-start gap-x-4">
                  <div className="w-20 flex justify-center">
                  <svg fill="#394867" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,2H15a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h1v2h2V10h2v2h2V3A1,1,0,0,0,21,2ZM18,8H16V4h4V8ZM3,10H9a1,1,0,0,0,1-1V3A1,1,0,0,0,9,2H3A1,1,0,0,0,2,3V9A1,1,0,0,0,3,10ZM4,4H8V8H4ZM5,16v2H3V16ZM3,20H5v2H3Zm4-2v2H5V18Zm0-2H5V14H7V12H9v4ZM5,12v2H3V12Zm9,3v1H13V14H11v4h3v3a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H16V12H14Zm6,1v4H16V16ZM9,18h2v2h1v2H7V20H9ZM13,6H11V4h2ZM11,8h2v4H11ZM5,5H7V7H5ZM17,5h2V7H17Zm2,14H17V17h2Z"></path></g></svg>
                  </div>
                  <div className="text-lg align-middle font-bold text-[#394867] flex items-center ">
                    Qr Payment
                  </div>
                </div>
                <div className="w-12  flex justify-center" style={{display : `${paymentMethod == 2 ? "" : "none"}`}}>
                  <svg fill="#FF6E31" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path></g></svg>
                </div>
              </div>
            </div>
        </div>
      <div className="lg:w-2/3 lg:pr-[5%]">
            <div onClick={()=>setPaymentMethod(3)} className="bg-white w-full h-28 rounded-2xl" style={{
              border : `${paymentMethod == 3 ? "3px solid coral" : "none"}`
            }}>
              <div className="flex justify-between px-4 h-full">
                <div className="flex justify-start gap-x-4">
                  <div className="w-20 flex justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#394867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                  <div className="text-lg align-middle font-bold text-[#394867] flex items-center ">
                    Credit Card
                  </div>
                </div>
                <div className="w-12  flex justify-center" style={{display : `${paymentMethod == 3 ? "" : "none"}`}}>
                  <svg fill="#FF6E31" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path></g></svg>
                </div>
              </div>
            </div>
        </div>     
      </div>
      
      {/* bottom */}
      <div className="sticky pb-8 bottom-0 h-24 z-40 bg-[#f1f6f9] lg:w-2/3 lg:pr-[5%] flex justify-between items-end">
        <Link href="/payment/contract" className="font-bold text-slate-400">
          &lt; Return To Cart
        </Link>
        <Link
          onClick={toggleModal}
          href=""
          className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] w-48 uppercase font-bold rounded-full h-12 flex justify-center items-center gap-2"
        >
          Next
        </Link>
      </div>
      
    </div>

      {showModal && <PaymentModal showModal={setShowModal}/>}
      
    </div>
  );
}
export default Payment;
