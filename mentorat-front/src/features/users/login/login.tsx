'use client';
import Link from "next/link"; 
import Image from "next/image"; 
import BtnSignUp from "@features/ui/buttons/btn-sign-up"; 

export default function login(){
    return (
        <>
        <div className="">
            <BtnSignUp label="Se connecter" />
        </div>
    </>
    )

}