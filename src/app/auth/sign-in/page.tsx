
import Form from "./Form";
const Page = () => {
  return (
    <div className="main_container fixed">
      <div className="flex w-screen h-screen min-h-[40rem] bg-[#F1F6F9]">
        <img
          src="/loginPic.png"
          alt="loginPicture"
          width={500}
          height={500}
          className="h-full w-[50%] hidden xl:flex"
        ></img>
        <Form />
      </div>
    </div>
  );
};

export default Page;
