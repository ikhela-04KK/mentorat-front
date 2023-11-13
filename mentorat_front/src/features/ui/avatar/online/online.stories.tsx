import type { Meta, StoryObj } from '@storybook/react';
import {Online} from './online';

const meta:Meta<typeof Online> = {
    title: 'Example/Avatar/Online',
    component: Online,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof Online>;

export const BaseOnline: Story = {
    args: {
        person:"Online"
    },
};

