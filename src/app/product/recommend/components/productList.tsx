import ProductListCard from "./cards/productListCard";
import PaginaionBtn from "./button/paginationBtn";
import FilterBtn from "./button/filterBtn";

function ProductList() {
  return (
    <div>
      <div className="py-8 flex items-center">
        <FilterBtn></FilterBtn>
        <div className="grow-[5] mx-8 h-0 flex items-center justify-center border-dashed border border-black"></div>
        <div className="grow-[1]">
          <label className="relative text-gray-400 focus-within:text-gray-600 block">
            <input
              type="search"
              id="default-search"
              className="block w-full h-12 p-4 pl-12 text-sm text-gray-900 border drop-shadow-lg rounded-full bg-white "
              placeholder="Search..."
              required
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <ProductListCard></ProductListCard>
        <ProductListCard></ProductListCard>
        <ProductListCard></ProductListCard>
        <ProductListCard></ProductListCard>
        <ProductListCard></ProductListCard>
        <ProductListCard></ProductListCard>
      </div>
      <div className="flex justify-end my-10">
        <PaginaionBtn number="1"></PaginaionBtn>
        <PaginaionBtn number="2"></PaginaionBtn>
        <PaginaionBtn number="3"></PaginaionBtn>
        <PaginaionBtn number="4"></PaginaionBtn>
        <PaginaionBtn number="..."></PaginaionBtn>
      </div>
    </div>
  );
}
export default ProductList;
