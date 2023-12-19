"use client";
import { useTyping } from "@/features/providers/typingProvider";
import { Content } from "@/lib/chat-type";
import { ReactionBarEmojiPicker, ReactionDisplayPicker } from "@features/chat/float-options/float-like/reaction-emoji-picker";
import { useState } from "react";
import { SyncLoader } from "react-spinners";

export const MessageContent: React.FC<Content> = ({ content, backgroundColor, extendsClass, typing }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [isReacting, setIsReacting] = useState<boolean>(false)

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji)
    setIsReacting(false) // cacher la barre d'emoji après le click"
  }

  const handleContentClick = () => {
    setIsReacting(true)
  }

  return (
    <>
      <div onMouseLeave={() => setIsReacting(false)} onClick={handleContentClick} className={`px-3.5 py-2.5 bg-${backgroundColor} bg-opacity-40 rounded-tr-lg ${extendsClass ? extendsClass : ''} rounded-bl-lg border border-gray-800 rounded-br-lg relative  items-center gap-2 flex `}>
     
          <p className="cursor-pointer grow shrink basis-0 text-neutral-100 text-base font-normal break-all">
            {content}
          </p>
       


        {isReacting && (
          <div className="shadow-2xl  absolute -top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <ReactionBarEmojiPicker onSelect={handleEmojiSelect} />
          </div>
        )}
        {selectedEmoji && (
          <div className="absolute bottom-0 top-[48px] left-0">
            <ReactionDisplayPicker selectedEmoji={selectedEmoji} />
          </div>
        )}
      </div>
    </>
  )
};
