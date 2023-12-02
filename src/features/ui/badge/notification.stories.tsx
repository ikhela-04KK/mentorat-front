import type { Meta, StoryObj } from '@storybook/react';
import {Notification} from './notification';

const meta:Meta<typeof Notification> = {
    title: 'Example/Avatar/badge/Notification',
    component: Notification,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof Notification>;

export const BaseAvatarBadgeNotification: Story = {
    args: {
        count:44
    },
};

