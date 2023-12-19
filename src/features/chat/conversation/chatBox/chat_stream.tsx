"use client";
import {  ChatResult, ChatStreamProps } from "@/lib/chat-type";
import React, { useEffect,useState } from "react";
import { useSession } from "next-auth/react";
import { extractHourAndMinutes } from "@/utils/format_hours";
import DtMessage from "../dt-message";
import { groupMessagesByDate } from "@/utils/group_message_by_date";
import { ChatMessage } from "./chat_message";
import { useTyping } from "@/features/providers/typingProvider";

export const ChatStream: React.FC<ChatStreamProps>= ({ currentChat, sendMessage, receiveMessage }) => {
  const {data:session, status:status} = useSession()
  const [messages, setMessages] = useState<ChatResult>([]);
  const [groupedMessages, setGroupedMessages] = useState<{ [key: string]: ChatResult }>({});

  useEffect(() => {
    setMessages(currentChat);
  }, [currentChat]);  

  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages, ...sendMessage]);
  }, [sendMessage])

  useEffect(()=>{
    setMessages((prevMessages) => [...prevMessages, ...receiveMessage])
  },[receiveMessage])

  useEffect(() => {
    const grouped = groupMessagesByDate(messages);
    setGroupedMessages(grouped);
  }, [messages]);

  const showTyping = useTyping()
  console.log(showTyping)  

  return (
    <>
    {Object.keys(groupedMessages).map((sectionDate, index) => (
        <div key={index}>
        <DtMessage date={sectionDate} />          
  {groupedMessages[sectionDate].map((message, msgIndex) => (
            <div
              key={msgIndex}
              className={`w-full h-[118px] flex ${message.user_id === session?.user.id ? "justify-end" : "justify-start"
                } mb-8 mt-8`}
            >
              <ChatMessage
                timestamp={extractHourAndMinutes(message.created_at)}
                content={message.content}
                backgroundColor={message.user_id == session?.user.id ? "violet-500" : "gray-500"}
                online={message.online}
                source={message.source}
                {...(message.user_id !== session?.user.id && {
                  username: message.username
                })}
                {...(message.user_id === session?.user.id && {
                  username: session?.user.name,
                })}
              />
            </div>
            // {showTyping && (
            //   <div className="w-full h-[118px] flex justify-start mb-8 mt-8">
            //     <ChatMessage
            //       timestamp={extractHourAndMinutes(new Date())} // Utilisez un timestamp fictif ou supprimez cet attribut si non nécessaire
            //       content="..."
            //       backgroundColor="gray-500"
            //       online={true}
            //       source="system"
            //       username="Typing..." // Ajoutez un utilisateur fictif ou supprimez cet attribut si non nécessaire
            //     />
            //   </div>
            // )}
          ))}
        </div>
      ))}
      </>
  )
}
