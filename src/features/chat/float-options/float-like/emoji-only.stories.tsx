import type {Meta, StoryObj} from "@storybook/react"; 
import EmojiOnly from "./emoji-only";

const meta:Meta<typeof EmojiOnly>= {
    title:'Exemple/FloatOptions/emojiOnly', 
    component: EmojiOnly,
    tags:['autodocs'],
}

export default meta; 
type Story = StoryObj<typeof EmojiOnly>;

export const BaseFloatOptionsEmojiOnly:Story = {
    args:{

    }
}