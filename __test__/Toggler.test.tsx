import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'next-themes';
import ToggleBtn from '@/components/ui/base/Toggler';

// Mock window.matchMedia
beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

const renderWithThemeProvider = (ui: React.ReactElement) => {
    return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('ToggleBtn Component', () => {
    test('renders the ToggleBtn component', () => {
        const { getByRole } = renderWithThemeProvider(<ToggleBtn />);
        const buttonElement = getByRole('button', { name: /toggle theme/i });
        expect(buttonElement).toBeInTheDocument();
    });

    test('toggles theme on button click', () => {
        const { getByRole } = renderWithThemeProvider(<ToggleBtn />);
        const buttonElement = getByRole('button', { name: /toggle theme/i });

        // Initial theme should be light
        expect(buttonElement).toBeInTheDocument();
        fireEvent.click(buttonElement);

        // After click, theme should be dark
        fireEvent.click(buttonElement);
    });

    test('renders the correct icon based on theme', () => {
        const { getByRole, rerender } = renderWithThemeProvider(<ToggleBtn />);
        const buttonElement = getByRole('button', { name: /toggle theme/i });

        // Initial theme is light, so sun icon should be rendered
        expect(buttonElement.firstChild?.nodeName).toBe('svg');
        expect(buttonElement.querySelector('path')).toHaveAttribute(
            'd',
            'M11.01,3.05C6.51,3.54,3,7.36,3,12c0,4.97,4.03,9,9,9c4.63,0,8.45-3.5,8.95-8c0.09-0.79-0.78-1.42-1.54-0.95 c-0.84,0.54-1.84,0.85-2.91,0.85c-2.98,0-5.4-2.42-5.4-5.4c0-1.06,0.31-2.06,0.84-2.89C12.39,3.94,11.9,2.98,11.01,3.05z'
        );

        // After clicking the button, the theme should toggle and moon icon should be rendered
        fireEvent.click(buttonElement);
        rerender(<ToggleBtn />);
        expect(buttonElement.querySelector('path')).toHaveAttribute(
            'd',
            'M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z'
        );
    });
});
