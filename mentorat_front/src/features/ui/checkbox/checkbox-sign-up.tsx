import React from "react";
import Image from "next/image";

type checkboxSignUp = {
  type: "checkbox" | string;
  label?: string;
  name: string;
};

export const CheckboxSignUp: React.FC<checkboxSignUp> = ({ type, label }) => {
  return (
    <>
      <input
        type={type}
        name={type}
        id={type}
        className="w-4 h-4 border border-gray-300 rounded bg-red-400 focus:ring-3 focus:ring-primary-300 required"
      />
      <label
        htmlFor={type}
        className="ml-2 text-neutral-300 text-sm font-medium leading-tight"
      >
        {" "}
        {label}
      </label>
    </>
  );
};
