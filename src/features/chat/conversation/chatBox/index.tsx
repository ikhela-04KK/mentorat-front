"use client";
import Image from "next/image";
import HeaderChat from "@/features/chat/header-chat";
import { Card } from "@/features/ui/header/card";
import { List, friendMessage } from "@/features/chat/list-streamers";
import { useEffect, useRef, useState } from "react";
import { ChatStream,} from "@/features/chat/conversation/chatBox/chat_stream";
import { useSession } from "next-auth/react";
import { Dropdown } from "@/features/ui/header/profile/dropdown/dropdown";
import InputEmoji from "react-input-emoji";
import {  regrouperMessagesUtilisateurs } from "@/utils/format_data";
import { BtnSendMessage } from "@/features/ui/buttons/btn-sign";
import { ChatMessagerie, ChatResult, responseGetMessage } from "@/lib/chat-type";
import { useSocket } from "@/features/providers/socketProvider";


export default function ListFm() {

    const socket =useSocket()

    // sans ça je ne me connecte pas au socket 
    // socket?.connect()

    const { data: session, status } = useSession();
    console.log(session?.user)
    console.log(status)
    const defaultState: friendMessage = {
        username: "",
        message: "",
        source: "",
        certified: false,
        location: "",
        online: false,
        chat_id: 0,
        user_id: 0
    }

    const [clicked, setCliked] = useState(false);
    const [click, setClick] = useState(false)
    const [userInfo, setUserInfo] = useState<friendMessage>(defaultState);
    const [messages, setMessages] = useState<friendMessage[]>([]);
    const [messageInput, setMessageInput] = useState("");
    const [currentChat, setCurrentChat] = useState<ChatResult>([])
    const [newMessage, setNewMessage] = useState<ChatResult>([])
    const [receiveMessage, setReceiveMessage] = useState<ChatResult>([])

    const current_chat_id = userInfo.chat_id;
    const current_username = userInfo.username;
    const current_user_statut = userInfo.online;
    const current_user_source = userInfo.source;

    useEffect(() => {
        async function product() {
            const Options = {
                method: 'GET',
            };
            const response = await fetch(`http://localhost:8000/chats/user/${session?.user.id}`, Options);
            const result = await response.json()
            setMessages(regrouperMessagesUtilisateurs(result))
        }
        if (session?.user?.id !== undefined) {
            product()
        }
    }, [session?.user.id])

    function handleClicked(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        setCliked((prevClicked) => !prevClicked)
    }
    const messagesEndRef = useRef<HTMLDivElement>(null);
    // N'importe sur le clik permet de fermer la boites modal

    function handleMainClick() {
        if (clicked) {
            setCliked(false)
        }
    }

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [newMessage]);

    useEffect(()=>{ 
        // caputure chat_id for get all message
        async function getAllMessage() {
            const Options = {
                method: 'GET',
            };
            const response = await fetch(`http://localhost:8000/messages/chat/${current_chat_id}`, Options);
            const result:responseGetMessage = await response.json()
            console.log(result)
            function regroupeCurrentChat(data:ChatResult):ChatResult{
                const currentChat:ChatResult = []; 
            
                console.log("verify real entry of message"); 
                data.forEach((current) =>{
                    const chatInfo:ChatMessagerie = {
                        chat_id: current.chat_id, 
                        user_id:current.user_id, 
                        username:current_username,
                        online:current_user_statut,
                        content:current.content, 
                        source:current_user_source,
                        created_at:current.created_at
                    }
                    currentChat.push(chatInfo)
                })
                return currentChat;
            }
            if (result.statusCode !== "400"){
                console.log("voici la vrai list des messages ")
                console.log(result.result);
                setCurrentChat(regroupeCurrentChat(result.result))
            }
        }
        getAllMessage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[current_chat_id])

    function handleSendMessage(){
        const data:ChatMessagerie ={
            chat_id:current_chat_id,
            user_id:session?.user.id || 0, 
            username:session?.user.name || "Non defini",
            content:messageInput,
            created_at:(new Date()).toISOString(),   
            source:session?.user.avatar 
        }
        // S'assurer que l'évènement send-message est prêt à recevoir ces données
        socket?.emit("send-message", data)
        const sendMessage:ChatResult = [
            data
        ]
        setNewMessage(sendMessage)
    }

    // s'assurer aussi que l'évènement receiveMessage est prêt à recevoir ces données du chatResut 
    useEffect(()=>{
        socket?.on('receive-message', (data:ChatMessagerie) => {
            setReceiveMessage([data])
        });
    },[socket])

    if (socket) {

    return (
        <>
        
            <div className="">
                {/* put the header here */}
                <main onClick={handleMainClick} className="min-h-screen">
                    <section className="chat-layout">
                        <div className="bg-[#0c111D] text-white chatTopbar">
                            <div className="flex items-center border-r border-b border-r-[#1F242F] border-b-[#1f242f]">
                                <HeaderChat title="logo" size={40} source={session?.user.avatar} label="" nofification={441} />
                            </div>
                            {click && (

                                <div className="pt-5 px-4 flex bg-[#0c111d] border-b border-gray-800">
                                    <Card certified={userInfo.certified} source={userInfo.source} location={userInfo.location} online={userInfo.online} username={userInfo.username} />
                                </div>
                            )}
                            <div onClick={(e) => handleClicked(e)} className="block cursor-pointer" >
                                <Image className="absolute right-[50px] top-[35px]" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
                                <Dropdown visible={clicked ? 'block' : ''} />
                            </div>

                        </div>
                        <div className="conversationList">
                            <List setUserInfo={setUserInfo} messages={messages} setClick={setClick} />
                        </div>
                        <div className="chatStreamContainer">
                            {click && (
                                <>
                                    {/* First message block */}
                                    <div className="h-[588px] overflow-y-auto px-4 pb-6 flex flex-col">
                                        <ChatStream currentChat={currentChat} sendMessage={newMessage} receiveMessage={receiveMessage}  />
                                         {/* sendMessage={sendMessage} receiveMessage={receiveMessage} */}
                                        <div ref={messagesEndRef} />
                                    </div>
                                    <div className="h-[86px] px-6 pb-6 pt-5  border-t border-gray-800 flex justify-between items-center">
                                        <InputEmoji
                                            value={messageInput}
                                            onChange={setMessageInput}
                                            // cleanOnEnter
                                            // onEnter={handleOnEnter}
                                            placeholder="Type a message..." />
                                        <BtnSendMessage type="submit" onClick={handleSendMessage}/>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
    }
}   
