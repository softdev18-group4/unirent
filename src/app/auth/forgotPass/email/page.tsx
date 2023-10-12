function Email() {
  return (
    <div className="flex w-screen h-screen bg-[#F1F6F9]">
      <form className="flex flex-col items-center pt-20 justify-start h-full w-full gap-8">
        <div className="font-bold uppercase text-2xl">forgot password?</div>
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
        <input
          type="submit"
          value="send"
          className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer bg-[coral] md:w-[30rem] text-white uppercase font-bold rounded-full w-96  h-12"
        ></input>
      </form>
    </div>
  );
}
export default Email;
