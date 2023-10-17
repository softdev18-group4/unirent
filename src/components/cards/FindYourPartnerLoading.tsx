function FindYourPartnerLoadingCard() {
  return (
    <div className="animate-pulse grow-[3] cursor-pointer items-stretch">
      <div className="flex gap-4 items-center justify-start drop-shadow-lg h-24 bg-white p-3 rounded-xl">
        <div className="h-20 w-20 aspect-square rounded-full bg-slate-200"></div>
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="h-4 bg-slate-200 rounded-full col-span-1"></div>
          <div className="col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded-full col-span-2"></div>
        </div>
      </div>
    </div>
  );
}
export default FindYourPartnerLoadingCard;
