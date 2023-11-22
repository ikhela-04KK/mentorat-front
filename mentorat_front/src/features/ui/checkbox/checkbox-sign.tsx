// import { ChooseAvtar } from "../avatar/choose-avatar";
"use client";
import { Backend_URL } from "@/lib/Constants";
import Image from "next/image"
import {useRouter}from "next/navigation";
import React, { useState, FormEvent, useEffect } from "react"

type checkbox = {
  type: "checkbox" | string;
  label?: string;
};



// todo: je dois utiliser multer pour enregistrer les images afin de pouvoir les partagés dans toutes l'applicationn
const dataCheck = [
  {label: "TEACHER"},
  {label: "STUDENT"}
]


export const Checkbox: React.FC<checkbox> = ({ type, label }) => {
  return (
    <>
      <input
        type={type}
        name={type}
        id={type}
        className="w-4 h-4 border border-gray-300 rounded bg-red-400 focus:ring-3 focus:ring-primary-300 required"
      />
      <label
        htmlFor={type}
        className="ml-2 text-neutral-300 text-sm font-medium leading-tight"
      >
        {" "}
        {label}
      </label>
    </>
  );
};

export const CheickBoxChoice: React.FC<checkbox> = () => {

  const Router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

  // for handle a image
  const handledImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  


  // for submitted
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log(event.currentTarget)
      const formData = new FormData(event.currentTarget); // contain file image and role user (student or teacher)
      const formdata = new FormData(); // contain file image and role user (student or teacher)


      const name:any = sessionStorage.getItem("name") ;
      const email:any = sessionStorage.getItem("email");
      const password:any = sessionStorage.getItem("password");

      formdata.append("name",name) // add new field
      formdata.append("email",email) // add new field
      formdata.append("password",password) // add new field
      
      formData.forEach((value,key) =>{
        if (key ==="file"){
          console.log(value);

          formdata.append("file",value)
        }
        if (key ==="role"){
          formdata.append("role",value)
        }
      })
      formdata.append("avatar", "\"\"");

      const Options = {
        method: 'POST',
        body: formdata,
      };

      fetch("http://localhost:8000/auth/register", Options)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      Router.push("/chat")
  }
  // useEffect(()=>{
  //           // Si une image est sélectionnée, soumet automatiquement le formulaire
  //           if (selectedImage) {
  //             const sub: HTMLInputElement | null = document.querySelector("#sub");
  //             if (sub) {
  //                 sub.click();
  //             } else {
  //                 console.log("Il n'y a rien");
  //             }
  //         }
  //     }, [selectedImage]);

  
  return (
    <>
      <form onSubmit={onSubmit} name="choice-user" className='flex items-center flex-col gap-y-8 justify-center min-h-screen bg-[#1F242F]' encType="multipart/form-data" >
        <div className='w-full max-w-sm px-10 py-8 mx-auto bg-[#171C24] rounded-lg shadow-xl text-[#F0F0F0] '>
          <div className='max-w-md mx-auto'>
            <p className='text-[#F0F0F0]'>Choice your stauts</p>

            {dataCheck.map(
              (
                item: {
                  // num: string
                  label: string
                },
                idx: number,
              ) => (
                <div className="relative flex items-start py-4 ml-2 " key={idx}>
                  <input id={item.label} type="radio" className="hidden peer" name="role" value={item.label} />
                  <label htmlFor={item.label} className="inline-flex items-center justify-between w-auto p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-800 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="flex items-center justify-center w-full">
                      <div className="text-sm text-brand-black">{item.label}</div>
                    </div>
                  </label>
                </div>
              ),
            )}

          </div>
        </div>
        <div  className="flex items-center space-x-6">
          <div className="shrink-0">

            {/* mettre l'image de l'avatar ici */}
            {selectedImage ? (
              <Image className="h-16 w-16 object-cover rounded-full" src={selectedImage as string} alt="Current profile photo" width={64} height={64} />
            ) : (
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
            <input type="file" name="file" onChange={handledImageChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
          </label>
          <input id="sub" type="submit" />
        </div>
      </form>
    </>
  )
}


