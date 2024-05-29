import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import Button from '@/components/ui/base/Button';
import '@/app/globals.css';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        href: "https://example.com",
        children: "Primary Button",
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
    args: {
        href: "https://example.com",
        children: "Primary Button",
    }
};

