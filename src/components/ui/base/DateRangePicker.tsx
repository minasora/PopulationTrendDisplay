import React from 'react';
import swal from 'sweetalert';
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
           swal({
               title: 'Error',
               text: 'End date must be greater than or equal to the start date',
               icon: 'error'
           });
        }
    };

    return (
        <div className={`date-range-picker ${className} flex md:flex-row flex-col items-center md:justify-end `}>
            <div className="flex justify-start items-center m-2 w-full">
                <input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="p-1 border w-full md:w-auto md:h-auto"
                />
                <label htmlFor="start-date" className="ml-2">から</label>
            </div>

            <div className="flex lg:justify-start justify-end items-center m-2 w-full">
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="p-1 border w-full md:w-auto md:h-auto"
                />
                <label htmlFor="end-date" className="ml-2">まで</label>
            </div>
        </div>
    );
};

export default DateRangePicker;
