"use client";
import Image from "next/image";
import HeaderChat from "@/features/chat/header-chat";
import { Card } from "@/features/ui/header/card";
import { List, friendMessage } from "@/features/chat/list-streamers";
import { useEffect, useState } from "react";
import { ChatStream } from "@/features/chat/conversation/message-info";
import { useSession } from "next-auth/react";
import { Dropdown } from "@/features/ui/header/profile/dropdown/dropdown";
import InputEmoji from "react-input-emoji";

import log from "loglevel";
import { regrouperMessagesUtilisateurs } from "@/utils/format_data";
import { BtnSendMessage } from "@/features/ui/buttons/btn-sign";
export default function ListFm() {
    const { data: session, status } = useSession();
    console.log(session?.user)
    console.log(status)
    const defaultState: friendMessage = {
        username: "",
        message: "",
        source: "",
        certified: false,
        location: "",
        online: false
    }
    const [clicked, setCliked] = useState(false);
    const [click, setClick] = useState(false)
    log.info("est ce que ça marche: ", click)
    const [userInfo, setUserInfo] = useState<friendMessage>(defaultState);
    const [messages, setMessages] = useState<friendMessage[]>([]);
    const [messageInput, setMessageInput] = useState("");




    useEffect(() => {
        async function product() {
            const Options = {
                method: 'GET',
            };
            const response = await fetch(`http://localhost:8000/chats/user/${session?.user.id}`, Options);
            const result = await response.json()
            setMessages(regrouperMessagesUtilisateurs(result))
        }
        if (session?.user?.id !== undefined){
            product()
        }
    }, [session?.user.id])

    function handleClicked(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        setCliked((prevClicked) => !prevClicked)
    }

    // N'importe sur le clik permet de fermer la boites modal
    function handleMainClick() {
        if (clicked) {
            setCliked(false)
        }
    }
    return (
        <>
            <div className="">
                {/* put the header here */}
                <main onClick={handleMainClick} className="min-h-screen">
                    <section className="chat-layout">
                        <div className="bg-[#0c111D] text-white chatTopbar">
                            <div className="flex items-center border-r border-b border-r-[#1F242F] border-b-[#1f242f]">
                                <HeaderChat title="logo" size={40} source={session?.user.avatar} label="" nofification={0} />
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
                                <ChatStream username={userInfo.username} content={userInfo.message} online={userInfo.online} whoam={"friend"} source={userInfo.source} />
                                
                                <div className="h-[86px] px-6 pb-6 pt-5  border-t border-gray-800 flex justify-between items-center">
                                    <InputEmoji
                                        value={messageInput}
                                        onChange={setMessageInput}
                                        // cleanOnEnter
                                        // onEnter={handleOnEnter}
                                        placeholder="Type a message..." />
                                    <BtnSendMessage type="submit" />
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