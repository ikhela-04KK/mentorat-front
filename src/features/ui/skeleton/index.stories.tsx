import type {Meta , StoryObj} from "@storybook/react"; 
import { SkeletonLoading } from ".";


const meta:Meta<typeof SkeletonLoading> ={
    title: 'SkeletoLoading/proto', 
    component: SkeletonLoading, 
    tags: ['autodocs'],
}

export default meta; 
type Story = StoryObj<typeof SkeletonLoading >; 

export const BaseSkeletonLoading: Story = {
    args:{
        
    }
}