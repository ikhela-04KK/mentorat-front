// qskdqsldqsldk
import type { Meta, StoryObj } from '@storybook/react';
import {ChatStreamConv} from './conversation-test';

const meta:Meta<typeof ChatStreamConv> = {
    title: 'Example/Chat/streamers/conversation',
    component: ChatStreamConv,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof ChatStreamConv>;

export const BaseChatStreamersConversation: Story = {
    args: {

    },
};

