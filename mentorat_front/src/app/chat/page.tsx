import HeaderChat from "@/features/chat/header-chat";
import { Card } from "@/features/ui/header/card";
import Image from "next/image";
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
                            <div className="pt-5 px-4 flex">
                                <Card />
                                <Image className="self-start" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
                            </div>
                        </div>
                        <div className="conversationList"></div>
                        <div className="chatStreamContainer"></div>
                    </section>
                </main>
            </div>
        </>
    );
}    
