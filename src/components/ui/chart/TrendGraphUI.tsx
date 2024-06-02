import { FC } from "react";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

const getDefaultOptions = (darkMode: boolean): ChartOptions<"line"> => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: darkMode ? "#ffffff" : "#000000",
      },
    },
    title: {
      display: true,
      text: "Population Trends",
      color: darkMode ? "#ffffff" : "#000000",
    },
    tooltip: {
      backgroundColor: darkMode ? "#333333" : "#ffffff",
      titleColor: darkMode ? "#ffffff" : "#000000",
      bodyColor: darkMode ? "#ffffff" : "#000000",
    },
  },
  scales: {
    x: {
      ticks: {
        color: darkMode ? "#ffffff" : "#000000",
      },
      grid: {
        color: darkMode ? "#444444" : "#e0e0e0",
      },
    },
    y: {
      ticks: {
        color: darkMode ? "#ffffff" : "#000000",
      },
      grid: {
        color: darkMode ? "#444444" : "#e0e0e0",
      },
    },
  },
});

interface TrendGraphUIProps {
  className?: string;
  darkMode: boolean;
  chartRef: any;
  data: ChartData<"line">;
  options?: ChartOptions<"line">;
}

const TrendGraphUI: FC<TrendGraphUIProps> = ({
  className,
  darkMode,
  chartRef,
  data,
  options,
}) => {
  const chartOptions = options ?? getDefaultOptions(darkMode);

  return (
    <div className={`${className} ${darkMode ? "dark" : ""}`}>
      <div className="relative">
        <Line
          ref={chartRef}
          options={chartOptions}
          data={data}
          className="w-full h-96"
        />
      </div>
    </div>
  );
};

export default TrendGraphUI;
