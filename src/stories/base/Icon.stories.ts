import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LinkComponent from "@/components/ui/base/Icon";
import { FaGithub } from "react-icons/fa"; // Import an icon for demonstration
import "@/app/globals.css";

const meta = {
  title: "Base/LinkComponent",
  component: LinkComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    url: "https://github.com",
    icon: FaGithub,
  },
} satisfies Meta<typeof LinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://github.com",
    icon: FaGithub,
  },
};
