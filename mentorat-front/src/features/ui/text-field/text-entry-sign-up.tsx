'use client';
import Link from "next/link"; 
// import * as Btn from "@features/ui/buttons/btn-sign-up"


type textSignUp = {
   htmlFor:string; 
   type?:"text" | "password" | "email" |string
   htmlName:string;
   placeholder:string;
}; 

export const TextSignUp :React.FC<textSignUp>=({type,placeholder}) =>{
    return (
        <>
            <label htmlFor={type} className="block mb-4">
                <span className="block w-[36px] h-[20px] text-sm text-[#CECFD2] mb-1 ">{type}</span>

                <input 
                    type={type}
                    name={type}
                    placeholder={placeholder}
                    className="text-white placeholder:text-[#85888E] text-center text-base px-4 w-[360px] h-[44px] rounded-lg font-normal bg-transparent border-2 border-[#CECFD2] border-solid flex items-center justify-center"
                />

            </label>
        </>
    );
};