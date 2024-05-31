import React from "react";

import {
  ThemeToggler,
  DarkIcon,
  LightIcon,
} from "@/components/ui/base/ThemeToggler";
import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ThemeToggler",
  component: ThemeToggler,
  tags: ["centered"],
  parameters: {
    layout: "centered",
  },
};
type Story = StoryObj<typeof meta>;
export default meta;
export const First: Story = {
  args: { lightIcon: LightIcon, darkIcon: DarkIcon },
};
