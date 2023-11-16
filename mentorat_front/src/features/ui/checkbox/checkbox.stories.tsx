// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import {  CheickBoxChoice } from './checkbox-sign';

const meta: Meta<typeof CheickBoxChoice> = {
    component: CheickBoxChoice,
};

export default meta;
type Story = StoryObj<typeof CheickBoxChoice>;


export const Secondary: Story = {
    args: {
    
    },
};
