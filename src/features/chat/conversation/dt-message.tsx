import React from "react";

interface DtMessageProps {
    date: string ;
}
const DtMessage: React.FC<DtMessageProps> = ({ date }) => {

    return(
    <>
        <div className="w-full h-5 justify-center items-center my-4 gap-2 flex">
            <div className="w-full h-px bg-gray-800" />
            <p className="text-center text-neutral-400 text-sm font-medium w-[277px]">{date}</p>
            <div className="w-full h-px bg-gray-800" />
        </div>
    </>
    )
};

export default DtMessage;
