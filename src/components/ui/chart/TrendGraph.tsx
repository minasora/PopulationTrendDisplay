'use client'
import { FC, useRef, useEffect, useState, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PopulationType, PrefTrend } from '@/libs/types';
import { extractPopulationTrends } from "@/libs/utils";
import { useTheme } from 'next-themes';
import TrendGraphUI from '@/components/ui/chart/TrendGraphUI';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const initialData = {
    labels: Array(10).fill(''),
    datasets: [{
        label: '',
        data: Array(10).fill(null),
        borderColor: 'rgba(0, 0, 0, 0)',
    }],
};

const colorMap: { [key: string]: string } = {
    "Hokkaido": "#FF6384",
    "Aomori": "#36A2EB",
    "Iwate": "#FFCE56",
    "Miyagi": "#4BC0C0",
    "Akita": "#9966FF",
    // 可以继续添加其他省份的颜色映射
};

const generateUniqueColor = (existingColors: string[]): string => {
    let color;
    do {
        color = `hsl(${360 * Math.random()}, 50%, 50%)`;
    } while (existingColors.includes(color));
    return color;
};

interface TrendGraphProps {
    selectedProvinces: PrefTrend[];
    populationType: PopulationType;
    className?: string;
}

const TrendGraph: FC<TrendGraphProps> = ({ selectedProvinces, populationType, className }) => {
    const chartRef = useRef(null);
    const [data, setData] = useState(initialData);
    const { theme } = useTheme();
    const darkMode = theme === 'dark';

    const newDatasets = useMemo(() => {
        if (selectedProvinces.length === 0) {
            return initialData.datasets;
        }

        const usedColors: string[] = Object.values(colorMap);

        return selectedProvinces.map((province) => {
            const trendData = province.data.find(trend => trend.label === populationType);
            const result = extractPopulationTrends(trendData ?? { label: '総人口', data: [] });

            let color = colorMap[province.prefName];
            if (!color) {
                color = generateUniqueColor(usedColors);
                colorMap[province.prefName] = color;
                usedColors.push(color);
            }

            return {
                label: province.prefName,
                backgroundColor: `${color}80`,
                borderColor: color,
                data: result.populations,
            };
        });
    }, [selectedProvinces, populationType]);

    useEffect(() => {
        if (selectedProvinces.length === 0) {
            setData(initialData);
            return;
        }

        const trendData = selectedProvinces[0].data.find(trend => trend.label === populationType) || { label: '総人口', data: [] };
        const years = extractPopulationTrends(trendData).years;

        setData({
            labels: years,
            datasets: newDatasets
        });
    }, [selectedProvinces, populationType, newDatasets]);

    return (
        <TrendGraphUI className={className} darkMode={darkMode} chartRef={chartRef} data={data} />
    );
};

export default TrendGraph;
