import React from "react";
import { Header, HeaderProps } from "@/components/ui/layout/Header";
import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/ui/base/Button";

const HeaderDefaults: HeaderProps = {
  heading: "Welcome to Our Site",
  description: "We provide the best services to help you succeed.",
  buttons: [
    { href: "#get-started", children: "Get Started" },
    { href: "#learn-more", children: "Learn More" },
  ],
  image: {
    width: 600,
    height: 400,
    src: "https://placehold.co/600x400",
    alt: "Descriptive alt text",
  },
};

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  args: HeaderDefaults,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: HeaderDefaults,
};
