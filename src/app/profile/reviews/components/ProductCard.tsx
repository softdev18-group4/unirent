import Image from "next/image";
import Link from "next/link";
import Star from "./Star";

function ProductCard({
  imgSrc,
  name,
  status,
  productId,
  rating,
}: {
  imgSrc: string;
  name: string;
  status: string;
  rating: number;
  productId: string;
}) {
  return (
    <tr className="cursor-default w-full h-20 bg-white font-semibold">
      <td className="rounded-l-2xl bg-white">
        <Link
          className="flex items-center justify-left truncate"
          href={"/product/detail/" + productId}
        >
          <div className="flex items-center gap-2 w-full ml-[calc(20%)]">
            <div className="flex gap-2 items-center h-[80px] w-full truncate">
              <Image
                src={imgSrc}
                width={60}
                height={60}
                objectFit="none"
                alt="Picture of the product"
                className="hidden rounded-md lg:flex aspect-square"
              />
              {name}
            </div>
          </div>
        </Link>
      </td>

      <td>
        <Link
          href={"/product/detail/" + productId}
          className={
            status == "ว่าง" || status == "กำลังดำเนินการ"
              ? "text-yellow-500 text-left bg-white truncate flex items-center justify-start w-full h-[80px]"
              : "text-green-500 text-left bg-white truncate flex items-center justify-start w-full h-[80px]"
          }
        >
          {status}
        </Link>
      </td>
      <td className="rounded-r-2xl text-left bg-white truncate">
        <Link
          href={"/product/detail/" + productId}
          className="rounded-r-2xl text-left bg-white truncate flex items-center justify-start w-full h-[80px]"
        >
          {rating == -1 ? "ไม่มีรีวิว" : <Star rating={rating}></Star>}
        </Link>
      </td>
    </tr>
  );
}
export default ProductCard;
