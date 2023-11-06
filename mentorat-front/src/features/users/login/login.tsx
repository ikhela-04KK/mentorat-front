"use client";
import Link from "next/link";
import Image from "next/image";
// import * as Btn from "@features/ui/buttons/btn-sign-up"
// import * as text from "@features/ui/text-field/text-entry-sign-up";

// itérer sur une liste de contenu pour aller plus rapidement
// const listInput = [
//   { type: "email", placeholder: "Entrer votre email" },
//   { type: "password", placeholder: "Entrer votre mot de pass" },
// ];

export default function login() {
  return (
    <>
      {/* pour la section du boutton */}
      {/* <div className=""> */}
        {/* <Btn.BtnSignUp label="S'inscrire" />
            <Btn.BtnSignUpSocial label="Se connecter avec Google" /> */}
      {/* </div> */}

      {/* pour les textes d'entrés */}
      {/* <div className=" h-100 bg-[#000]">
        {listInput.map(
          (item: { type: string; placeholder: string }, idx: number) => (
            <text.TextSignUp
              key={idx}
              htmlFor={item.type}
              type={item.type}
              htmlName={item.type}
              placeholder={item.placeholder}

            />
          ),
        )}
      </div> */}

      
    <div className="relative h-screen grid grid-cols-2">
        <div className="flex flex-col bg-[#05010D]">
         
        </div>
        <div className="">
            <Image 
                src="/globule.png"
                width={600}
                height={400}
                alt="cover en globule"
                className=""
            />
        </div>
    </div>
    
    </>
  );
}
