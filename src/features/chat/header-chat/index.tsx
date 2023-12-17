// creation du header navigation 
// pour la creation de composant de liste deroulant


import React from "react"; 
import Image from "next/image";
import ProfileBar from "@features/ui/header/profile";

type headerChat = {
    title:string; 
    size:number; 
    source?:string;
    label:string;
    nofification:number;
}

const HeaderChat:React.FC<headerChat> = ({title,size,source,label, nofification}) => {
    return (
        <>
            <header className="h-[72px] min-w-[454px] px-8 flex justify-between"> 
            
                    <div className="flex">
                    <Image src={"/logo.svg"} alt={title} width={size} height={size}  />   
                    <p className="pl-2.5 self-center">Mentorat</p>
                    </div> {/*pour le logo */}
                    <div className="flex items-center">
                        <ProfileBar source={source} label={label} notification={nofification}/>
                    </div> {/*pour les icones */}
            </header>
        </>
    );

}

export default  HeaderChat;