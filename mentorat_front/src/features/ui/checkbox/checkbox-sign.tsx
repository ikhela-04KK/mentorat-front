import React, {useState} from "react";
import { ChooseAvtar } from "../avatar/choose-avatar";


type checkbox = {
  type: "checkbox" | string;
  label?: string;
};

const dataCheck =[
  
  {num:"1", label:"Professor"},
  {num:"2", label:"Student"}
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


// todo: je dois utiliser multer pour enregistrer les images afin de pouvoir les partagés dans toutes l'applicationn

export const CheickBoxChoice: React.FC<checkbox> = () => {


  
  return (
    <>

    {/* 
      -si choix_user == true 
        decaler le choix de user
        declencher choix de l'image 
        enregister l'image dans public/image 
        afficher l'image dans le coin gauche
        enregister là dans public/image
        click sur continuer envoyer les données à la base de donnée 
      - si choix_user == false 
        attendre choix user 
    
    
    */}
      <div className='flex items-center flex-col gap-y-8 justify-center min-h-screen bg-[#1F242F]'>
        <div className='w-full max-w-sm px-10 py-8 mx-auto bg-[#171C24] rounded-lg shadow-xl text-[#F0F0F0] '>
          <div className='max-w-md mx-auto'>
            <p className='text-[#F0F0F0]'>Choice your stauts</p>
                                                                                                                                                                                      
            {dataCheck.map(
            (
              item: {
                num:string
                label: string
              },
              idx: number,
            ) => (
                <div className="relative flex items-start py-4 ml-2 " key={idx}>
                  <input id={item.num} type="radio" className="hidden peer" name="preferred_activities[]" value={item.num}/>
                  <label htmlFor={item.num} className="inline-flex items-center justify-between w-auto p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-800 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="flex items-center justify-center w-full">
                      <div className="text-sm text-brand-black">{item.label}</div>
                    </div>
                  </label>
              </div>
            ),
            )}

          </div>
        </div>
        <ChooseAvtar />
      </div>
    </>
  )
}




