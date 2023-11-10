import React from 'react'; 
import Image from "next/image"

type btnSignProps = {
    label:string;
    type? : "button"| "submit" | "reset"; 
    href?:string;
    onClick?:any;
}; 

export const BtnSign: React.FC<btnSignProps> = ({label,type = "button", href, onClick}) =>{
    return (
        <button onClick={onClick} type={type} formAction={href} className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  text-center text-base leading-normal px-4 py-2.5 bg-violet-500  shadow border border-violet-500">
            {label}
            
        </button>
    );
};
export const BtnSignSocial: React.FC<btnSignProps> = ({label,type = "button"}) =>{
    return (
        <button type={type} 
            className="h-[44px] bg-transparent border-solid flex items-center justify-center  w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  text-center text-base leading-normal px-4 py-2.5  shadow border border-zinc-700">
            <Image 
                className='mr-3'
                src='/social-google.svg'
                alt='Google logo'
                width={24}
                height={24} 
            />
            {label}

        </button>
    );
};