import type {Meta, StoryObj} from "@storybook/react"; 
import {TextMessage} from "./text-entry-sign"; 


const meta:Meta<typeof TextMessage>= {
    title:'Exemple/Message', 

    tags:['autodocs'],
}

export default meta; 

type Story = StoryObj<typeof TextMessage>;
export const BaseTextMessage:Story = {
    args:{

    }
}