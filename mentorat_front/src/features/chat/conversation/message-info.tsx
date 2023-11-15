"use client"; 
import { Chat, Content, Info } from "@/lib/chat-type";
import React from "react"; 




export const MessageInfo:React.FC<Info> = ({ username, timestamp }) => (
  <div className="self-stretch gap-2 flex">
    <p className="grow shrink basis-0 text-neutral-300 text-sm font-medium leading-tight">{username}</p>
    <p className="text-neutral-400 text-xs font-normal ">{timestamp}</p>
  </div>
);

// MessageContent component
export const MessageContent:React.FC<Content> = ({ content, backgroundColor }) => (
  <div className={`px-3.5 py-2.5 bg-${backgroundColor} rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-800 items-center gap-2 flex`}>
    <p className="grow shrink basis-0 text-neutral-100 text-base font-normal ">{content}</p>
  </div>
);

// ChatMessage component
export const ChatMessage:React.FC<Chat> = ({ avatar, username, timestamp, content, backgroundColor }) => (
  <div className="w-96 pr-8 h-full items-start">
    <div className="grow shrink basis-0 h-auto  items-start flex gap-4 justify-start">
      <avatar />
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
        <MessageInfo username={username} timestamp={timestamp} />
        <MessageContent content={content} backgroundColor={backgroundColor} />
      </div>
    </div>
  </div>
);

// ChatSteam component
export const ChatSteam: React.FC<> = () => (
  <>
    {/* First message block */}
    <div className="h-[588p] overflow-y-auto px-4 pb-6 flex flex-col">
      <div className="w-full h-[118px] flex justify-start mb-8 mt-8">
        <ChatMessage
          avatar={<UserAvatar />}
          username="Anita Cruz"
          timestamp="Jeudi 12h30"
          content="Salut Aziz, c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours"
          backgroundColor="gray-900"
        />
      </div>

      {/* Second message block */}
      <div className="w-full h-[118px] flex justify-end mb-8 mt-8">
        {/* ... */}
      </div>

      {/* Date component */}
      <div className="w-full h-5 justify-center items-center my-4 gap-2 flex">
        {/* ... */}
      </div>
    </div>
  </>
);
