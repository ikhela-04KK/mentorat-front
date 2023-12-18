import Chat from "@/features/chat/conversation/chatBox";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page(){
    return (
        // <Suspense fallback={<Loading />}>
            <Chat />
        // </Suspense>
    )
}    
