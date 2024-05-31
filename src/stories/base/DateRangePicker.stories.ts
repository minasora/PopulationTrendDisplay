import React from "react";

import DateRangePicker from "@/components/ui/base/DateRangePicker";
import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
const meta = {
  title: "Base/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    startDate: "2021-01-31",
    endDate: "2021-01-31",
    setStartDate: fn(),
    setEndDate: fn(),
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  args: {
    startDate: "2021-01-01",
    endDate: "2021-01-31",
    setStartDate: fn(),
    setEndDate: fn(),
  },
};
