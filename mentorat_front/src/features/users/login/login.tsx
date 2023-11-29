"use client";
import Link from "next/link";
import Image from "next/image";
import * as Btn from "@features/ui/buttons/btn-sign";
import * as text from "@features/ui/text-field/text-entry-sign";
import * as input from "@features/ui/checkbox/checkbox-sign";
import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
// import { useRouter, useRouter } from "next/navigation";

// itérer sur une liste de contenu pour aller plus rapidement
const listInput = [
  { type: "email", label: "Email", name: "username", placeholder: "Entrer votre email" },
  { type: "password", label: "Mot de pass", name: "password", placeholder: "••••••••••" },
];


export default function login() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const data = useRef<FormInputs>({
  //   username: "",
  //   password: "",
  // });
  
  // const handleInputChanged: React.ChangeEventHandler<HTMLInputElement> = (
  //   e
  // ) => {
  //   // changeEvent est geneerique de base donc il ne fournit pas d'erreur
  //   data.current = {
  //     ...data.current,
  //     [e.target.name]: e.target.value,
  //   };
  // };

  const handleSubmitted = async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    try {

      // for seeiing my username formulaire 
      const formdata = new FormData(event.currentTarget); 
      const username = formdata.get("username"); 
      const password = formdata.get("password")

    
    const res = await signIn('credentials', {
      username:username,
      password:password,
      redirect:false   
      });

      console.log("retourne credentials")
      console.log(res)
    // if (res?.ok) router.push('/chat')

    }
    catch (e:any){
      console.log("Error de l'appel à l'API: ", e.message)
    }
    }

  return (
    <>
      <div className="bg-[#05010D] relative h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* pour le footer de la page qui est en bas */}
        <div className="absolute bottom-0 left-0 p-2 bg-black leading-tight lm:p-0.5">
          <p className="text-neutral-400 text-sm font-normal w-full h-full p-8">
            {" "}
            Powerby@Ikhela{" "}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 lm:pr-0 lm:pl-0">
          <div className="h-[700px] max-w-[360px] bg-[#05010D] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 flex items-center pt-[32px] ">
            <div className="p-6 space-y-4 md:space-y-8 sm:p-8 relative bottom-9">
              <div className="">
                <Image
                  className="mx-auto mb-4"
                  width={48}
                  height={48}
                  src="/logo.svg"
                  alt="logo"
                />
                <h1 className="text-center tracking-tight md:text-3xl text-neutral-100 text-3xl font-semibold leading-9 lm:text-[1.729rem]">
                  Bienvenue à nouveau
                </h1>
                <p className="text-center text-neutral-400 text-base font-normal leading-normal px-2.5 mt-[12px] ">
                  {"Bienvenue à nouveau ! Veuillez saisir vos coordonnées."}
                </p>
              </div>
              <form onSubmit={handleSubmitted}
                className="bg-mentorat-linear space-y-6 md:space-y-6 lm:mt-8"
                action="#"
              >
                <div>
                  {listInput.map(
                    (
                      item: { type: string; label: string; name: string; placeholder: string },
                      idx: number,
                    ) => (
                      <text.TextLogin
                        key={idx}
                        type={item.type}
                        label={item.label}
                        placeholder={item.placeholder}
                        name={item.name}
              
                      />
                    ),
                  )}
                </div>

                <div className="">

                  {/* forgot mot de passe  */}
                  <a href="#"
                    className="text-right block mb-[0px] text-sm text-primary-600 hover:underline text-neutral-300 font-semibold leading-tight">
                    Mot de passe oublié
                  </a>

                  <div className="mt-9 flex items-center">
                    {/* tu as mis le checkpbox dans une div */}
                    <input.Checkbox type="checkbox" label="Se souvenir pendant 30 jours" />
                  </div>


                </div>
                {/* <Link href="/chat"> */}
                <Btn.BtnSign label="Commencer" type="submit" />
                {/* </Link> */}

                <Btn.BtnSignSocial
                  label="Se connecter avec Google"
                  type="submit"
                />
                <p className="sm:text-center text-sm font-light text-gray-500 lm:text-center">
                  Vous n`avez pas de compte?
                  <Link
                    href="/register"
                    className="ml-1 text-primary-600 hover:underline mrleading-tight text-neutral-300 text-sm font-semibold "
                  >
                    S`inscrire
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* left image */}
        <div className="relative w-full overflow-hidden hidden lg:block">
          <Image
            src="/globule.png"
            width={720}
            height={960}
            alt="cover en globule"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}