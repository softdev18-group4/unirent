function DescriptionBox() {
  return (
    <div className="w-full row-start-5 col-start-1 row-span-6 col-span-1 xl:row-start-1 xl:col-start-1 xl:row-span-6 xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        คำอธิบายสินค้า
      </div>
      <div className="flex flex-col gap-3 bg-white w-full h-full  rounded-2xl drop-shadow-2xl p-4 xl:p-6">
        <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
          ชื่อสินค้า
        </div>
        <input
          type="text"
          id="product name"
          className="block w-full h-12 p-3 text-sm border border-slate-400 rounded bg-slate-50 resize-none"
          required
        ></input>
        <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
          คำอธิบาย
        </div>
        <textarea
          id="description"
          className="block w-full h-full p-3 text-sm border border-slate-400 rounded bg-slate-50 resize-none"
          required
        ></textarea>
      </div>
    </div>
  );
}
export default DescriptionBox;
