import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Placeholder from '@/components/ui/base/Placeholder';

describe('Placeholder Component', () => {
    test('renders the Placeholder component', () => {
        const { container } = render(<Placeholder />);
        const rectElement = container.querySelector('rect');
        expect(rectElement).toBeInTheDocument();
        expect(rectElement).toHaveAttribute('x', '0');
        expect(rectElement).toHaveAttribute('y', '0');
        expect(rectElement).toHaveAttribute('width', '800');
        expect(rectElement).toHaveAttribute('height', '400');
    });

    test('applies custom props correctly', () => {
        const { container } = render(<Placeholder backgroundColor="#000000" />);
        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveStyle('background-color: #000000');
    });
});
