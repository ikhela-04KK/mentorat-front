
import React from "react";
import {SyncLoader} from "react-spinners";

export type propsSpinner ={
    loading:boolean;
}
export const TextSpinner:React.FC<propsSpinner> = ({loading})=>{
    return (
        <div className="border border-gray-[#85888E] rounded-tr-lg rounded-bl-lg rounded-br-lg ">
        <span className="inline-flex">
        {loading &&<SyncLoader color="#85888E" cssOverride={{}} loading margin={2} size={6} speedMultiplier={0.8} />}
        </span>
    </div> 
    )
}
