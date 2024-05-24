"use client";
import React, { useEffect, useState } from 'react';
import TrendGraph from '@/components/ui/chart/TrendGraph';
import getData from "@/libs/api";
import { PrefectureCode, PrefTrend, PopulationType} from "@/libs/types";
import PopulationTypeSelector from "@/components/ui/feature/PopulationTypeSelector";
import DateRangePicker from '@/components/ui/base/DateRangePicker';
import { filterDataByDateRange } from "@/libs/utils";
interface PopulationTrendDisplayProps {
    selectedProvinces: { prefCode: PrefectureCode; prefName: string }[];
    className?: string;
}

const PopulationTrendDisplay: React.FC<PopulationTrendDisplayProps> = ({ selectedProvinces, className }) => {
    const [populationData, setPopulationData] = useState<PrefTrend[]>([]);
    const [loading, setLoading] = useState(true);
    const [populationType, setPopulationType] = useState<PopulationType>("総人口");
    const [startDate, setStartDate] = useState<string>('1960-01-01');  // Example start date
    const [endDate, setEndDate] = useState<string>('2024-01-01');    // Example end date

    useEffect(() => {
        const fetchPopulationData = async () => {
            setLoading(true);
            const promises = selectedProvinces.map(async (province) => {
                const data: PrefTrend = await getData(province.prefCode);
                const filteredData = filterDataByDateRange(data, startDate, endDate);
                return { ...filteredData, prefName: province.prefName };
            });

            const results = await Promise.all(promises);
            setPopulationData(results);
            setLoading(false);
        };

        if (selectedProvinces.length > 0) {
            fetchPopulationData();
        } else {
            setPopulationData([]);
        }
    }, [selectedProvinces, populationType, startDate, endDate]);

    return (
        <div className={`${className}`}>
            <PopulationTypeSelector populationType={populationType} setPopulationType={setPopulationType} className="w-1/2 mx-auto m-5" />
            <TrendGraph selectedProvinces={populationData} populationType={populationType} />
                <DateRangePicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} className="w-full mx-auto flex flex-row" />
        </div>
    );
};

export default PopulationTrendDisplay;