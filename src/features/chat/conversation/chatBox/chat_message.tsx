import { useSession } from "next-auth/react"
import { MessageContent } from "./message-content"
import { MessageInfo } from "./message-info"
import { Chat } from "@/lib/chat-type"
import { Online } from "@/features/ui/avatar/online/online"

// ChatMessage component
export const ChatMessage: React.FC<Chat> = ({ username, timestamp, content, backgroundColor, online, source }) => {
    const { data: session, status: status } = useSession()
    return (
        <>
            <div className="max-w-96 pr-8 h-full items-start">
                <div className="grow shrink basis-0 h-auto  items-start flex gap-4 justify-start">

                    {username != session?.user.name && <Online person={username} online={online} source={source} />}
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
                        <MessageInfo username={username} timestamp={timestamp} />
                        <MessageContent content={content} backgroundColor={backgroundColor} />
                    </div>

                </div>
            </div>
        </>
    )
}
