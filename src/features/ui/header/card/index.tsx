"use client"; 
import { Online } from "../../badge/online";
import { Certified } from "../../avatar/certified/certified";
import { Principal, Location } from "../../avatar/label/label";


export type cardHeader = {
    certified?:boolean , 
    source?:string, 
    location?:string, 
    online?:boolean, 
    username?:string
}

export const Card:React.FC<cardHeader>=({certified, source, location, online, username})=>{
    return (
        <>
            <div className="pr-4 ">
                <Certified certified={certified} source={source} /> {/*ou non certifié */}
            </div>

            <div className="w-[826px]">
                <div className="w-full h-7 flex items-center">
                        <Principal label={username} />
                        <Online online={online} /> 
                </div>
                
                <div className="w-full h-7">
                    <Location label={location} />
                </div>
            </div>
        </>
    );  
}