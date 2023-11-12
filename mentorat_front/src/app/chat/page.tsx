import HeaderChat from "@/features/chat/header-chat";

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
                            <div className="">

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
