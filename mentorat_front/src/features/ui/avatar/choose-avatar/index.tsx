"use client"                                                                        
import Image from "next/image"
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react"




export const ChooseAvtar:React.FC = ()=> {
    const [selectedImage, setSelectedImage] = useState<string |ArrayBuffer | null>(null);
    const router = useRouter()
    const handledImageChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files && e.target.files[0];
        if (file){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
            router.push('/chat')
        }
    };

    return (
        <>
        <form className="flex items-center space-x-6">
            <div className="shrink-0">

                {/* mettre l'image de l'avatar ici */}
                {selectedImage ?(
                <Image className="h-16 w-16 object-cover rounded-full" src={selectedImage as string} alt="Current profile photo" width={64} height={64}/>
                ):(
                    <Image
                    className="h-16 w-16 object-cover rounded-full"
                    src="/avatar.png"
                    alt="Default profile photo"
                    width={64}
                    height={64}
                />
                )}
            </div>
            <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input type="file" onChange={handledImageChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100
    "/>
            </label>
        </form>
    </>
)

}