import React from 'react'; 
import Image from "next/image"

type btnSignUpProps = {
    label:string;
    type? : "button"| "submit" | "reset"; 
}; 

export const BtnSignUp: React.FC<btnSignUpProps> = ({label,type = "button"}) =>{
    return (
        <button type={type} 
            className="text-white text-center text-base bg-mentorat px-4 w-[360px] h-[44px] rounded-lg font-semibold">
            {label}
        </button>
    );
};
export const BtnSignUpSocial: React.FC<btnSignUpProps> = ({label,type = "button"}) =>{
    return (
        <button type={type} 
            className="text-mentorat-grid text-center text-base bg-mentorat px-4 w-[360px] h-[44px] rounded-lg font-semibold bg-transparent border-2 border-[#CECFD2] border-solid flex items-center justify-center  ">
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

// export default BtnSignUp;


