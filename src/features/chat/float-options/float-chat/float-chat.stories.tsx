import type {Meta, StoryObj} from "@storybook/react"; 
import FloatChat from "./float-chat";


const meta:Meta<typeof FloatChat>= {
    title:'Exemple/Message/Float', 
    component:FloatChat,
    tags:['autodocs'],
}

export default meta; 
type Story = StoryObj<typeof FloatChat>;

export const BaseFloat:Story = {
    args:{

    }
}