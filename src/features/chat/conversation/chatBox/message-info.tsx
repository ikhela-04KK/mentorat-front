import { Info } from "@/lib/chat-type";
import { useSession } from "next-auth/react";
import FloatSeeting from "../../float-options/float-seeting/float-seeting";
import { useState } from "react";

export const MessageInfo: React.FC<Info> = ({ username, timestamp }) => {

    const {data:session, status:status} = useSession()
    const [isHovered, setIsHovered] = useState(false);
    return(
    <div className="relative self-stretch gap-2 flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
      <p className="grow shrink basis-0 text-neutral-300 text-sm font-medium leading-tight">{username}</p>
      {username == session?.user.name && isHovered && <FloatSeeting/>}
      <p className="text-neutral-400 text-xs font-normal ">{timestamp}</p>    
    </div>
  );
}