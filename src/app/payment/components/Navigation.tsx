"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="px-[5%] sticky top-0 z-40 bg-[#f1f6f9]">
      <nav>
        <div className="flex justify-center items-center lg:items-start py-4 flex-col gap-6 lg:gap-12 z-30">
          <div className="flex grow-[1] items-center justifiy-center uppercase pr-3 py-3 font-extrabold text-3xl">
            <a href="/product/recommend" className="cursor-pointer flex">
              <div className="text-[color:var(--theme-color2)]">uni</div>
              <div className="text-[color:var(--theme-color1)]">rent</div>
            </a>
          </div>
          <div className="flex w-full">
            <div className="grow-[1] flex items-center justify-evenly bg-[color:var(--theme-color1)] rounded-full font-medium px-3 py-2">
              {[
                ["Cart", "/payment/cart"],
                ["Information", "/payment/contract"],
                ["Payment", "/payment/payment"],
              ].map(([title, url], index) => (
                <Link
                  key={index}
                  href={url}
                  className={
                    (pathname.includes("/payment/cart") && title == "Cart") ||
                    (pathname.includes("/payment/contract") &&
                      title == "Information") ||
                    (pathname.includes("/payment/payment") &&
                      title == "Payment")
                      ? "grow rounded-full px-1 py-1 text-white text-center font-thin bg-slate-400 hover:font-normal"
                      : "grow rounded-full px-1 py-1 text-white text-center font-thin hover:bg-slate-400 hover:font-normal"
                  }
                >
                  {title}
                </Link>
              ))}
            </div>
            <div className="lg:grow-[3]"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
