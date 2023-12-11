import { TextMessage } from "@/features/ui/text-field/text-entry-sign";
import { BtnSendMessage } from "@/features/ui/buttons/btn-sign";
import React, { KeyboardEventHandler, useEffect, useState } from "react";
import {SyncLoader} from "react-spinners";

export type propsSpinner ={
    loading:boolean;
}
export const TextSpinner:React.FC<propsSpinner> = ({loading})=>{
    return (
        <div className="border border-gray-[#85888E] rounded-tr-lg rounded-bl-lg rounded-br-lg ">
        <span className="inline-flex">
        {loading && <SyncLoader color="#85888E" size={8} />}
        </span>
    </div> 
    )
}
