import { ReactNode } from "react";


export type Message = {
    date:string;
    online?:boolean;

}

export type Info = {
    username?:string; 
    timestamp?:string;
}

export type Content = {
    content?:string; 
    backgroundColor?:string;
    extendsClass?:string;
    typing?:boolean;
}

export type Online = {
    online?:boolean;
} 
export type Source = {
    source?:string;
}

export type typeMessage =  { username?: string; timestamp?: string; content?: string; online:boolean; whoam?:string; source?:string} 
export type Chat = Info & Content & Online & Source


export interface ChatMessagerie {
    chat_id: number;
    user_id: number;
    content: string | "";
    username:string; 
    online?:boolean; 
    source?:string;
    created_at?: string;
    delivered_at?: string | null;
    id?: number;
    seen_at?: string | null;
    updated_at?: string;
    typing?:boolean;
    children?: ReactNode;

}
export type ChatResult = ChatMessagerie[];
export type responseGetMessage = {
    message:string, 
    result :ChatResult,
    statusCode:string
} 
export interface ChatStreamProps {
    currentChat: ChatResult;
    sendMessage:  ChatResult;
    receiveMessage: ChatResult;
}
