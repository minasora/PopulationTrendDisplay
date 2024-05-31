import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ProvinceMap from "@/components/ui/feature/ProvinceMap";
import "@/app/globals.css";
import { Prefdata } from "@/libs/utils";

// Sample data for demonstration purposes
const sampleProvinces = [{ prefName: "Tokyo" }, { prefName: "Osaka" }];

const meta = {
  title: "Feature/ProvinceMap",
  component: ProvinceMap,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    selectedProvinces: sampleProvinces,
    onProvinceChange: (newSelectedProvinces: { prefName: string }[]) => {
      console.log("Selected provinces:", newSelectedProvinces);
    },
  },
} satisfies Meta<typeof ProvinceMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedProvinces: sampleProvinces,
  },
};
