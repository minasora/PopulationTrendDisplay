import React from 'react';

import DateRangePicker from "@/components/ui/base/DateRangePicker";
import '@/app/globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import {fn} from '@storybook/test';
const meta = {
    title: 'Example/DateRangePicker',
    component: DateRangePicker,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['centered'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: {
        startDate: '2021-01-31',
        endDate: '2021-01-31',
        setStartDate: fn(),
        setEndDate: fn(),
    }

} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const first: Story = {
    args: {
        startDate: '2021-01-01',
        endDate: '2021-01-31',
        setStartDate: fn(),
        setEndDate: fn(),
    },
};

