function TableHeader() {
  return (
    <div className="mt-6 w-full rounded-2xl bg-white h-16 flex items-center justify-between py-4 px-20 font-bold">
      <div className="flex items-center gap-3 cursor-pointer">
        <div>สินค้า</div>
        <svg
          className="w-3 h-3"
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
        </svg>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <div>สถานะ</div>
        <svg
          className="w-3 h-3"
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
        </svg>
      </div>
      <div>ระยะการเช่า</div>
      <div className="flex items-center gap-3 cursor-pointer">
        <div>ราคา</div>
        <svg
          className="w-3 h-3"
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
        </svg>
      </div>
      <div>วันที่</div>
      <div>เวลาที่เหลือ</div>
    </div>
  );
}
export default TableHeader;
