import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import LinkComponent from '@/components/ui/base/Icon';

describe('LinkComponent', () => {
    test('renders the LinkComponent with the correct href', () => {
        render(<LinkComponent url="https://example.com" icon={FaExternalLinkAlt} />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    });

    test('has the correct target and rel attributes', () => {
        render(<LinkComponent url="https://example.com" icon={FaExternalLinkAlt} />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders the icon correctly', () => {
        render(<LinkComponent url="https://example.com" icon={FaExternalLinkAlt} />);
        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });

    test('applies the correct className to the icon', () => {
        const customClass = 'custom-class';
        render(<LinkComponent url="https://example.com" icon={FaExternalLinkAlt} className={customClass} />);
        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toHaveClass(`mr-2 ${customClass}`);
    });
});
