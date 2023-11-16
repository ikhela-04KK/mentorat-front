"use client";
import { Online } from "@features/ui/avatar/online/online";
import { Chat, Message, Content, Info, typeMessage } from "@/lib/chat-type";
import React, { useState } from "react";
import { TextSend } from "./text-field-sms";

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
export const ChatMessage: React.FC<Chat> = ({ username, timestamp, content, backgroundColor }) => (
  <div className="w-96 pr-8 h-full items-start">
    <div className="grow shrink basis-0 h-auto  items-start flex gap-4 justify-start">
      <Online person={username} />
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
        <MessageInfo username={username} timestamp={timestamp} />
        <MessageContent content={content} backgroundColor={backgroundColor} />
      </div>
    </div>
  </div>
);

// ChatSteam component
export const ChatStream: React.FC = () => {

  const [messages, setMessages] = useState([
    {
      username: "Anita Cruz",
      timestamp: "Jeudi 12h30",
      content: "Salut Aziz, c'est ta Muse je n'ai pas vu pas mes règles depuis quelques jours",
      // backgroundColor: "gray-900",
    },
  ]);

  const sendMessage = (newMessage: typeMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      {/* First message block */}
      <div className="h-[588px] overflow-y-auto px-4 pb-6 flex flex-col">
         {/* Date component */}
        <div className="w-full h-5 justify-center items-center my-4 gap-2 flex">
          {/* ... */}
          <DtMessage date="Aujourg'hui" />
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`w-full h-[118px] flex ${message.username === "Anita Cruz" ? "justify-start" : "justify-end"
              } mb-8 mt-8`}
          >
            <ChatMessage
              username={message.username}
              timestamp={message.timestamp}
              content={message.content}
              backgroundColor={message.username === "Aziz" ? "violet-500" : "gray-900"}
            />
          </div>
        ))}
      </div>

      <TextSend sendMessage={sendMessage} />
    </>
  )
}

