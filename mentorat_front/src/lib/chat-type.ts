import { person } from "@/features/ui/avatar/online/online";

export type Info = {
    username:string; 
    timestamp:string;
}

export type Content = {
    content:string; 
    backgroundColor:string;
}

export type Av = {
    avatar:React.ComponentType<person>
}
export type Chat = Info & Content & Av