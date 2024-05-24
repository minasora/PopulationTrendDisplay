"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import makeAnimated from 'react-select/animated';
import { Prefdata } from '@/libs/utils';
import { PrefTrend, PrefectureCode } from '@/libs/types';
import Select, { ActionMeta, MultiValue } from 'react-select';

interface OptionType {
    label: string;
    value: PrefectureCode; // Ensuring this is of type PrefectureCode
    region: string;
}

const options: OptionType[] = Prefdata.map((pref) => ({
    label: pref.prefName,
    value: pref.prefCode as PrefectureCode, // Ensuring this is cast to PrefectureCode
    region: pref.region,
}));

const animatedComponents = makeAnimated();

const groupOptions = (options: OptionType[]) => {
    const grouped = options.reduce((acc, option) => {
        const { region } = option;
        if (!acc[region]) {
            acc[region] = [];
        }
        acc[region].push(option);
        return acc;
    }, {} as { [key: string]: OptionType[] });

    return Object.keys(grouped).map((region) => ({
        label: region,
        options: grouped[region],
    }));
};

interface ProvinceAutocompleteProps {
    selectedProvinces: PrefTrend[];
    onProvinceChange: (value: PrefTrend[]) => void;
    className?: string;
}

const ProvinceAutocomplete: React.FC<ProvinceAutocompleteProps> = ({ selectedProvinces, onProvinceChange, className }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (newValue: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
        const value = newValue ? newValue.map(option => ({
            prefCode: option.value as PrefectureCode,
            prefName: option.label,
            data: [],
        })) : [];
        onProvinceChange(value);
    };

    const selectedValues = selectedProvinces.map(province => ({
        label: province.prefName,
        value: province.prefCode as PrefectureCode, // Ensuring this is cast to PrefectureCode
        region: options.find(opt => opt.value === province.prefCode)?.region || '',
    }));

    if (!isClient) {
        return null;
    }

    return (
        <Select
            className={`w-full ${className}`}
            classNamePrefix="react-select"
            options={groupOptions(options)}
            components={animatedComponents}
            isMulti
            value={selectedValues}
            onChange={handleChange}
            placeholder="都道府県を選ぶ"
            closeMenuOnSelect={false}
            instanceId="province-autocomplete"
        />
    );
};

export default ProvinceAutocomplete;
