'use client'
import { PrefTrend } from '@/libs/types'
import React, {useRef} from 'react';
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
import {extractPopulationTrends} from "@/libs/utils";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [],
};





export function TrendGraph(props: PrefTrend[]){
    const chartRef = useRef(null);
    const trend_data = props[0].data[0]
    const result = extractPopulationTrends(trend_data)
    console.log(result)
    const addnew = (chart) => {
        const newColor = `hsl(${360 * Math.random()}, 50%, 50%)`; // Simplified color generation
        const newDataset = {
            label: props[0].prefName,
            backgroundColor: `${newColor}80`,
            borderColor: newColor,
            data:result.populations,
        };
        chart.data.datasets.push(newDataset);
        chart.data.labels = result.years;
        chart.update();
    }
    const DropByLabel = (chart, label:string) => {
        chart.data.datasets = chart.data.datasets.filter((dataset) => dataset.label !== label);
        chart.update();
        }



    return (
        <div>
            <div>
                <button  onClick={() => addnew(chartRef.current)}>Add new</button>
            </div>
            <div>
                <button onClick={() => DropByLabel(chartRef.current, 'Dataset 1')}>Remove last</button>
            </div>
            <div className="relative w-1/2 h-1/2" >
                <Line  ref={chartRef} options={options} data={data} />;
            </div>
        </div>
    )
}

export default TrendGraph
