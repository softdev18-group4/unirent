import Link from "next/link";
import { Metadata } from "next";
import From from "../components/Form";
export const metadata: Metadata = {
  // title: "Add Product",
};

function AddProduct() {
  return (
    <div className="px-10 py-6">
      <div className="cursor-default font-semibold ml-16 text-md lg:text-xl text-slate-400">
        back to your product
      </div>
      <div className="flex items-center justify-start gap-3">
        <Link
          className="w-12 h-12 rounded-xl bg-white hover:bg-slate-200 border border-slate-400 flex items-center justify-center"
          href="/my-shop/products"
        >
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.473537 9.64639L7.26124 16.5204C7.41006 16.6724 7.58712 16.793 7.7822 16.8753C7.97728 16.9576 8.18652 17 8.39786 17C8.60919 17 8.81844 16.9576 9.01352 16.8753C9.2086 16.793 9.38566 16.6724 9.53448 16.5204C9.83264 16.2167 10 15.8058 10 15.3775C10 14.9492 9.83264 14.5383 9.53448 14.2345L3.86739 8.49531L9.53448 2.75613C9.83264 2.45237 10 2.04146 10 1.61316C10 1.18485 9.83264 0.773943 9.53448 0.470184C9.38489 0.319925 9.20749 0.20105 9.01244 0.120369C8.8174 0.0396882 8.60854 -0.00120532 8.39786 2.68429e-05C8.18717 -0.00120529 7.97832 0.0396883 7.78327 0.120369C7.58823 0.20105 7.41082 0.319926 7.26124 0.470185L0.473537 7.34424C0.323489 7.49495 0.204394 7.67426 0.12312 7.87182C0.0418455 8.06939 1.14513e-06 8.28129 1.16385e-06 8.49531C1.18256e-06 8.70934 0.0418456 8.92124 0.12312 9.1188C0.204394 9.31637 0.323489 9.49568 0.473537 9.64639Z"
              fill="#9BA4B5"
            />
          </svg>
        </Link>
        <div className="cursor-default font-bold uppercase text-2xl lg:text-3xl">
          add product
        </div>
      </div>
      <div className="my-20">
        <From />
      </div>
    </div>
  );
}
export default AddProduct;
