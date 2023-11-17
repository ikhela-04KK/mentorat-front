"use client"                                                                        
import Image from "next/image"
import { redirect, useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react"

// une fonction qui se decenche après avoir finin de selectionner touts les champ^s 


// export const ChooseAvtar:React.FC = ()=> {
    // const [selectedImage, setSelectedImage] = useState<string |ArrayBuffer | null>(null);
    // const router = useRouter()

    // const handledImageChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    //     const file = e.target.files && e.target.files[0];
    //     if (file){
    //         const reader = new FileReader();
    //         reader.onloadend = () =>{
    //             setSelectedImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);

    //         const sub:HTMLInputElement |null = document.querySelector("#sub"); 
    //         if(sub){
    //             sub.click()
    //         }
    //         else{
    //             console.log("il n y a rien")
    //         }
    //         // La propriété click n'existe pas sur le type  any
    //         // sub.clic
    //     }
    // };
    //     async function onSubmit(event:FormEvent<HTMLFormElement>){
    //         event.preventDefault()

    //         const formData = new FormData(event.currentTarget)
    //         console.log(formData); 
    //         // const response = await fetch("/api/submit", {
    //         //     method:'POST',
    //         //     body:formData,
    //         // })
    //         // const data = response.json()
    //         // console.log(data); 
    //     }

    //     const submitForm = ()=>{
    //         router.push('/chat')
    //     }

//     return (
//         <>
//             <form onSubmit={onSubmit} className="flex items-center space-x-6" name="myForm">
//                 <div className="shrink-0">

//                     {/* mettre l'image de l'avatar ici */}
//                     {selectedImage ?(
//                     <Image className="h-16 w-16 object-cover rounded-full" src={selectedImage as string} alt="Current profile photo" width={64} height={64}/>
//                     ):(
//                         <Image
//                         className="h-16 w-16 object-cover rounded-full"
//                         src="/avatar.png"
//                         alt="Default profile photo"
//                         width={64}
//                         height={64}
//                     />
//                     )}
//                 </div>
//                 <label className="block">
//                     <span className="sr-only">Choose profile photo</span>
//                     <input type="file" name="file" onChange={handledImageChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100
//         "/>
//                 </label>
//                 <input id="sub" type="submit" hidden onClick={submitForm}/>
//             </form>
//     </>
// )

// }