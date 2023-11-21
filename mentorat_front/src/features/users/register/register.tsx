"use client";
import Link from "next/link";
import Image from "next/image";
import * as Btn from "@features/ui/buttons/btn-sign";
import * as text from "@features/ui/text-field/text-entry-sign";
import {useRouter} from "next/navigation";

// importation de librairy constants
import { Backend_URL } from "@/lib/Constants";
import React, { FormEvent, useRef } from "react";
// import { useRouter} from "next/router";

// le type du Form
type FormInputs = {
  name: string;
  email: string;
  password: string;
};


// itérer sur une liste de contenu pour aller plus rapidement
const listInput = [
  { type: "name", label: "Nom", placeholder: "Entrer votre nom" },
  {
    type: "email",
    label: "Courriel",
    placeholder: "Saissez votre adresse e-mail",
  },
  {
    type: "password",
    label: "Mot de pass",
    placeholder: "Saissez votre mot de pass",
  },
];

const SignupPage = () => {
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  const Router =  useRouter()


  // stocker des valeurs temporaires qui ne neccessite par de re-rendu
  const handleInputChanged: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    // changeEvent est geneerique de base donc il ne fournit pas d'erreur
    data.current = {
      ...data.current,
      [e.target.name]: e.target.value,
    };
  };


  const handleFormSubmitted = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
    
      // const res01 = await fetch("/register");
      // console.log(res01)
      const userData = {
        name: data.current.name,
        email: data.current.email,
        password: data.current.password
      };
            
      // Store the JSON string in the session storage
      sessionStorage.setItem("name",userData.name );
      sessionStorage.setItem("email",userData.email );
      sessionStorage.setItem("password",userData.password );



      

      // const response = await res.json();
      console.log("entry");
      // alert("User Registerd");
      console.log("correcte");
      // console.log(response);

      Router.push("/selection-role");
    } catch (e: any) {
      console.error("Erreur de l'appel à API: ", e.message);
    }
    //  sinon faire une redirection vars .............>
  };
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
                  Inscrivez-vous
                </h1>
                <p className="text-center text-neutral-400 text-base font-normal leading-normal px-2.5 mt-[12px] ">
                  {"Commencez votre essaie gratuit de 30 jours."}
                </p>
              </div>
              <form
                onSubmit={handleFormSubmitted}
                className="bg-mentorat-linear space-y-6 md:space-y-6 lm:mt-8"
              >
                <div>
                  {listInput.map(
                    (
                      item: {
                        type: string;
                        label: string;
                        placeholder: string;
                      },
                      idx: number
                    ) => (
                      <text.TextRegister
                        key={idx}
                        type={item.type}
                        label={item.label}
                        placeholder={item.placeholder}
                        onChange={handleInputChanged}
                      />
                    )
                  )}
                </div>

                <div className="">
                  {/* forgot mot de passe  */}
                  <Link
                    href="#"
                    className="text-left block mb-[0px] text-sm text-primary-600 hover:underline text-neutral-400 font-normal leading-normal"
                  >
                    Doit comporter au moins 8 caractères.{" "}
                  </Link>
                </div>

                <Btn.BtnSign
                  label="S'inscrire"
                  // href={`${Backend_URL}/auth/register`}
                  // method="POST"
                  type="submit"
                  // onClick={handleFormSubmitted}
                />
                <Btn.BtnSignSocial
                  label="Se connecter avec Google"
                  type="submit"
                />
                <p className="sm:text-center text-sm font-light text-gray-500 lm:text-center">
                  Vous avez déjà un compte ?
                  <Link
                    href="/api/auth/signin"
                    className="ml-1 text-primary-600 hover:underline mrleading-tight text-neutral-300 text-sm font-semibold "
                  >
                    Commencer
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
};
export default SignupPage;
