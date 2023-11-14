import Image from "next/image";
import HeaderChat from "@/features/chat/header-chat";
import { Card } from "@/features/ui/header/card";
import {List} from "@/features/chat/list-streamers";
import {ChatSteam} from "@/features/chat/conversation";

export default function ListFm(){
    return (
        <>
            <div className="">
                {/* put the header here */}
                <main className="min-h-screen">
                    <section className="chat-layout">
                        <div className="bg-[#0c111D] text-white chatTopbar">
                            <div className="flex items-center border-r border-b border-r-[#1F242F] border-b-[#1f242f]">
                                <HeaderChat title="logo" size={40}/>
                            </div>
                            <div className="pt-5 px-4 flex bg-[#0c111d]">
                                <Card />
                                <Image className="self-start" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
                            </div>
                        </div>
                        <div className="conversationList">
                            <List />
                        </div>
                        <div className="chatStreamContainer">
                            <ChatSteam />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}    
