import React from 'react';

interface DateRangePickerProps {
    startDate: string;
    endDate: string;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
    className?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, setStartDate, setEndDate, className }) => {
    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newStartDate = e.target.value;
        if (new Date(newStartDate) > new Date(endDate)) {
            setEndDate(newStartDate);
        }
        setStartDate(newStartDate);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEndDate = e.target.value;
        if (new Date(newEndDate) >= new Date(startDate)) {
            setEndDate(newEndDate);
        } else {
            alert('End date must be greater than or equal to the start date');
        }
    };

    return (
        <div className={`date-range-picker ${className} flex lg:flex-row flex-col items-center lg:justify-end`}>
            <div className="flex justify-start items-center m-2 w-full">
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="p-1 border w-full lg:w-auto"
                />
                <label className="ml-2">から</label>
            </div>
            <div className="flex lg:justify-start justify-end items-center m-2 w-full">
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="p-1 border w-full lg:w-auto"
                />
                <label className="ml-2">まで</label>
            </div>
        </div>
    );
};

export default DateRangePicker;
