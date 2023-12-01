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
// import { logging } from "@/utils/log4js/log4";
import log from "loglevel"

// capture tout les évènements 
export default function ListFm(){

    const { data: session,status } = useSession();
    console.log(session?.user) 
    console.log(status) 
    const defaultState:friendMessage = {
        username: "",
        message: "",
        source: "",
        certified:false, 
        location:"",
        online:false
    }


    const [clicked, setCliked] = useState(false); 
    const [socket, setSocket] = useState<Socket | undefined>();

    const [click, setClick] = useState(false)
    log.info("est ce que ça marche: " , click)

    const [userInfo, setUserInfo] = useState<friendMessage>(defaultState); 


    const [messages, setMessages] = useState<friendMessage[]>([]);
    
    // J'attend au montage de l'élément avant d'émettre la connection au socket 
    useEffect(() => {
        if (session?.backendToken.accessToken) {
          const newSocket: Socket = io('http://localhost:8000/chats', {
            extraHeaders: {
              Authorization: `Bearer ${session?.backendToken.accessToken}`
            },
            autoConnect: false
          });
    
        //   mettre à jour l'état du scoket 
          setSocket(newSocket);
    
          return () => {
            newSocket.disconnect();
          };
        }
      }, [session?.backendToken.accessToken]);


  // Afficher la liste de utilisateurs connectés
  useEffect(() => {
    if (socket) {
      socket.connect();

      // Ajoutez ici la gestion des événements du socket, par exemple :
      socket.on('users', (data) => {
        log.error('Message from server:', data);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [socket]);


  useEffect(() => {
    socket?.on('private_message', (args) => {
         // Mettre à jour la liste des messages
    // Update the messages only if the username is not present
      
      console.log("Entrer here")
      setMessages((prevMessages) => {
        if(!prevMessages.some(message => message.username === args.username)){
          return  [...prevMessages, args]
        }
         return prevMessages
      });
      // setMessages((prevMessages) => [...prevMessages, args]);
    });
  }, [socket]);

    // gerer le click pour le toggle pour se deconnecté 
    function handleClicked(e:React.MouseEvent<HTMLElement,MouseEvent>){
        setCliked((prevClicked) => !prevClicked)    }

    // N'importe sur le clik permet de fermer la boites modal
    function handleMainClick(){
        if (clicked){
            setCliked(false)
        } 
    }

    // function isDuplicateUsername(username:string):boolean{
    //   return messages.some((item) =>item.username == username)
    // }

    // if (isDuplicateUsername(userInfo.username)) {
    //   const duplicateUser = messages.find((item) => item.username === userInfo.username);
    //   // if (duplicateUser) {
    //   //   setUserInfo(duplicateUser);
    //   // }
    //   console.log(duplicateUser)
    // }


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

                            {click &&(

                            <div className="pt-5 px-4 flex bg-[#0c111d] border-b border-gray-800">
                                <Card certified={userInfo.certified} source={userInfo.source} location={userInfo.location} online={userInfo.online} username={userInfo.username} />
                            </div>
                            )}
                            <div onClick={(e) => handleClicked(e)} className="block cursor-pointer" >  
                                    <Image className="absolute right-[50px] top-[35px]" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
                                    <Dropdown visible={clicked ? 'block' : ''}/>
                                </div>

                        </div>
                        {/* reccupere la liste des utilisateurs déjà dans la liste ici grace au props et verifier le duplicatata si ça existe mettre dans la chatBox */}
                        <div className="conversationList">
                            <List  setUserInfo={setUserInfo} messages={messages} setClick={setClick} />  
                        </div>
                        {/* <div className="chatStreamContainer">
                            <ChatStream  username={userInfo.username} content={userInfo.message} online={userInfo.online} whoam={"friend"} source={userInfo.source}/>
                        </div> */}
                        <div className="chatStreamContainer">
                        {click &&(
                            <ChatStream  username={userInfo.username} content={userInfo.message} online={userInfo.online} whoam={"friend"} source={userInfo.source} timestamp={"Jeudi 12h30"} />
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}   