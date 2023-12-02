"use client";

import { ChangeEventHandler, KeyboardEventHandler } from "react";

interface textSign extends React.InputHTMLAttributes<HTMLInputElement> {
    label:string;
}

interface textSenderMessage extends React.InputHTMLAttributes<HTMLInputElement>{
  name:string;
  onChange?:ChangeEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>
  onKeyDown?:KeyboardEventHandler<HTMLInputElement> ;
}
// capturer la requete 
export const TextRegister: React.FC<textSign> = ({ type, label, placeholder,onChange }) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={type}
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-3 text-sm font-medium text-neutral-300"
        >
          {label}
        </label>
        <input
          type={type}
          name={type}
          onChange={onChange}
          id={type}
          placeholder={placeholder}
          className="bg-transparent border border-zinc-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required text-neutral-300 text-sm font-medium leading-tight placeholder:text-zinc-500 placeholder:text-base placeholder:font-normal placeholder:leading-normal"
          
        />
      </div>
    </>
  );
};

export const TextLogin: React.FC<textSign> = ({ type, label,name, placeholder }) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={type}
          className="block mb-2 text-sm font-medium text-neutral-300"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={type}
          placeholder={placeholder}
          className="bg-transparent border border-zinc-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 required text-neutral-300 text-sm font-medium leading-tight placeholder:text-zinc-500 placeholder:text-base placeholder:font-normal placeholder:leading-normal"
        />
      </div>
    </>
  );
};

export const TextMessage:React.FC<textSenderMessage> = ({name, type, placeholder,onChange,onInput}) =>{ {/**onKeyDown */}
  return (
    <>
      <label
          htmlFor={type}
          className="block w-[94%]"
        >
      
          <input
            type={type}
            name={name}
            onChange={onChange}
            onInput={onInput}
            id={type}
            placeholder={placeholder}
            className="bg-transparent sm:text-sm w-full p-2.5  text-neutral-300 text-sm font-medium placeholder:text-zinc-500 placeholder:text-base placeholder:font-normal  px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700"
          />
        </label>
    </>
  );
};

export default TextMessage;