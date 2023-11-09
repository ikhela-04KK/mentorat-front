import React from "react";
type checkbox = {
  type: "checkbox" | string;
  label?: string;
};

export const Checkbox: React.FC<checkbox> = ({ type, label }) => {
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
