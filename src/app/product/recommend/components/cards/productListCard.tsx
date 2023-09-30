import Image from "next/image";
import Star from "../Star";
function ProductListCard({
  id,
  name,
  description,
  ownerId,
  availability,
  availableDays: { startDate, endDate },
  specifications: {
    brand,
    model,
    processor,
    graphicCard,
    ramSize,
    storageSize,
  },
}: {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  availability: boolean;
  availableDays: {
    startDate: Date;
    endDate: Date;
  };
  specifications: {
    brand: string;
    model: string;
    processor: string;
    graphicCard: string;
    ramSize: number;
    storageSize: number;
  };
}) {
  return (
    <a
      href={"/product/detail/" + id}
      className="cursor-pointer drop-shadow-lg bg-white rounded-xl"
    >
      <div className="flex flex-col justify-center h-[100%]">
        {
          <Image
            src={"/product.png"}
            width={1000}
            height={1000}
            alt="Picture of the author"
            className="w-[100%] rounded-t-xl"
          />
        }

        <div className="grow p-4 lg:p-6 flex flex-col justify-between gap-5">
          <div>
            <div className="font-extrabold ">{name}</div>
            <div className="font-light text-slate-500">{description}</div>
          </div>

          <div className="flex justify-between items-end ">
            <div className="font-normal text-slate-700">ระยะเวลา 1-14 วัน</div>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex items-end gap-1">
                <div className="font-bold text-slate-600 text-3xl">1000฿</div>
                <div className="text-slate-600 ">/วัน</div>
              </div>
              <div className="flex justify-end">
                <Star rating={4}></Star>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
export default ProductListCard;
