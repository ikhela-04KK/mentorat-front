"use client"; 
import { Online } from "../../badge/online";
import { Certified } from "../../avatar/certified/certified";
import { Principal, Location } from "../../avatar/label/label";



export const Card =()=>{
    return (
        <>
            <div className="pr-4">
                <Certified person="certified person" />
            </div>

            <div className="w-[826px]">
                <div className="w-full h-7 flex items-center gap-1.5">
                        <Principal label="Anita Cruz" />
                        <Online name="Online" />
                </div>
                
                <div className="w-full h-7">
                    <Location label="Auckland, New Zealand" />
                </div>
            </div>
        </>
    );  
}