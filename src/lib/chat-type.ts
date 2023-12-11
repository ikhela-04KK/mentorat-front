

export type Message = {
    date:string;
    online?:boolean;

}

export type Info = {
    username:string; 
    timestamp?:string;
}

export type Content = {
    content?:string; 
    backgroundColor?:string;
    extendsClass?:string;
}

export type Online = {
    online:boolean;
} 
export type Source = {
    source?:string;
}

export type typeMessage =  { username: string; timestamp?: string; content: string; online:boolean; whoam:string; source:string} 
export type Chat = Info & Content & Online & Source