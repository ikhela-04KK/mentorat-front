"use client";
import Link from "next/link";

type textSignUp = {
  type?: "text" | "password" | "email" | string;
  placeholder: string;
};

export const TextSignUp: React.FC<textSignUp> = ({ type, placeholder }) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={type}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {type}
        </label>
        <input
          type={type}
          name={type}
          id={type}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required text-neutral-300 text-sm font-medium font-['Inter'] leading-tight placeholder:text-zinc-500 placeholder:text-base placeholder:font-normal placeholder:leading-normal"
        />
      </div>
    </>
  );
};
