function ResetCode() {
  return (
    <div className="flex w-screen h-screen bg-[#F1F6F9]">
      <div className="flex flex-col items-center pt-20 justify-start h-full w-full gap-8">
        <div className="font-bold uppercase text-2xl">
          Reset Code is in your email
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold uppercase">
            reset code
          </label>
          <input
            type="text"
            id="reset"
            name="reset"
            className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
          ></input>
        </div>
      </div>
    </div>
  );
}
export default ResetCode;
