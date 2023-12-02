import type {Meta, StoryObj} from "@storybook/react"; 
import {Dropdown} from "./dropdown"; 


const meta:Meta<typeof Dropdown>= {
    title:'Exemple/Profile/dropdown', 
    component:Dropdown,
    tags:['autodocs'],
}

export default meta; 

type Story = StoryObj<typeof Dropdown>;
export const BaseDropDropdown:Story = {
    args:{

    }
}