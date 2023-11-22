"use client";
import { Online } from "@features/ui/avatar/online/online";
import { Chat, Message, Content, Info, typeMessage } from "@/lib/chat-type";
import React, { useEffect, useRef, useState } from "react";
import { TextSend } from "./text-field-sms";


type friendMessage = {
  username:string , 
  content:string, 
  online:boolean, 
  whoam:string, 
  source:string | "", 
  timestamp:string
}
// Exemple de données de messages pour deux utilisateurs
// const messages = [
//   {
//     username: "Anita Cruz",
//     timestamp: "Jeudi 12h30",
//     content: "Salut Aziz, c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours",
//   },
//   {
//     username: "Aziz",
//     timestamp: "Jeudi 12h35",
//     content: "Salut Anita, je pense que tu devrais faire un test de grossesse pour être sûr.",
//   },
//   {
//     username: "Anita Cruz",
//     timestamp: "Jeudi 12h30",
//     content: "Salut Aziz, c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours",
//   },
//   {
//     username: "Aziz",
//     timestamp: "Jeudi 12h35",
//     content: "Salut Anita, je pense que tu devrais faire un test de grossesse pour être sûr.",
//   },
//   {
//     username: "Anita Cruz",
//     timestamp: "Jeudi 12h30",
//     content: "Salut Aziz, c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours",
//   },
//   {
//     username: "Aziz",
//     timestamp: "Jeudi 12h35",
//     content: "Salut Anita, je pense que tu devrais faire un test de grossesse pour être sûr.",
//   },
//   {
//     username: "Anita Cruz",
//     timestamp: "Jeudi 12h30",
//     content: "Salut Aziz, c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours",
//   },
// ];

export const DtMessage: React.FC<Message> = ({ date }) => {
  return (
    <>
      <div className="w-full h-5 justify-center items-center my-4 gap-2 flex">
        <div className="w-full h-px bg-gray-800" />
        <div className="text-center text-neutral-400 text-sm font-medium ">{date}</div>
        <div className="w-full h-px bg-gray-800" />
      </div>
    </>
  )
}


export const MessageInfo: React.FC<Info> = ({ username, timestamp }) => (
  <div className="self-stretch gap-2 flex">
    <p className="grow shrink basis-0 text-neutral-300 text-sm font-medium leading-tight">{username}</p>
    <p className="text-neutral-400 text-xs font-normal ">{timestamp}</p>
  </div>
);

// MessageContent component
export const MessageContent: React.FC<Content> = ({ content, backgroundColor }) => (
  <div className={`px-3.5 py-2.5 bg-${backgroundColor} rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-800 items-center gap-2 flex`}>
    <p className="grow shrink basis-0 text-neutral-100 text-base font-normal ">{content}</p>
  </div>
);

// ChatMessage component
export const ChatMessage: React.FC<Chat> = ({ username, timestamp, content, backgroundColor,online,source }) => (
  <div className="w-96 pr-8 h-full items-start">
    <div className="grow shrink basis-0 h-auto  items-start flex gap-4 justify-start">
      
{username !="vous" && <Online person={username} online ={online} source={source}/>
}      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
        <MessageInfo username={username} timestamp={timestamp} />
        <MessageContent content={content} backgroundColor={backgroundColor} />
      </div>
    </div>
  </div>
);

// ChatSteam component
export const ChatStream: React.FC<friendMessage>= ({username , content, online,source}) => {

  const [messages, setMessages] = useState<friendMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Ajouter le premier message après le rendu du composant
    const initialMessage: friendMessage = {
      username: username,
      timestamp: "Jeudi 12h30",
      content: content,
      online: online,
      whoam: "friend",
      source: source,
      // backgroundColor: "gray-900",
    };
    
    setMessages([initialMessage]);
  }, [username, content, online, source]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (newMessage: friendMessage): void => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <>
      {/* First message block */}
      <div className="h-[588px] overflow-y-auto px-4 pb-6 flex flex-col">
         {/* Date component */}
        <div className="w-full h-5 justify-center items-center my-4 gap-2 flex">
          {/* ... */}
          <DtMessage date="Aujourd'hui" />
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`w-full h-[118px] flex ${message.whoam === "friend" ? "justify-start" : "justify-end"
              } mb-8 mt-8`}
          >
            <ChatMessage
              online={message.online}
              username={message.username}
              timestamp={message.timestamp}
              content={message.content}
              source={message.source}
              backgroundColor={message.whoam === "friend" ? "gray-500" : "violet-500"}
            />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <TextSend sendMessage={sendMessage} />
    </>
  )
}

