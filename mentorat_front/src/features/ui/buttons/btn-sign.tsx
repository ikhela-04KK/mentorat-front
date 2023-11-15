import React, { MouseEventHandler } from 'react'; 
import Image from "next/image"

// type btnSignProps = {
//     label?:string;
//     type? : "button"| "submit" | "reset"; 
//     href?:string;
//     method?:string;
// };
interface btnSignProps extends React.InputHTMLAttributes<HTMLButtonElement>{
    label?:string;
    type? : "button"| "submit" | "reset"; 
    href?:string;
    method?:string;  
    onClick?:MouseEventHandler<HTMLButtonElement>;
}
// React.Fc<> = ({label,type="button", href,method}) 



export const BtnSign: React.FC<btnSignProps> = ({label,type = "button", href, method}) =>{
    return (
        <button  type={type} formAction={href} formMethod={method} className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  text-center text-base leading-normal px-4 py-2.5 bg-violet-500  shadow border border-violet-500">
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

export const BtnSendMessage:React.FC<btnSignProps> = ({type="button",onClick}) =>{

    return (
        <button type={type} className="w-11 h-11 p-3 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-2 flex" onClick={onClick}>
            <Image className="w-5 h-5 relative" src={"/icon-send.svg"} width={20} height={20} alt={'send'} />
        </button>
    );
};