function TableHeader() {
  return (
    <thead>
      <tr className="w-full h-16 font-bold">
        <th className="rounded-l-2xl bg-white w-[15%] md:w-[25%]">
          <div className="flex items-center justify-center">
            <div className="cursor-default flex items-center gap-1 md:gap-3">
              สินค้า
              {/* <svg
                className="w-2 h-2 md:w-3 md:h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg> */}
            </div>
          </div>
        </th>
        <th className="bg-white">
          <div className=" flex items-center">
            <div className="cursor-default flex items-center md:gap-3">
              สถานะ
              {/* <svg
                className="w-2 h-2 md:w-3 md:h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg> */}
            </div>
          </div>
        </th>
        <th className="cursor-default text-left bg-white">ระยะการเช่า</th>
        <th className="text-left bg-white">
          <div className="flex items-cente">
            <div className="cursor-default flex items-center md:gap-3">
              ราคา
              {/* <svg
                className="w-2 h-2 md:w-3 md:h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg> */}
            </div>
          </div>
        </th>
        <th className="cursor-default text-left bg-white">วันที่</th>
        <th className="cursor-default text-left bg-white">เวลาที่เหลือ</th>
        <th className="cursor-default text-left rounded-r-2xl bg-white">
          ยืนยันรับสินค้า
        </th>
      </tr>
    </thead>
  );
}
export default TableHeader;
