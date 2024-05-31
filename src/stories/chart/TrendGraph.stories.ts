import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TrendGraph from "@/components/ui/chart/TrendGraph";
import "@/app/globals.css";
import { PrefTrend } from "@/libs/types";

const sampleProvinces: PrefTrend[] = [
  {
    prefCode: 13,
    prefName: "Tokyo",
    data: [
      {
        label: "総人口",
        data: [
          { year: 2010, population: 13000000 },
          { year: 2015, population: 13500000 },
          { year: 2020, population: 14000000 },
        ],
      },
    ],
  },
  {
    prefCode: 27,
    prefName: "Osaka",
    data: [
      {
        label: "総人口",
        data: [
          { year: 2010, population: 8800000 },
          { year: 2015, population: 8900000 },
          { year: 2020, population: 9000000 },
        ],
      },
    ],
  },
];

const meta = {
  title: "Chart/TrendGraph",
  component: TrendGraph,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    selectedProvinces: sampleProvinces as PrefTrend[],
    populationType: "総人口",
  },
} satisfies Meta<typeof TrendGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedProvinces: sampleProvinces,
    populationType: "総人口",
  },
};
