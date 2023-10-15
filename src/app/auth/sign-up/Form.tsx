"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { API_HOST } from "@/app/config";

type SignUpSchema = z.infer<typeof signUpSchema>;

const signUpSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Form: React.FC = () => {
  const {
    register: handleSignUp,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/auth/sign-in";

  const onSubmit: SubmitHandler<SignUpSchema> = async (data, e) => {
    e?.preventDefault();
    const { email, password, firstName, lastName } = data;

    const result = await fetch(`${API_HOST}/auth/sign-up`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (result?.error) {
      console.log(result.error);
    } else {
      router.push(callbackUrl);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-full w-full gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center uppercase pr-3 py-3 font-extrabold text-3xl">
        <div className="cursor-default flex">
          <div className="text-[#212a3e]">uni</div>
          <div className="text-[coral]">rent</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold uppercase">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
          {...handleSignUp("email")}
        />
        {errors.email && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="font-bold uppercase">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
          {...handleSignUp("firstName")}
        />
        {errors.firstName && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName" className="font-bold uppercase">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
          {...handleSignUp("lastName")}
        />
        {errors.lastName && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold uppercase">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
          {...handleSignUp("password")}
        />
        {errors.password && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="font-bold uppercase">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
          {...handleSignUp("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="flex font-bold uppercase gap-2">
        Already a member?
        <Link href="/auth/sign-in" className="font-bold uppercase text-[coral]">
          Sign In
        </Link>
      </div>
      <button
        type="submit"
        className="transition-transform ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer bg-[#212A3E] md:w-[30rem] text-white uppercase font-bold rounded-full w-96 h-12"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Form;
