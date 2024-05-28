import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateRangePicker from '@/components/ui/base/DateRangePicker';

describe('DateRangePicker', () => {
    const mockSetStartDate = jest.fn();
    const mockSetEndDate = jest.fn();

    beforeEach(() => {
        render(
            <DateRangePicker
                startDate="2023-01-01"
                endDate="2023-01-10"
                setStartDate={mockSetStartDate}
                setEndDate={mockSetEndDate}
            />
        );
    });

    it('renders correctly', () => {
        expect(screen.getByLabelText('から')).toBeInTheDocument();
        expect(screen.getByLabelText('まで')).toBeInTheDocument();
    });

});
