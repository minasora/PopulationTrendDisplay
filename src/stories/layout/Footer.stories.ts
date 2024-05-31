import React from "react";
import { Footer, FooterProps } from "@/components/ui/layout/Footer";
import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import { BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const FooterDefaults: FooterProps = {
  image: {
    src: "logo.svg",
    alt: "Logo image",
  },
  socialMediaLinks: [
    {
      title: "Github",
      url: "http://github.com/minasora",
      icon: React.createElement(BiLogoGithub, { className: "size-6" }),
    },
    {
      title: "X",
      url: "https://x.com/_minazuki_sora",
      icon: React.createElement(FaXTwitter, { className: "size-6 p-0.5" }),
    },
  ],
  footerText: "© 2024 Minasora. All rights reserved.",
};

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: FooterDefaults,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: FooterDefaults,
};
