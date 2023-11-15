import { TextMessage } from "@/features/ui/text-field/text-entry-sign";
import { BtnSendMessage } from "@/features/ui/buttons/btn-sign";
import React, {useState} from "react";

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


export const TextSend:React.FC<any> = ({sendMessage})=>{
    
const [messageInput, setMessageInput] = useState('');
    const handleSend = () => {
        const newMessage = {
            username: "Aziz",
            timestamp: getCurrentTimestamp(),
            content: messageInput,
        };

        sendMessage(newMessage);
        setMessageInput('');
    };

    const getCurrentTimestamp = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `Aujourd'hui ${hours}:${minutes}`;
    };

    return (
        <div className="h-[86px] px-6 pb-6 pt-5  border-t border-gray-800 flex justify-between items-center">
            <TextMessage name="message" type="text" placeholder="message" onChange={(e) =>setMessageInput(e.target.value)} />
            <BtnSendMessage type="submit" onClick={handleSend} />
        </div>
    );
}