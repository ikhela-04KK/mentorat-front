import type { Meta, StoryObj } from '@storybook/react';
import { ChatStream } from './message-info';


const meta:Meta<typeof ChatStream> = {
    title: 'Example/Chat/streamers/message',
    component: ChatStream,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof ChatStream>;

export const BaseAvatarBadgeOnline: Story = {
    args: {

    },
};

