import Star from "../Star";

function LoadingCard() {
  return (
    <div className="animate-pulse drop-shadow-lg bg-white rounded-xl">
      <div className="flex flex-col justify-center h-[100%]">
        <div className="h-40"></div>

        <div className="grow p-4 lg:p-6 flex flex-col justify-between gap-5">
          <div>
            <div className="font-extrabold "></div>
            <div className="font-light text-slate-200"></div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-slate-200 rounded col-span-1"></div>
              <div className="col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-3"></div>
              <div className="col-span-3"></div>
              <div className="col-span-3"></div>
              <div className="col-span-2"></div>
              <div className="h-4 bg-slate-200 rounded col-span-1"></div>
              <div className="h-3 bg-slate-200 rounded col-span-1"></div>
              <div className="col-span-1"></div>
              <div className="col-span-1 flex justify-end">
                <Star rating={5}></Star>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoadingCard;
