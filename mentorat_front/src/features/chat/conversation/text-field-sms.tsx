import { TextMessage } from "@/features/ui/text-field/text-entry-sign";
import { BtnSendMessage } from "@/features/ui/buttons/btn-sign";
import React, { KeyboardEventHandler, useEffect, useState } from "react";
// import {SyncLoader} from "react-spinners";

// const handleFormSubmitted = async (
//     e: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     e.preventDefault();
//     const res = await fetch(Backend_URL + "/auth/register", {
//       method: "POST",
//       body: JSON.stringify({
//         name: data.current.name,
//         email: data.current.email,
//         password: data.current.password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (!res.ok) {
//       // alert(res.statusText)
//       const response = await res.json();
//       // alert("User Registerd");
//       console.log(response);
//     }
//     return null;
//     //  sinon faire une redirection vars .............>
//   };


export const TextSend: React.FC<any> = ({ sendMessage }) => {
    

    const [messageInput, setMessageInput] = useState('');
    // const [loading, setLoading] = useState(false);

    const getCurrentTimestamp = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `Aujourd'hui ${hours}:${minutes}`;
    };

    const handleSend = async () => {
        const newMessage = {
            username: "vous",
            timestamp: getCurrentTimestamp(),
            content: messageInput,
        };
        sendMessage(newMessage);
        setMessageInput('');

         // Simulation de l'envoi (attente de 1 seconde)
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        // sendMessage(newMessage);
        // setMessageInput('');
        // setLoading(false); // Désactiver le spinner de chargement

    };

    // const handleInput: React.FormEventHandler<HTMLInputElement>= (e) => {
    //     // setLoading(true); // Activer le spinner pendant la saisie
    //     setTimeout(() => {
    //       setLoading(false); // Désactiver le spinner après un court délai après la saisie
    //     }, 500);
    //     return setMessageInput(e.currentTarget.value);
    // };
    


    return (
        <div className="h-[86px] px-6 pb-6 pt-5  border-t border-gray-800 flex justify-between items-center">
            <TextMessage name="message" type="text" value={messageInput} placeholder="message" onChange={(e)=>setMessageInput(e.target.value)}  />{/*onKeyDown={handleKeyDown} */}
            <BtnSendMessage type="submit" onClick={handleSend} />{ /*onInput={handleInput}}
            {/* <div className="border border-gray-[#85888E] rounded-tr-lg rounded-bl-lg rounded-br-lg ">
                <span className="absolute flex">
                {loading && <SyncLoader color="#85888E" size={8} />}
                </span>
            </div> */}

        </div>
    );
}