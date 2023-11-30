"use client"
import Image from "next/image";
import HeaderChat from "@/features/chat/header-chat";
import { Card } from "@/features/ui/header/card";
import {List, friendMessage} from "@/features/chat/list-streamers";
import { useEffect, useState } from "react";
import { ChatStream } from "@/features/chat/conversation/message-info";
import { useSession } from "next-auth/react";
import { Dropdown } from "@/features/ui/header/profile/dropdown/dropdown";
import {Socket, io} from "socket.io-client"; 



// capture tout les évènements 


export default function ListFm(){
    const { data: session,status } = useSession();
    console.log(session?.user) 
    console.log(status) 
    // J'attend au montage de l'élément avant d'émettre la connection au socket 
    useEffect(() => {
        const socket:Socket = io("http://localhost:8000/chats",{
            extraHeaders: {
                "Authorization": `Bearer ${session?.backendToken.accessToken}`  // ignored
            },
            autoConnect:false
        });
        console.log(socket);       

        console.log("Setup socket for handle events ")
        socket.connect() // lancer la connection au socket
        // typer les data qui sont ici en fonction de ce que le server va envoyé
        socket.on('users', (data) => {
            console.log('Message from server:', data);
        });
    


        // Nettoyer la connexion lors du démontage du composant
        return () => {
            socket.disconnect();
        };
    }, [session?.backendToken.accessToken]);
    
    const defaultState:friendMessage = {
        username: "",
        message: "",
        source: "",
        certified:false, 
        location:"",
        online:false
    }
    
    const [userInfo, setUserInfo] = useState<friendMessage>(defaultState); 
    console.log(userInfo)

    const [clicked, setCliked] = useState(false); 
    function handleClicked(e:React.MouseEvent<HTMLElement,MouseEvent>){
        setCliked((prevClicked) => !prevClicked)    }

    // N'importe sur le clik permet de fermer la boites modal
    function handleMainClick(){
        if (clicked){
            setCliked(false)
        }
    }

    return (
        <>
            <div className="">
                {/* put the header here */}
                <main onClick ={handleMainClick} className="min-h-screen">
                    <section className="chat-layout">
                        <div className="bg-[#0c111D] text-white chatTopbar">
                            <div className="flex items-center border-r border-b border-r-[#1F242F] border-b-[#1f242f]">
                                <HeaderChat title="logo" size={40} source={session?.user.avatar} label="" nofification={0} /> 
                            </div>

                            {userInfo.username &&(

                            <div className="pt-5 px-4 flex bg-[#0c111d] border-b border-gray-800">
                                <Card certified={userInfo.certified} source={userInfo.source} location={userInfo.location} online={userInfo.online} username={userInfo.username} />
                                <div onClick={(e) => handleClicked(e)} className="block cursor-pointer">  
                                    <Image className="self-start" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
                                    <Dropdown visible={clicked ? 'block' : ''}/>
                                </div>
                            </div>
                            )}

                        </div>
                        <div className="conversationList">
                            <List  setUserInfo={setUserInfo} />  
                        </div>
                        {/* <div className="chatStreamContainer">
                            <ChatStream  username={userInfo.username} content={userInfo.message} online={userInfo.online} whoam={"friend"} source={userInfo.source}/>
                        </div> */}
                        <div className="chatStreamContainer">
                        {userInfo.username &&(

                            <ChatStream  username={userInfo.username} content={userInfo.message} online={userInfo.online} whoam={"friend"} source={userInfo.source} timestamp={"Jeudi 12h30"} />
                            )}

                        </div>


                    </section>
                </main>
            </div>
        </>
    );
}    
    //  utilisationd de la session 
    // export type cardHeader = {
    //     certified:boolean, 
    //     source:string, 
    //     location:string, 
    //     online:boolean, 
    //     username:string
    // }

    // type headerChat = {
    //     title:string; 
    //     size:number; 
    //     source:string;
    //     label:string;
    //     nofification:number;
    // }

    // provide de default value for my state 
    // const defaultState: IFormEntry = {
    //     type: '';
    //     toFrom: '';
    //     details: '';
    //     amount: 0
    //   }
    //   const [formEntry, setformEntry] = useState<IformEntry>(defaultState);