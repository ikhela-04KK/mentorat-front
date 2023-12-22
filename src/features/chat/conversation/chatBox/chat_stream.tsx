"use client";
import {  ChatResult, ChatStreamProps } from "@/lib/chat-type";
import React, { useEffect,useState } from "react";
import { useSession } from "next-auth/react";
import { extractHourAndMinutes } from "@/utils/format_hours";
import DtMessage from "../dt-message";
import { groupMessagesByDate } from "@/utils/group_message_by_date";
import { ChatMessage } from "./chat_message";
import { useSocket } from "@/features/providers/socketProvider";

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


  const socketContext = useSocket()
  const typing = socketContext?.typing
    if(typing){
      setMessages([typing])
    }
    else {
      console.log("never typing is defined")      
    }


  return (
    <>
    {Object.keys(groupedMessages).map((sectionDate, index) => (
        <div key={index}>
        <DtMessage date={sectionDate} />          
  {groupedMessages[sectionDate].map((message, msgIndex) => (
            <div
              key={msgIndex}
              className={`w-full h-auto flex ${message.user_id === session?.user.id ? "justify-end" : "justify-start"
                } mb-8 mt-8`}
            >
          {message.typing ? (
              // Render this when someone is typing
              <ChatMessage
              timestamp={extractHourAndMinutes(message.created_at)}
              backgroundColor={message.user_id == session?.user.id ? "violet-500" : "gray-500"}
              online={message.online}
              source={message.source} 
              typing={message.typing}/>
            ) : (
              // Render ChatMessage when no one is typing
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
            )}
          </div>
        ))}
      </div>
    ))}
      </>
  )
}

