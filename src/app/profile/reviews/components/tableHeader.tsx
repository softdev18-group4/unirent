function TableHeader() {
  return (
    <thead>
      <tr className="w-full h-16 font-bold">
        <th className="rounded-l-2xl bg-white w-[50%]">
          <div className="flex items-center justify-center">
            <div className="cursor-default flex items-center gap-1 md:gap-3">
              สินค้า
            </div>
          </div>
        </th>
        <th className="bg-white">
          <div className=" flex items-center">
            <div className="cursor-default flex items-center md:gap-3">
              สถานะ
            </div>
          </div>
        </th>

        <th className="cursor-default text-left rounded-r-2xl bg-white">
          คะแนนรีวิวเฉลี่ย
        </th>
      </tr>
    </thead>
  );
}
export default TableHeader;
