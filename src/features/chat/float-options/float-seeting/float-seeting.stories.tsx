import type {Meta, StoryObj} from "@storybook/react"; 
import FloatSeeting from "./float-seeting";


const meta:Meta<typeof FloatSeeting>= {
    title:'Exemple/FloatSeeting', 
    component:FloatSeeting,
    tags:['autodocs'],
}

export default meta; 
type Story = StoryObj<typeof FloatSeeting>;

export const BaseFloatSeeting:Story = {
    args:{

    }
}