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
            <Link href="/" className="cursor-pointer flex">
              <div className="text-[color:var(--theme-color2)]">uni</div>
              <div className="text-[color:var(--theme-color1)]">rent</div>
            </Link>
          </div>
          <div className="flex w-full">
            <div className="grow-[1] flex items-center justify-evenly bg-[color:var(--theme-color1)] rounded-full font-medium px-3 py-2">
              {[
                ["Cart", "/checkout/cart"],
                ["Information", "/checkout/contract"],
                ["Payment", "/checkout/payment"],
              ].map(([title, url], index) => (
                <div
                  key={index}
                  // href={url}
                  className={
                    (pathname.includes("/checkout/cart") && title == "Cart") ||
                    (pathname.includes("/checkout/contract") &&
                      title == "Information") ||
                    (pathname.includes("/checkout/payment") &&
                      title == "Payment")
                      ? "grow rounded-full px-1 py-1 text-white text-center font-thin bg-slate-400 cursor-default"
                      : "grow rounded-full px-1 py-1 text-white text-center font-thin cursor-default"
                  }
                >
                  {title}
                </div>
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
