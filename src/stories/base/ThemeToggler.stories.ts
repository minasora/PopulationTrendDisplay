import React from "react";

import {
  ThemeToggler,
  DarkIcon,
  LightIcon,
} from "@/components/ui/base/ThemeToggler";
import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Base/ThemeToggler",
  component: ThemeToggler,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
type Story = StoryObj<typeof meta>;
export default meta;
export const Defalut: Story = {
  args: { lightIcon: LightIcon, darkIcon: DarkIcon },
};
