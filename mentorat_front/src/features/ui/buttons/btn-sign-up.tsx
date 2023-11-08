import React from 'react'; 
import Image from "next/image"

type btnSignUpProps = {
    label:string;
    type? : "button"| "submit" | "reset"; 
}; 

export const BtnSignUp: React.FC<btnSignUpProps> = ({label,type = "button"}) =>{
    return (
        <button type={type} 
            className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  text-center text-base leading-normal px-4 py-2.5 bg-violet-500  shadow border border-violet-500">
            {label}
        </button>
    );
};
export const BtnSignUpSocial: React.FC<btnSignUpProps> = ({label,type = "button"}) =>{
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


// after:content-['*'] after:ml-0.5 after:text-red-500 block