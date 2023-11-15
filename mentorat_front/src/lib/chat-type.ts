

export type Message = {
    date:string;
}

export type Info = {
    username:string; 
    timestamp:string;
}

export type Content = {
    content:string; 
    backgroundColor:string;
}

export type typeMessage =  { username: string; timestamp: string; content: string;  }
export type Chat = Info & Content 