import Image from "next/image";

function ProductCard({
  imgSrc,
  name,
  status,
  period,
  price,
  date,
  timeleft,
}: {
  imgSrc: string;
  name: string;
  status: string;
  period: string;
  price: string;
  date: string;
  timeleft: string;
}) {
  return (
    <tr className="cursor-pointer w-full h-20 bg-white font-semibold">
      <th className="rounded-l-2xl bg-white">
        <div className="flex items-center justify-center gap-4">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5M7 9V15M11 9V15M12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5M1 5H17"
              stroke="#EB4335"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Image
            src={imgSrc}
            width={60}
            height={60}
            objectFit="none"
            alt="Picture of the author"
            className="hidden lg:flex aspect-square"
          />
          {name}
        </div>
      </th>

      <th className="text-yellow-500 text-left bg-white">{status}</th>
      <th className="text-slate-400 text-left bg-white">{period}</th>
      <th className="bg-white text-left">{price}</th>
      <th className="text-slate-400 text-left bg-white">{date}</th>
      <th className="rounded-r-2xl text-left bg-white">{timeleft}</th>
    </tr>
  );
}
export default ProductCard;
