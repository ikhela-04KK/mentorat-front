/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from 'next/link';
import React from 'react';
// import { ErrorHandling } from './error';
// import { useRouter } from 'next/navigation';
export default function ErrorHandling({ error, reset }: { error?: Error; reset?: () =>  void}){
    //  const Router = useRouter()
    return (
        <>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-gray-900">
                    <div className="text-center">
                            <p className="text-xl font-semibold text-emerald-300 ">Il y'a un problème</p>
                            <h1 className="mt-4 text-4xl font-bold trackibng-tight text-white "> {error?.message || "Authentification est requis"}</h1>
        
                            <p className="mt-6 text-base leading-7 text-zinc-400 ">
                                S'il vous plaît essayer plus tard ou contactez notre support de commmunication si le problème persists
                            </p>
        
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button onClick={reset} className='hover:bg-transparent border border-gray-700 text-emerald-300 bg-emerald-800 bg-opacity-20  p-3 rounded-lg' type='button'>Essayer encore</button> 
                                <Link href='/' className="hover:bg-gray-700 hover:bg-opacity-20 p-3 rounded-lg bg-transparent border border-gray-700 text-white" type="button">Retour à la connection</Link>
                            </div>
                    </div>
                </main>    
        </>
    )
  }    
  
