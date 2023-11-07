"use client";
import Link from "next/link";
import Image from "next/image";
import * as Btn from "@features/ui/buttons/btn-sign-up";
import * as text from "@features/ui/text-field/text-entry-sign-up";
import * as input from "@features/ui/checkbox/checkbox-sign-up";

// itérer sur une liste de contenu pour aller plus rapidement
const listInput = [
  { type: "Email", placeholder: "Entrer votre email" },
  { type: "Mot de passe", placeholder: "••••••••••" },
];

export default function login() {
  return (
    <>
      <div className=" bg-[#05010D] relative h-screen grid grid-cols-2">
        <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          />

          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Image
                className=""
                width={48}
                height={48}
                src="/logo.svg"
                alt="logo"
              />
              <h1 className="text-center tracking-tight md:text-2xl text-neutral-100 text-3xl font-semibold font-['Inter'] leading-9 ">
                Bienvenu à nouveau
              </h1>
              <p className="text-center text-neutral-400 text-base font-normal leading-normal">
                {"Bienvenu à nouveau ! Veuillez saisir vos coordonnées"}
              </p>
              <form
                className="bg-mentorat-linear space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  {listInput.map(
                    (
                      item: { type: string; placeholder: string },
                      idx: number,
                    ) => (
                      <text.TextSignUp
                        key={idx}
                        type={item.type}
                        placeholder={item.placeholder}
                      />
                    ),
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start mt-9">
                    <div className="flex items-center h-5">
                      <input.CheckboxSignUp type="checkbox" label="remember" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-neutral-300 text-sm font-medium leading-tight"
                      >
                        Se souvenir pendant 30 jours
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:underline mb-14 text-neutral-300 font-semibold leading-tight"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#7E56D8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center text-base leading-normal"
                >
                  {" "}
                  S inscrire
                </button>

                <p className="lg:text-center text-sm font-light text-gray-500">
                  Vous n avez pas de compte?
                  <a
                    href="#"
                    className="text-primary-600 hover:underline mrleading-tight text-neutral-300 text-sm font-semibold "
                  >
                    S inscrire
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* left image */}
        <div className="relative w-full overflow-hidden">
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