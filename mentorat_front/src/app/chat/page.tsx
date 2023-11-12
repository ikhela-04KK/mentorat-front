// ici  c'est pour la fonctionnalité du chat 
{/* <ListChat name={} email={} imageUrl={} /> */}
import HeaderChat from "@/features/chat/header-chat";

// import ListChat from "@features/chat/list-fm";
export default function ListFm(){
    return (
        <>
            <div className="">
                {/* put the header here */}
                <main className="min-h-screen">
                    <section className="chat-layout">
                        <div className="bg-[#0c111D] text-white">
                            <HeaderChat title="logo" size={40}/>
                        </div>
                        <div className="conversationList"></div>
                        <div className="chatStreamContainer"></div>
                    </section>
                </main>
            </div>
        </>
    );
}
