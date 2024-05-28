import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/components/ui/base/Button';

describe('Button Component', () => {
    test('renders the Button component with the correct text', () => {
        render(<Button href="https://example.com">Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
    });

    test('has the correct href attribute', () => {
        render(<Button href="https://example.com">Click me</Button>);
        const linkElement = screen.getByRole('link', { name: /click me/i });
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    });

    test('has the correct target and rel attributes', () => {
        render(<Button href="https://example.com">Click me</Button>);
        const linkElement = screen.getByRole('link', { name: /click me/i });
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders with the correct classes', () => {
        render(<Button href="https://example.com">Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveClass(
            'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        );
    });
});
