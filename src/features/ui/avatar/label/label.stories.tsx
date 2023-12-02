import type { Meta, StoryObj } from '@storybook/react';
import { Principal } from './label';

const meta:Meta<typeof Principal> = {
    title: 'Example/Avatar/Label',
    component: Principal,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof Principal>;

export const BaseAvatarLabel: Story = {
    args: {
        label:"Auckland, New Zealand"
    },
};
