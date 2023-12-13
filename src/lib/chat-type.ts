

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
    content: string;
    username:string; 
    online?:boolean; 
    source?:string;
    created_at?: string;
    delivered_at?: string | null;
    id?: number;
    seen_at?: string | null;
    updated_at?: string;
}
export type ChatResult = ChatMessagerie[];

//  type of result 

export type responseGetMessage = {
    message:string, 
    result :ChatResult,
    statusCode:string
} 
