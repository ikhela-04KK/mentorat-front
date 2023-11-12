// creation du header navigation 
// pour la creation de composant de liste deroulant

"use client";
import React from "react"; 
import Image from "next/image";
import ProfileBar from "@features/ui/header/profile";

type headerChat = {
    title:string; 
    size?:number; 
    imageUrl?:string;
}

const HeaderChat:React.FC<headerChat> = ({title,size}) => {
    return (
        <>
            <header className="h-[72px] min-w-[454px] px-8 flex justify-between"> 
            
                    <div className="flex">
                    <Image src={"/logo.svg"} alt={title} width={size} height={size}  />   
                    <p className="pl-2.5 self-center">Untitled UI</p>
                    </div> {/*pour le logo */}
                    <div className="flex items-center">
                        <ProfileBar person="user" size={40}/>
                    </div> {/*pour les icones */}
            </header>
        </>
    );

}

export default  HeaderChat;