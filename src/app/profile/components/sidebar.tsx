"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({
  dashboard,
  product,
  orders,
  message,
  history,
  reviews,
  settings,
  profileImg,
  name,
  email,
}: {
  dashboard: string;
  product: string;
  orders: string;
  message: string;
  history: string;
  reviews: string;
  settings: string;
  profileImg: string;
  name: string;
  email: string;
}) {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown != null) dropdown.classList.toggle("hidden");
    const svgDropdown = document.getElementById("svgDropdown");
    if (svgDropdown != null) svgDropdown.classList.toggle("scale-[-1]");
  };
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar != null) sidebar.classList.toggle("-translate-x-full");
    const padding = document.getElementById("padding");
    if (padding != null) padding.classList.toggle("hidden");
    const unirent = document.getElementById("unirent");
    if (unirent != null) unirent.classList.toggle("hidden");
  };

  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40">
      <div className="sticky top-0 md:hidden flex items-center mt-4 z-40 bg-[#f1f6f9]">
        <div id="padding" className="hidden w-64"></div>
        <button
          onClick={(e) => toggleSidebar()}
          type="button"
          className=" ml-3 px-4 py-2 bg-transparent hover:ring-4 hover:outline-none hover:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 fill-black"
          >
            <path d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <div
          id="unirent"
          className="flex justify-center items-center grow uppercase pr-3 py-3 font-extrabold text-3xl"
        >
          <a
            className="flex justify-center items-center cursor-pointer pr-5"
            href="/product/recommend"
          >
            <div className="theme-text-color2">uni</div>
            <div className="theme-text-color1">rent</div>
          </a>
        </div>
      </div>

      <aside
        className="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidebar"
        id="sidebar"
      >
        <div className="flex justify-center h-full px-3 pt-10 py-4 overflow-y-auto bg-white">
          <ul className="space-y-3 font-medium">
            <li>
              <a
                className="flex cursor-pointer grow-[1] items-center justifiy-center uppercase pr-3 py-3 font-extrabold text-3xl"
                href="/product/recommend"
              >
                <div className="theme-text-color2">uni</div>
                <div className="theme-text-color1">rent</div>
              </a>
            </li>
            <li>
              <Link
                href={dashboard}
                className={
                  pathname.includes(dashboard)
                    ? "flex items-center w-full p-2 text-base text-[color:var(--theme-color2)] transition duration-75 rounded-lg group"
                    : "flex items-center w-full p-2 text-base text-[color:var(--theme-color1)] transition duration-75 rounded-lg group hover:text-[color:var(--theme-color2)]"
                }
              >
                <svg
                  className={
                    pathname.includes(dashboard)
                      ? "w-5 h-5 text-[color:var(--theme-color2)] transition duration-75"
                      : "w-5 h-5 text-[color:var(--theme-color1)] transition duration-75 group-hover:text-[color:var(--theme-color2)]"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.99975 0C8.2444 4.45921e-05 6.51999 0.46214 4.99984 1.33984C3.47968 2.21754 2.21734 3.47993 1.33968 5.00011C0.462029 6.52029 -1.11483e-05 8.24472 2.01746e-10 10.0001C1.11487e-05 11.7554 0.462073 13.4798 1.33975 15C1.47235 15.2307 1.69119 15.3993 1.94812 15.4687C2.20504 15.5381 2.47901 15.5026 2.70975 15.37C2.94048 15.2374 3.10909 15.0186 3.17848 14.7616C3.24787 14.5047 3.21235 14.2307 3.07975 14C2.37119 12.7861 1.99843 11.4055 1.99975 10C2.00022 8.77318 2.28285 7.56291 2.82577 6.46276C3.36869 5.36262 4.15736 4.40208 5.13079 3.65541C6.10423 2.90875 7.23635 2.39597 8.43961 2.15672C9.64287 1.91747 10.885 1.95816 12.0701 2.27565C13.2551 2.59313 14.3512 3.17891 15.2737 3.98768C16.1962 4.79646 16.9203 5.80656 17.39 6.93987C17.8598 8.07319 18.0626 9.29937 17.9828 10.5236C17.903 11.7478 17.5427 12.9373 16.9297 14C16.8636 14.1141 16.8207 14.2402 16.8036 14.371C16.7864 14.5018 16.7952 14.6347 16.8296 14.762C16.864 14.8893 16.9233 15.0086 17.0039 15.113C17.0846 15.2173 17.1852 15.3047 17.2997 15.37C17.5294 15.5004 17.8012 15.5346 18.056 15.4653C18.3108 15.396 18.5278 15.2287 18.6597 15C19.5374 13.4798 19.9995 11.7554 19.9995 10.0001C19.9995 8.24472 19.5375 6.52029 18.6598 5.00011C17.7822 3.47993 16.5198 2.21754 14.9997 1.33984C13.4795 0.46214 11.7551 4.45921e-05 9.99975 0ZM12.8397 5.76L11.2897 7.3C10.8885 7.10218 10.4471 6.99952 9.99975 7C9.4064 7 8.82638 7.17595 8.33304 7.50559C7.83969 7.83524 7.45517 8.30377 7.22811 8.85195C7.00104 9.40013 6.94163 10.0033 7.05739 10.5853C7.17315 11.1672 7.45887 11.7018 7.87843 12.1213C8.29798 12.5409 8.83253 12.8266 9.41448 12.9424C9.99642 13.0581 10.5996 12.9987 11.1478 12.7716C11.696 12.5446 12.1645 12.1601 12.4942 11.6667C12.8238 11.1734 12.9997 10.5933 12.9997 10C12.9991 9.55599 12.8964 9.11808 12.6997 8.72L14.2497 7.18C14.3435 7.08704 14.4179 6.97644 14.4686 6.85458C14.5194 6.73272 14.5455 6.60201 14.5455 6.47C14.5455 6.33799 14.5194 6.20728 14.4686 6.08542C14.4179 5.96356 14.3435 5.85296 14.2497 5.76C14.0624 5.57375 13.8089 5.46921 13.5447 5.46921C13.2806 5.46921 13.0271 5.57375 12.8397 5.76ZM9.99975 11C9.73453 11 9.48018 10.8946 9.29264 10.7071C9.1051 10.5196 8.99975 10.2652 8.99975 10C8.99975 9.73478 9.1051 9.48043 9.29264 9.29289C9.48018 9.10536 9.73453 9 9.99975 9C10.2607 8.99843 10.5119 9.09891 10.6997 9.28C10.7954 9.37379 10.8713 9.48586 10.9228 9.60954C10.9744 9.73323 11.0005 9.86601 10.9997 10C10.9997 10.2652 10.8944 10.5196 10.7069 10.7071C10.5193 10.8946 10.265 11 9.99975 11Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={
                  pathname.includes(product) || pathname.includes(orders)
                    ? "flex items-center w-full p-2 text-base text-[color:var(--theme-color2)] transition duration-75 rounded-lg group"
                    : "flex items-center w-full p-2 text-base text-[color:var(--theme-color1)] transition duration-75 rounded-lg group hover:text-[color:var(--theme-color2)]"
                }
                onClick={(e) => toggleDropdown()}
              >
                <svg
                  className={
                    pathname.includes(product) || pathname.includes(orders)
                      ? "w-5 h-5 text-[color:var(--theme-color2)] transition duration-75"
                      : "w-5 h-5 text-[color:var(--theme-color1)] transition duration-75 group-hover:text-[color:var(--theme-color2)]"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 5.82245C20.0048 5.75921 20.0048 5.69569 20 5.63245L18 0.632454C17.9219 0.43481 17.7828 0.26719 17.603 0.153909C17.4232 0.0406286 17.212 -0.0124219 17 0.0024534H3C2.79972 0.00225952 2.604 0.0622081 2.43818 0.174534C2.27237 0.28686 2.1441 0.446388 2.07 0.632454L0.0699999 5.63245C0.0651796 5.69569 0.0651796 5.75921 0.0699999 5.82245C0.0367708 5.87812 0.0131096 5.93896 0 6.00245C0.0111306 6.69369 0.201226 7.37025 0.551745 7.96613C0.902263 8.56201 1.40124 9.05688 2 9.40245V19.0025C2 19.2677 2.10536 19.522 2.29289 19.7096C2.48043 19.8971 2.73478 20.0025 3 20.0025H17C17.2652 20.0025 17.5196 19.8971 17.7071 19.7096C17.8946 19.522 18 19.2677 18 19.0025V9.44245C18.6046 9.09343 19.1072 8.59228 19.4581 7.98879C19.809 7.38531 19.9958 6.70051 20 6.00245C20.0094 5.94282 20.0094 5.88209 20 5.82245ZM11 18.0025H9V14.0025H11V18.0025ZM16 18.0025H13V13.0025C13 12.7372 12.8946 12.4829 12.7071 12.2953C12.5196 12.1078 12.2652 12.0025 12 12.0025H8C7.73478 12.0025 7.48043 12.1078 7.29289 12.2953C7.10536 12.4829 7 12.7372 7 13.0025V18.0025H4V10.0025C4.56947 9.99924 5.13169 9.87447 5.64905 9.63648C6.16642 9.39849 6.627 9.05278 7 8.62245C7.37537 9.04808 7.83701 9.38896 8.35425 9.62245C8.87149 9.85595 9.4325 9.9767 10 9.9767C10.5675 9.9767 11.1285 9.85595 11.6458 9.62245C12.163 9.38896 12.6246 9.04808 13 8.62245C13.373 9.05278 13.8336 9.39849 14.3509 9.63648C14.8683 9.87447 15.4305 9.99924 16 10.0025V18.0025ZM16 8.00245C15.4696 8.00245 14.9609 7.79174 14.5858 7.41667C14.2107 7.04159 14 6.53289 14 6.00245C14 5.73724 13.8946 5.48288 13.7071 5.29535C13.5196 5.10781 13.2652 5.00245 13 5.00245C12.7348 5.00245 12.4804 5.10781 12.2929 5.29535C12.1054 5.48288 12 5.73724 12 6.00245C12 6.53289 11.7893 7.04159 11.4142 7.41667C11.0391 7.79174 10.5304 8.00245 10 8.00245C9.46957 8.00245 8.96086 7.79174 8.58579 7.41667C8.21071 7.04159 8 6.53289 8 6.00245C8 5.73724 7.89464 5.48288 7.70711 5.29535C7.51957 5.10781 7.26522 5.00245 7 5.00245C6.73478 5.00245 6.48043 5.10781 6.29289 5.29535C6.10536 5.48288 6 5.73724 6 6.00245C6.00985 6.2651 5.96787 6.52711 5.87646 6.77353C5.78505 7.01995 5.646 7.24595 5.46725 7.43863C5.28849 7.63132 5.07354 7.7869 4.83466 7.89651C4.59578 8.00612 4.33764 8.0676 4.075 8.07745C3.54457 8.09734 3.02796 7.90571 2.63882 7.5447C2.44614 7.36595 2.29055 7.15099 2.18094 6.91211C2.07133 6.67323 2.00985 6.4151 2 6.15245L3.68 2.00245H16.32L18 6.15245C17.9621 6.65647 17.7348 7.12744 17.3637 7.47066C16.9927 7.81388 16.5054 8.00388 16 8.00245Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  My Shop
                </span>
                <svg
                  id="svgDropdown"
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
              </button>
              <ul id="dropdown" className="hidden py-2 space-y-2">
                <li>
                  <Link
                    href={product}
                    className={
                      pathname.includes(product)
                        ? "flex items-center w-full p-2 text-[color:var(--theme-color2)] transition duration-75 rounded-lg pl-11 group"
                        : "flex items-center w-full p-2 text-[color:var(--theme-color1)] transition duration-75 rounded-lg pl-11 group hover:text-[color:var(--theme-color2)]"
                    }
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href={orders}
                    className={
                      pathname.includes(orders)
                        ? "flex items-center w-full p-2 text-[color:var(--theme-color2)] transition duration-75 rounded-lg pl-11 group"
                        : "flex items-center w-full p-2 text-[color:var(--theme-color1)] transition duration-75 rounded-lg pl-11 group hover:text-[color:var(--theme-color2)]"
                    }
                  >
                    Orders
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={message}
                className={
                  pathname.includes("message")
                    ? "flex items-center w-full p-2 text-base text-[color:var(--theme-color2)] transition duration-75 rounded-lg group"
                    : "flex items-center w-full p-2 text-base text-[color:var(--theme-color1)] transition duration-75 rounded-lg group hover:text-[color:var(--theme-color2)]"
                }
              >
                <svg
                  className={
                    pathname.includes("message")
                      ? "w-5 h-5 text-[color:var(--theme-color2)] transition duration-75"
                      : "w-5 h-5 text-[color:var(--theme-color1)] transition duration-75 group-hover:text-[color:var(--theme-color2)]"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.02819 9C5.83041 9 5.63707 9.05865 5.47262 9.16853C5.30817 9.27841 5.17999 9.43459 5.10431 9.61732C5.02862 9.80004 5.00882 10.0011 5.0474 10.1951C5.08599 10.3891 5.18123 10.5673 5.32108 10.7071C5.46093 10.847 5.63911 10.9422 5.8331 10.9808C6.02708 11.0194 6.22814 10.9996 6.41087 10.9239C6.5936 10.8482 6.74977 10.72 6.85966 10.5556C6.96954 10.3911 7.02819 10.1978 7.02819 10C7.02819 9.73478 6.92283 9.48043 6.73529 9.29289C6.54776 9.10536 6.2934 9 6.02819 9ZM10.0282 9C9.83041 9 9.63706 9.05865 9.47262 9.16853C9.30817 9.27841 9.17999 9.43459 9.10431 9.61732C9.02862 9.80004 9.00882 10.0011 9.0474 10.1951C9.08599 10.3891 9.18123 10.5673 9.32108 10.7071C9.46093 10.847 9.63912 10.9422 9.8331 10.9808C10.0271 11.0194 10.2281 10.9996 10.4109 10.9239C10.5936 10.8482 10.7498 10.72 10.8597 10.5556C10.9695 10.3911 11.0282 10.1978 11.0282 10C11.0282 9.73478 10.9228 9.48043 10.7353 9.29289C10.5478 9.10536 10.2934 9 10.0282 9ZM14.0282 9C13.8304 9 13.6371 9.05865 13.4726 9.16853C13.3082 9.27841 13.18 9.43459 13.1043 9.61732C13.0286 9.80004 13.0088 10.0011 13.0474 10.1951C13.086 10.3891 13.1812 10.5673 13.3211 10.7071C13.4609 10.847 13.6391 10.9422 13.8331 10.9808C14.0271 11.0194 14.2281 10.9996 14.4109 10.9239C14.5936 10.8482 14.7498 10.72 14.8597 10.5556C14.9695 10.3911 15.0282 10.1978 15.0282 10C15.0282 9.73478 14.9228 9.48043 14.7353 9.29289C14.5478 9.10536 14.2934 9 14.0282 9ZM10.0282 0C8.71497 0 7.41461 0.258658 6.20135 0.761205C4.9881 1.26375 3.8857 2.00035 2.95712 2.92893C1.08175 4.8043 0.0281864 7.34784 0.0281864 10C0.0194442 12.3091 0.818979 14.5485 2.28819 16.33L0.288186 18.33C0.149429 18.4706 0.0554325 18.6492 0.0180584 18.8432C-0.0193158 19.0372 0.0016069 19.2379 0.0781863 19.42C0.161244 19.5999 0.29589 19.7511 0.465033 19.8544C0.634176 19.9577 0.830187 20.0083 1.02819 20H10.0282C12.6804 20 15.2239 18.9464 17.0993 17.0711C18.9746 15.1957 20.0282 12.6522 20.0282 10C20.0282 7.34784 18.9746 4.8043 17.0993 2.92893C15.2239 1.05357 12.6804 0 10.0282 0ZM10.0282 18H3.43819L4.36819 17.07C4.46267 16.9774 4.53784 16.8669 4.58934 16.7451C4.64084 16.6232 4.66764 16.4923 4.66819 16.36C4.66443 16.0962 4.5566 15.8446 4.36819 15.66C3.05877 14.352 2.24336 12.6305 2.06088 10.7888C1.87839 8.94705 2.34013 7.09901 3.36741 5.55952C4.3947 4.02004 5.92398 2.88436 7.6947 2.34597C9.46543 1.80759 11.368 1.8998 13.0784 2.60691C14.7888 3.31402 16.201 4.59227 17.0746 6.22389C17.9482 7.85551 18.2291 9.73954 17.8693 11.555C17.5096 13.3705 16.5315 15.005 15.1017 16.1802C13.672 17.3554 11.8789 17.9985 10.0282 18Z" />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Message</span>
              </Link>
            </li>
            <li>
              <Link
                href={history}
                className={
                  pathname.includes(history)
                    ? "flex items-center w-full p-2 text-base text-[color:var(--theme-color2)] transition duration-75 rounded-lg group"
                    : "flex items-center w-full p-2 text-base text-[color:var(--theme-color1)] transition duration-75 rounded-lg group hover:text-[color:var(--theme-color2)]"
                }
              >
                <svg
                  className={
                    pathname.includes(history)
                      ? "w-5 h-5 text-[color:var(--theme-color2)] transition duration-75"
                      : "w-5 h-5 text-[color:var(--theme-color1)] transition duration-75 group-hover:text-[color:var(--theme-color2)]"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.8 1.3C9.9 -0.9 5.1 -0.2 2 2.8V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1V5.5C0 6.1 0.4 6.5 1 6.5H5.5C6.1 6.5 6.5 6.1 6.5 5.5C6.5 4.9 6.1 4.5 5.5 4.5H3.1C4.5 2.9 6.6 2 8.9 2C13.3 2 16.9 5.6 16.9 10C16.9 14.4 13.3 18 8.9 18C8.3 18 7.9 18.4 7.9 19C7.9 19.6 8.3 20 8.9 20C12.5 20 15.8 18.1 17.6 15C20.3 10.2 18.6 4.1 13.8 1.3ZM8.8 6C8.2 6 7.8 6.4 7.8 7V10C7.8 10.6 8.2 11 8.8 11H10.8C11.4 11 11.8 10.6 11.8 10C11.8 9.4 11.4 9 10.8 9H9.8V7C9.8 6.4 9.4 6 8.8 6Z" />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">History</span>
              </Link>
            </li>
            <li>
              <Link
                href={reviews}
                className={
                  pathname.includes(reviews)
                    ? "flex items-center w-full p-2 text-base text-[color:var(--theme-color2)] transition duration-75 rounded-lg group"
                    : "flex items-center w-full p-2 text-base text-[color:var(--theme-color1)] transition duration-75 rounded-lg group hover:text-[color:var(--theme-color2)]"
                }
              >
                <svg
                  className={
                    pathname.includes(reviews)
                      ? "w-5 h-5 text-[color:var(--theme-color2)] transition duration-75"
                      : "w-5 h-5 text-[color:var(--theme-color1)] transition duration-75 group-hover:text-[color:var(--theme-color2)]"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7 17V11C7 10.4696 6.78929 9.96086 6.41421 9.58579C6.03914 9.21071 5.53043 9 5 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H5C5.53043 19 6.03914 18.7893 6.41421 18.4142C6.78929 18.0391 7 17.5304 7 17ZM7 17V7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5H11C11.5304 5 12.0391 5.21071 12.4142 5.58579C12.7893 5.96086 13 6.46957 13 7V17M7 17C7 17.5304 7.21071 18.0391 7.58579 18.4142C7.96086 18.7893 8.46957 19 9 19H11C11.5304 19 12.0391 18.7893 12.4142 18.4142C12.7893 18.0391 13 17.5304 13 17M13 17V3C13 2.46957 13.2107 1.96086 13.5858 1.58579C13.9609 1.21071 14.4696 1 15 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H15C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
              </Link>
            </li>
            <li>
              <Link
                href={settings}
                className={
                  pathname.includes(settings)
                    ? "flex items-center w-full p-2 text-base text-[color:var(--theme-color2)] transition duration-75 rounded-lg group"
                    : "flex items-center w-full p-2 text-base text-[color:var(--theme-color1)] transition duration-75 rounded-lg group hover:text-[color:var(--theme-color2)]"
                }
              >
                <svg
                  className={
                    pathname.includes(settings)
                      ? "w-5 h-5 text-[color:var(--theme-color2)] transition duration-75"
                      : "w-5 h-5 text-[color:var(--theme-color1)] transition duration-75 group-hover:text-[color:var(--theme-color2)]"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.32 7.55L17.43 6.92L18.32 5.14C18.4102 4.95369 18.4404 4.74397 18.4064 4.53978C18.3723 4.33558 18.2758 4.14699 18.13 4L16 1.87C15.8522 1.72209 15.6618 1.62421 15.4555 1.59013C15.2493 1.55605 15.0375 1.58748 14.85 1.68L13.07 2.57L12.44 0.680003C12.3735 0.482996 12.2472 0.311629 12.0787 0.189751C11.9102 0.0678737 11.7079 0.00154767 11.5 3.33354e-06H8.5C8.29036 -0.000537828 8.08585 0.0648223 7.91537 0.186845C7.7449 0.308868 7.61709 0.481382 7.55 0.680003L6.92 2.57L5.14 1.68C4.95369 1.58978 4.74397 1.55961 4.53978 1.59364C4.33558 1.62767 4.14699 1.72423 4 1.87L1.87 4C1.72209 4.14777 1.62421 4.33818 1.59013 4.54446C1.55605 4.75074 1.58748 4.96251 1.68 5.15L2.57 6.93L0.680003 7.56C0.482996 7.62654 0.311629 7.75283 0.189751 7.92131C0.0678737 8.08979 0.00154767 8.29207 3.33354e-06 8.5V11.5C-0.000537828 11.7096 0.0648223 11.9142 0.186845 12.0846C0.308868 12.2551 0.481382 12.3829 0.680003 12.45L2.57 13.08L1.68 14.86C1.58978 15.0463 1.55961 15.256 1.59364 15.4602C1.62767 15.6644 1.72423 15.853 1.87 16L4 18.13C4.14777 18.2779 4.33818 18.3758 4.54446 18.4099C4.75074 18.444 4.96251 18.4125 5.15 18.32L6.93 17.43L7.56 19.32C7.62709 19.5186 7.7549 19.6911 7.92537 19.8132C8.09585 19.9352 8.30036 20.0005 8.51 20H11.51C11.7196 20.0005 11.9242 19.9352 12.0946 19.8132C12.2651 19.6911 12.3929 19.5186 12.46 19.32L13.09 17.43L14.87 18.32C15.0551 18.4079 15.2628 18.4369 15.4649 18.4029C15.667 18.3689 15.8538 18.2737 16 18.13L18.13 16C18.2779 15.8522 18.3758 15.6618 18.4099 15.4555C18.444 15.2493 18.4125 15.0375 18.32 14.85L17.43 13.07L19.32 12.44C19.517 12.3735 19.6884 12.2472 19.8103 12.0787C19.9321 11.9102 19.9985 11.7079 20 11.5V8.5C20.0005 8.29036 19.9352 8.08585 19.8132 7.91537C19.6911 7.7449 19.5186 7.61709 19.32 7.55ZM18 10.78L16.8 11.18C16.5241 11.2695 16.2709 11.418 16.0581 11.6151C15.8452 11.8122 15.6778 12.0533 15.5675 12.3216C15.4571 12.5899 15.4064 12.879 15.419 13.1688C15.4315 13.4586 15.5069 13.7422 15.64 14L16.21 15.14L15.11 16.24L14 15.64C13.7436 15.5122 13.4627 15.4411 13.1763 15.4313C12.89 15.4215 12.6049 15.4734 12.3403 15.5834C12.0758 15.6934 11.8379 15.8589 11.6429 16.0688C11.4479 16.2787 11.3003 16.5281 11.21 16.8L10.81 18H9.22L8.82 16.8C8.73049 16.5241 8.58203 16.2709 8.3849 16.0581C8.18778 15.8452 7.94671 15.6778 7.67842 15.5675C7.41014 15.4571 7.12105 15.4064 6.83123 15.419C6.5414 15.4315 6.25777 15.5069 6 15.64L4.86 16.21L3.76 15.11L4.36 14C4.4931 13.7422 4.56852 13.4586 4.58105 13.1688C4.59358 12.879 4.5429 12.5899 4.43254 12.3216C4.32218 12.0533 4.15478 11.8122 3.94195 11.6151C3.72912 11.418 3.47595 11.2695 3.2 11.18L2 10.78V9.22L3.2 8.82C3.47595 8.73049 3.72912 8.58203 3.94195 8.3849C4.15478 8.18778 4.32218 7.94671 4.43254 7.67842C4.5429 7.41014 4.59358 7.12105 4.58105 6.83123C4.56852 6.5414 4.4931 6.25777 4.36 6L3.79 4.89L4.89 3.79L6 4.36C6.25777 4.4931 6.5414 4.56852 6.83123 4.58105C7.12105 4.59358 7.41014 4.5429 7.67842 4.43254C7.94671 4.32218 8.18778 4.15478 8.3849 3.94195C8.58203 3.72912 8.73049 3.47595 8.82 3.2L9.22 2H10.78L11.18 3.2C11.2695 3.47595 11.418 3.72912 11.6151 3.94195C11.8122 4.15478 12.0533 4.32218 12.3216 4.43254C12.5899 4.5429 12.879 4.59358 13.1688 4.58105C13.4586 4.56852 13.7422 4.4931 14 4.36L15.14 3.79L16.24 4.89L15.64 6C15.5122 6.25645 15.4411 6.53735 15.4313 6.82369C15.4215 7.11003 15.4734 7.39513 15.5834 7.65969C15.6934 7.92424 15.8589 8.16207 16.0688 8.35708C16.2787 8.5521 16.5281 8.69973 16.8 8.79L18 9.19V10.78ZM10 6C9.20888 6 8.43552 6.2346 7.77772 6.67413C7.11993 7.11365 6.60724 7.73836 6.30448 8.46927C6.00173 9.20017 5.92252 10.0044 6.07686 10.7804C6.2312 11.5563 6.61217 12.269 7.17158 12.8284C7.73099 13.3878 8.44372 13.7688 9.21964 13.9231C9.99557 14.0775 10.7998 13.9983 11.5307 13.6955C12.2616 13.3928 12.8864 12.8801 13.3259 12.2223C13.7654 11.5645 14 10.7911 14 10C14 8.93914 13.5786 7.92172 12.8284 7.17158C12.0783 6.42143 11.0609 6 10 6ZM10 12C9.60444 12 9.21776 11.8827 8.88886 11.6629C8.55996 11.4432 8.30362 11.1308 8.15224 10.7654C8.00087 10.3999 7.96126 9.99778 8.03843 9.60982C8.1156 9.22186 8.30608 8.86549 8.58579 8.58579C8.86549 8.30608 9.22186 8.1156 9.60982 8.03843C9.99778 7.96126 10.3999 8.00087 10.7654 8.15224C11.1308 8.30362 11.4432 8.55996 11.6629 8.88886C11.8827 9.21776 12 9.60444 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12Z" />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
            <li>
              <div className="h-20"></div>
            </li>
            <li className="fixed left-0 bottom-0 pb-5 px-4 bg-white w-64">
              <div className="flex gap-2 items-center justify-start">
                <Image
                  src={profileImg}
                  width={60}
                  height={60}
                  objectFit="none"
                  alt="Picture of the author"
                  className="rounded-full w-[25%] aspect-square"
                />
                <div className="cursor-default justify-self-end grow flex flex-col items-start justify-center">
                  <div className="text-slate-600 text-sm">{name}</div>
                  <div className="text-slate-400 text-sm">{email}</div>
                </div>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer text-[color:var(--theme-color1)] hover:text-[color:var(--theme-color2)]"
                  fill="currentColor"
                >
                  <path d="M0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H8.59L6.29 13.29C6.19627 13.383 6.12188 13.4936 6.07111 13.6154C6.02034 13.7373 5.9942 13.868 5.9942 14C5.9942 14.132 6.02034 14.2627 6.07111 14.3846C6.12188 14.5064 6.19627 14.617 6.29 14.71C6.38296 14.8037 6.49356 14.8781 6.61542 14.9289C6.73728 14.9797 6.86799 15.0058 7 15.0058C7.13201 15.0058 7.26272 14.9797 7.38458 14.9289C7.50644 14.8781 7.61704 14.8037 7.71 14.71L11.71 10.71C11.801 10.6149 11.8724 10.5028 11.92 10.38C12.02 10.1365 12.02 9.86346 11.92 9.62C11.8724 9.49725 11.801 9.3851 11.71 9.29L7.71 5.29C7.61676 5.19676 7.50607 5.1228 7.38425 5.07234C7.26243 5.02188 7.13186 4.99591 7 4.99591C6.86814 4.99591 6.73757 5.02188 6.61575 5.07234C6.49393 5.1228 6.38324 5.19676 6.29 5.29C6.19676 5.38324 6.1228 5.49393 6.07234 5.61575C6.02188 5.73757 5.99591 5.86814 5.99591 6C5.99591 6.13186 6.02188 6.26243 6.07234 6.38425C6.1228 6.50607 6.19676 6.61676 6.29 6.71L8.59 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10ZM13 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7C1.26522 7 1.51957 6.89464 1.70711 6.70711C1.89464 6.51957 2 6.26522 2 6V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V14C2 13.7348 1.89464 13.4804 1.70711 13.2929C1.51957 13.1054 1.26522 13 1 13C0.734784 13 0.48043 13.1054 0.292893 13.2929C0.105357 13.4804 0 13.7348 0 14V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
export default Sidebar;
