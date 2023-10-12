import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="main_container">
      <div className="flex w-screen h-screen bg-[#F1F6F9]">
        <Image
          src="/loginPic.png"
          alt="loginPicture"
          width={500}
          height={500}
          className="h-full w-[50%] hidden xl:flex"
        ></Image>
        <form className="flex flex-col items-center justify-center h-full w-full xl:w-[50%] gap-8">
          <div className="flex items-center justifiy-center uppercase pr-3 py-3 font-extrabold text-3xl">
            <div className="cursor-default flex">
              <div className="text-[#212a3e]">uni</div>
              <div className="text-[coral]">rent</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold uppercase">
              email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-bold uppercase">
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
            ></input>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="border-0"
                ></input>
                <label htmlFor="rememberMe" className="font-bold uppercase">
                  remember me
                </label>
              </div>
              <Link
                href="/auth/forgotPass/email"
                className="font-bold uppercase text-[coral]"
              >
                forget password?
              </Link>
            </div>
          </div>
          <div className="flex font-bold uppercase gap-2">
            not a member?
            <Link
              href="/auth/signup"
              className="font-bold uppercase text-[coral]"
            >
              sign up
            </Link>
          </div>
          <input
            type="submit"
            value="sign in"
            className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer bg-[#212A3E] md:w-[30rem] text-white uppercase font-bold rounded-full w-96  h-12"
          ></input>
          <svg
            width="504"
            height="21"
            viewBox="0 0 504 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-6"
          >
            <path
              d="M252.168 11.4545C252.168 12.8821 251.897 14.0966 251.356 15.098C250.819 16.0994 250.086 16.8643 249.157 17.3928C248.232 17.9169 247.192 18.179 246.038 18.179C244.874 18.179 243.83 17.9148 242.906 17.3864C241.981 16.858 241.25 16.093 240.713 15.0916C240.176 14.0902 239.908 12.8778 239.908 11.4545C239.908 10.027 240.176 8.8125 240.713 7.81108C241.25 6.80966 241.981 6.04687 242.906 5.52273C243.83 4.99432 244.874 4.73011 246.038 4.73011C247.192 4.73011 248.232 4.99432 249.157 5.52273C250.086 6.04687 250.819 6.80966 251.356 7.81108C251.897 8.8125 252.168 10.027 252.168 11.4545ZM249.362 11.4545C249.362 10.5298 249.223 9.75 248.946 9.11506C248.673 8.48011 248.288 7.99858 247.789 7.67045C247.29 7.34233 246.707 7.17827 246.038 7.17827C245.369 7.17827 244.785 7.34233 244.286 7.67045C243.788 7.99858 243.4 8.48011 243.123 9.11506C242.85 9.75 242.714 10.5298 242.714 11.4545C242.714 12.3793 242.85 13.1591 243.123 13.794C243.4 14.429 243.788 14.9105 244.286 15.2386C244.785 15.5668 245.369 15.7308 246.038 15.7308C246.707 15.7308 247.29 15.5668 247.789 15.2386C248.288 14.9105 248.673 14.429 248.946 13.794C249.223 13.1591 249.362 12.3793 249.362 11.4545ZM254.218 18V4.90909H259.383C260.371 4.90909 261.215 5.08594 261.914 5.43963C262.617 5.78906 263.152 6.28551 263.518 6.92898C263.889 7.56818 264.074 8.32031 264.074 9.18537C264.074 10.0547 263.887 10.8026 263.512 11.429C263.137 12.0511 262.594 12.5284 261.882 12.8608C261.175 13.1932 260.318 13.3594 259.312 13.3594H255.854V11.1349H258.865C259.393 11.1349 259.832 11.0625 260.182 10.9176C260.531 10.7727 260.791 10.5554 260.961 10.2656C261.136 9.97585 261.224 9.61577 261.224 9.18537C261.224 8.75071 261.136 8.38423 260.961 8.08594C260.791 7.78764 260.529 7.56179 260.175 7.40838C259.826 7.25071 259.385 7.17188 258.852 7.17188H256.986V18H254.218ZM261.287 12.0426L264.541 18H261.486L258.302 12.0426H261.287Z"
              fill="#394867"
            />
            <line y1="10.5" x2="214" y2="10.5" stroke="#394867" />
            <line x1="290" y1="10.5" x2="504" y2="10.5" stroke="#394867" />
          </svg>

          <button className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-[#212A3E] bg-white md:w-[30rem] uppercase font-bold rounded-full w-96 h-12 flex justify-center items-center gap-2">
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_88_78)">
                <path
                  d="M26.9856 12.7339C26.9856 11.7096 26.8938 10.9622 26.695 10.1871H13.7688V14.81H21.3562C21.2033 15.9589 20.3772 17.689 18.5415 18.8516L18.5158 19.0064L22.6028 21.8712L22.8859 21.8968C25.4864 19.7237 26.9856 16.5263 26.9856 12.7339Z"
                  fill="#4285F4"
                />
                <path
                  d="M13.769 24.9141C17.4862 24.9141 20.6068 23.8068 22.8861 21.8968L18.5417 18.8516C17.3791 19.5852 15.8188 20.0973 13.769 20.0973C10.1283 20.0973 7.03825 17.9243 5.93674 14.9208L5.77529 14.9332L1.52555 17.9091L1.46997 18.0489C3.73394 22.1181 8.38432 24.9141 13.769 24.9141Z"
                  fill="#34A853"
                />
                <path
                  d="M5.93674 14.9208C5.6461 14.1457 5.47789 13.3152 5.47789 12.4571C5.47789 11.5989 5.6461 10.7684 5.92145 9.99332L5.91375 9.82824L1.61075 6.80458L1.46997 6.86517C0.536875 8.55382 0.00146484 10.4501 0.00146484 12.4571C0.00146484 14.464 0.536875 16.3602 1.46997 18.0489L5.93674 14.9208Z"
                  fill="#FBBC05"
                />
                <path
                  d="M13.769 4.8167C16.3542 4.8167 18.098 5.8271 19.0924 6.67147L22.9779 3.23884C20.5916 1.23187 17.4862 0 13.769 0C8.38432 0 3.73394 2.7959 1.46997 6.86517L5.92145 9.99332C7.03825 6.98979 10.1283 4.8167 13.769 4.8167Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_88_78">
                  <rect width="27" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Continue with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
