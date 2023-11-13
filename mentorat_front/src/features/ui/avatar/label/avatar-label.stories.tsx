import type { Meta, StoryObj } from '@storybook/react';
import { location } from './avatar-label';

const meta:Meta<typeof location> = {
    title: 'Example/Avatar/avatarLabel',
    component: location,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof location>;

export const BaseAvatarLab: Story = {
    args: {
        label:"Auckland, New Zealand"
    },
};
