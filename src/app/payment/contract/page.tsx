import Link from "next/link";

function Contract() {
  return (
    <div className="px-[5%]">
      <div className="flex flex-col lg:w-[60%] gap-2">
        <div className="font-bold text-slate-400">Pick up point</div>
        <div className="w-full h-0 border boerder-slate-400"></div>
        <div className="w-full flex items-center gap-6 p-6">
          <svg
            width="40"
            height="46"
            viewBox="0 0 40 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20"
          >
            <path
              d="M32.7281 32.7281C30.6205 34.8354 26.2136 39.2423 23.1811 42.2748C21.4236 44.0323 18.5774 44.0332 16.8199 42.2757C13.8403 39.2961 9.51859 34.9745 7.2721 32.7281C0.242635 25.6986 0.242635 14.3015 7.2721 7.2721C14.3015 0.242635 25.6986 0.242635 32.7281 7.2721C39.7573 14.3015 39.7573 25.6986 32.7281 32.7281Z"
              stroke="#4A5568"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.75 20C26.75 23.728 23.728 26.75 20 26.75C16.272 26.75 13.25 23.728 13.25 20C13.25 16.2721 16.272 13.25 20 13.25C23.728 13.25 26.75 16.2721 26.75 20Z"
              stroke="#4A5568"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-col">
            <div className="font-bold text-slate-700">
              ECC Building Moo1 Ladkrabang 1 ถนนฉลองกรุง 22 แขวงบลาๆๆ
              เขตลาดกระบัง กรุงเทพมหานคร 10520
            </div>
            <div className="self-end font-bold text-slate-400">
              Open in Google Map
            </div>
          </div>
        </div>
        <div className="w-full h-0 border boerder-slate-400"></div>
        <div className="font-bold text-slate-400">Contract</div>
        <div className="font-bold text-slate-800">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de
          Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum,
          Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </div>
      </div>

      {/* bottom */}
      <div className="sticky pb-8 bottom-0 h-24 z-40 bg-[#f1f6f9] lg:w-[60%] flex justify-between items-end">
        <Link href="/payment/cart" className="font-bold text-slate-400">
          &lt; Return To Cart
        </Link>
        <Link
          href="/payment/payment"
          className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[color:var(--theme-color2)] w-48 uppercase font-bold rounded-full h-12 flex justify-center items-center gap-2"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
export default Contract;
