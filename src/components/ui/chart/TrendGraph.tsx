'use client'
import { FC, useRef, useEffect, useState } from 'react';
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
import {PopulationType, PrefTrend, trend} from '@/libs/types';
import { extractPopulationTrends } from "@/libs/utils";
import { useTheme } from 'next-themes'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const getOptions = (darkMode: boolean) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
            labels: {
                color: darkMode ? '#ffffff' : '#000000',
            },
        },
        title: {
            display: true,
            text: 'Population Trends',
            color: darkMode ? '#ffffff' : '#000000',
        },
        tooltip: {
            backgroundColor: darkMode ? '#333333' : '#ffffff',
            titleColor: darkMode ? '#ffffff' : '#000000',
            bodyColor: darkMode ? '#ffffff' : '#000000',
        },
    },
    scales: {
        x: {
            ticks: {
                color: darkMode ? '#ffffff' : '#000000',
            },
            grid: {
                color: darkMode ? '#444444' : '#e0e0e0',
            },
        },
        y: {
            ticks: {
                color: darkMode ? '#ffffff' : '#000000',
            },
            grid: {
                color: darkMode ? '#444444' : '#e0e0e0',
            },
        },
    },
});

const initialData = {
    labels: Array(10).fill(''),
    datasets: [{
        label: '',
        data: Array(10).fill(null),
        borderColor: 'rgba(0, 0, 0, 0)',
    }],
};

interface TrendGraphProps {
    selectedProvinces: PrefTrend[];
    populationType: PopulationType;
    className?: string;
}

const TrendGraph: FC<TrendGraphProps> = ({ selectedProvinces, populationType, className }) => {
    const chartRef = useRef(null);
    const [data, setData] = useState(initialData);
    const { theme, setTheme } = useTheme()
    const darkMode = theme === 'dark';
    useEffect(() => {
        if (selectedProvinces.length === 0) {
            setData(initialData);
            return;
        }
        const defaultTrend: trend = {
            label: '総人口',
            data: [],
        };
        const newDatasets = selectedProvinces.map((province) => {
            const trendData = province.data.find(trend => trend.label === populationType);


            const result = extractPopulationTrends(trendData ?? defaultTrend);
            const newColor = `hsl(${360 * Math.random()}, 50%, 50%)`;
            return {
                label: province.prefName,
                backgroundColor: `${newColor}80`,
                borderColor: newColor,
                data: result.populations,
            };
        });

        const trendData = selectedProvinces[0].data.find(trend => trend.label === populationType) || defaultTrend;
        const years = extractPopulationTrends(trendData).years;

        setData({
            labels: years,
            datasets: newDatasets
        });
    }, [selectedProvinces, populationType]);

    return (
        <div className={`${className} ${darkMode ? 'dark' : ''}`}>
            <div className="relative">
                <Line ref={chartRef} options={getOptions(darkMode)} data={data} className="w-full h-96" />
            </div>
        </div>
    );
};

export default TrendGraph;
