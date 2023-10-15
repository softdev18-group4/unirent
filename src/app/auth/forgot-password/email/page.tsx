"use client";

import { useState } from "react";

function Email() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleInput = (e: any, name?: string) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex w-screen h-screen min-h-[20rem] bg-[#F1F6F9]">
      <form
        className="flex flex-col items-center pt-20 justify-start h-full w-full gap-8"
        onSubmit={onSubmit}
      >
        <div className="font-bold uppercase text-2xl">forgot password?</div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold uppercase">
            email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleInput}
            className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
            required
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
