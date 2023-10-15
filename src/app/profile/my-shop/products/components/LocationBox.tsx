function LocationBox() {
  return (
    <div className="-z-50 w-full row-start-[25] col-start-1 row-span-2 col-span-1 xl:row-start-[11] xl:col-start-2 xl:row-span-2 xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        จุดรับสินค้า
      </div>
      <div className="flex bg-white w-full h-full rounded-2xl items-center justify-center drop-shadow-2xl p-4 lg:p-8">
        <div className="w-full h-10 border border-slate-400 rounded-xl bg-slate-50 hover:bg-slate-100 flex px-3 justify-between items-center">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6998 8.36364C14.6998 14.0909 7.84989 19 7.84989 19C7.84989 19 1 14.0909 1 8.36364C1 6.41068 1.72168 4.53771 3.00629 3.15676C4.29089 1.77581 6.03319 1 7.84989 1C9.6666 1 11.4089 1.77581 12.6935 3.15676C13.9781 4.53771 14.6998 6.41068 14.6998 8.36364Z"
              stroke="#9BA4B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.84989 10.8183C9.11092 10.8183 10.1332 9.71933 10.1332 8.36373C10.1332 7.00812 9.11092 5.90918 7.84989 5.90918C6.58886 5.90918 5.56659 7.00812 5.56659 8.36373C5.56659 9.71933 6.58886 10.8183 7.84989 10.8183Z"
              stroke="#9BA4B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.71588 4.32565L1.64326 0.282094C1.55396 0.192708 1.44773 0.12176 1.33068 0.0733435C1.21363 0.024927 1.08809 0 0.961285 0C0.834485 0 0.708939 0.024927 0.59189 0.0733435C0.474841 0.12176 0.368606 0.192708 0.279313 0.282094C0.100415 0.460776 0 0.702485 0 0.954431C0 1.20638 0.100415 1.44809 0.279313 1.62677L3.67957 5.00276L0.279313 8.37875C0.100415 8.55743 0 8.79914 0 9.05108C0 9.30303 0.100415 9.54474 0.279313 9.72342C0.369065 9.81181 0.475506 9.88174 0.592534 9.92919C0.709562 9.97665 0.834874 10.0007 0.961285 9.99998C1.0877 10.0007 1.21301 9.97665 1.33004 9.92919C1.44706 9.88174 1.55351 9.81181 1.64326 9.72342L5.71588 5.67986C5.80591 5.59121 5.87736 5.48573 5.92613 5.36952C5.97489 5.2533 6 5.12865 6 5.00276C6 4.87686 5.97489 4.75221 5.92613 4.636C5.87736 4.51978 5.80591 4.41431 5.71588 4.32565Z"
              fill="#394867"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default LocationBox;
