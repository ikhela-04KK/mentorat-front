"use client";
import Link from "next/link";

type textSignIn = {
  type?: "text" | "password" | "email" | string;
  placeholder: string;
};

export const TextSignIn: React.FC<textSignIn> = ({ type, placeholder }) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={type}
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-3 text-sm font-medium text-neutral-300"
        >
          {type}
        </label>
        <input
          type={type}
          name={type}
          id={type}
          placeholder={placeholder}
          className="bg-transparent border border-zinc-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required text-neutral-300 text-sm font-medium leading-tight placeholder:text-zinc-500 placeholder:text-base placeholder:font-normal placeholder:leading-normal"
        />
      </div>
    </>
  );
};
