import type {Meta, StoryObj} from "@storybook/react"; 
import EmojiPicker from "./emoji-picker";

const meta:Meta<typeof EmojiPicker>= {
    title:'Exemple/FloatOptions/like', 
    component:EmojiPicker,
    tags:['autodocs'],
}

export default meta; 
type Story = StoryObj<typeof EmojiPicker>;

export const BaseFloatOptionsLike:Story = {
    args:{

    }
}