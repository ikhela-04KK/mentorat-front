import React from "react";
import Image from "next/image";

type checkboxSignUp = {
  type: "checkbox" | string;
  label: string;
};

export const CheckboxSignUp: React.FC<checkboxSignUp> = ({ type, label }) => {
  return (
    <input
      id={label}
      aria-describedby={label}
      type={type}
      className="w-4 h-4 border border-gray-300 rounded bg-red-400 focus:ring-3 focus:ring-primary-300 required"
    />
  );
};
