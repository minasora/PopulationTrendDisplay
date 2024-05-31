import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ProvinceAutocomplete from "@/components/ui/feature/ProvinceSearchBar";
import "@/app/globals.css";
import { PrefTrend } from "@/libs/types";

const sampleProvinces: PrefTrend[] = [
  {
    prefCode: 13,
    prefName: "Tokyo",
    data: [],
  },
  {
    prefCode: 27,
    prefName: "Osaka",
    data: [],
  },
];

const meta = {
  title: "Feature/ProvinceAutocomplete",
  component: ProvinceAutocomplete,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    selectedProvinces: sampleProvinces,
    onProvinceChange: (value: PrefTrend[]) => {
      console.log("Selected provinces:", value);
    },
  },
} satisfies Meta<typeof ProvinceAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedProvinces: sampleProvinces,
  },
};
