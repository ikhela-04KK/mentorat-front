"use client";
import { Online } from "@features/ui/avatar/online/online";
import { Chat, Message, Content, Info, ChatResult } from "@/lib/chat-type";
import React, { useEffect,useState } from "react";
import { useSession } from "next-auth/react";
import { extractHourAndMinutes } from "@/utils/format_hours";

interface ChatStreamProps {
  currentChat: ChatResult;
  sendMessage:  ChatResult;
  receiveMessage: ChatResult;
}
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
export const MessageContent: React.FC<Content> = ({ content, backgroundColor, extendsClass }) => (
  <div className={` px-3.5 py-2.5 bg-${backgroundColor} bg-opacity-40 rounded-tr-lg ${extendsClass ? extendsClass : ''} rounded-bl-lg border border-gray-800 rounded-br-lg  items-center gap-2 flex`}>
    <p className="grow shrink basis-0 text-neutral-100 text-base font-normal ">{content}</p>
  </div>
);

// ChatMessage component
export const ChatMessage: React.FC<Chat> = ({ username, timestamp, content, backgroundColor,online,source }) => {
  const {data:session, status:status} = useSession()
  return(
  <>
      <div className="w-96 pr-8 h-full items-start">
        <div className="grow shrink basis-0 h-auto  items-start flex gap-4 justify-start">
          
          {username !=session?.user.name && <Online person={username} online ={online} source={source}/>}      
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
            <MessageInfo username={username} timestamp={timestamp} />
            <MessageContent content={content} backgroundColor={backgroundColor} />
          </div>
          
        </div>
      </div>
  </>
  )
}
export const getCurrentTimestamp = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return ` ${hours}:${minutes}`;
};
export const ChatStream: React.FC<ChatStreamProps>= ({ currentChat, sendMessage, receiveMessage }) => {
  const {data:session, status:status} = useSession()
  const [messages, setMessages] = useState<ChatResult>([]);

  useEffect(() => {
    setMessages(currentChat);
  }, [currentChat]);  

  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages, ...sendMessage]);
  }, [sendMessage])

  useEffect(()=>{
    console.log("est ce q'uil rentre dans le receive message")
    console.log(receiveMessage)
    setMessages((prevMessages) => [...prevMessages, ...receiveMessage])
  },[receiveMessage])

  return (
    <>
      {
        messages.map((message, index) => (
          <div
            key={index}
            className={`w-full h-[118px] flex ${message.user_id ===  session?.user.id ? "justify-end" : "justify-start"
              } mb-8 mt-8`}
          >      
            <ChatMessage
              timestamp={extractHourAndMinutes(message.created_at)}
              content={message.content}
              // username={message.username}
              backgroundColor={message.user_id == session?.user.id ? "violet-500" : "gray-500"}
              online={message.online}
              source={message.source}
              {...(message.user_id !== session?.user.id && {
                username:message.username
              })}
              {...(message.user_id === session?.user.id && {
                username:session?.user.name,
              })}
            />
          </div>
        ))
      }
      </>
  )
}