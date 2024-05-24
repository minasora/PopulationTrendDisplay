import React from 'react';
import Select from 'react-select';
import { PopulationType } from '@/libs/types';

interface PopulationTypeSelectorProps {
    populationType: PopulationType;
    setPopulationType: (type: PopulationType) => void;
    className?: string;
}

const PopulationTypeSelector: React.FC<PopulationTypeSelectorProps> = ({ populationType, setPopulationType, className }) => {
    const populationOptions = [
        { value: "総人口", label: "总人口" },
        { value: "年少人口", label: "年少人口" },
        { value: "生産年齢人口", label: "生産年齢人口" },
        { value: "老年人口", label: "老年人口" },
    ];

    return (
        <div className={`w-full ${className}`}>
            <Select
                options={populationOptions}
                value={populationOptions.find(option => option.value === populationType)}
                onChange={(selectedOption) => setPopulationType(selectedOption?.value as PopulationType)}
                classNamePrefix="react-select"
                className="dark:bg-gray-800 dark:text-white"
            />
        </div>
    );
};

export default PopulationTypeSelector;
