import { render, fireEvent, screen } from '@testing-library/react';
import { SearchInputProvider } from 'context/SearchInputContext';
import { Key, Keyboard } from '@/components/Keyboard/Keyboard';
import '@testing-library/jest-dom/extend-expect';

describe('<Key />', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <SearchInputProvider>
                <Key keycode="a" index={0} row={[]} />
            </SearchInputProvider>
        );

        expect(getByText('A')).toBeInTheDocument();
    });

    it('responds to click event', () => {
        const { getByText } = render(
            <SearchInputProvider>
                <Key keycode="a" index={0} row={[]} />
            </SearchInputProvider>
        );

        fireEvent.click(getByText('A'));
        expect(getByText('A')).toHaveClass('key');
    });
});

describe('<Keyboard />', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <SearchInputProvider>
                <Keyboard />
            </SearchInputProvider>
        );

        expect(getByText('A')).toBeInTheDocument();
        expect(getByText('B')).toBeInTheDocument();
        expect(getByText('space')).toBeInTheDocument();
        expect(getByText('backspace')).toBeInTheDocument();
        expect(getByText('clear')).toBeInTheDocument();
    });

    it('responds to click event', () => {
        const { getByText } = render(
            <SearchInputProvider>
                <Keyboard />
            </SearchInputProvider>
        );

        fireEvent.click(getByText('A'));
        fireEvent.click(getByText('space'));
        fireEvent.click(getByText('B'));
        fireEvent.click(getByText('backspace'));
        fireEvent.click(getByText('clear'));

        expect(getByText('A')).toHaveClass('key');
        expect(getByText('B')).toHaveClass('key');
        expect(getByText('space')).toHaveClass('key');
        expect(getByText('backspace')).toHaveClass('key');
        expect(getByText('clear')).toHaveClass('key');
    });
});
