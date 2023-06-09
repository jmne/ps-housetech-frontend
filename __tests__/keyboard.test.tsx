import { render, fireEvent, screen } from "@testing-library/react";
import Keyboard, { Key } from "@/components/Keyboard/Keyboard";
import { useSearchInputContext } from "context/SearchInputContext";

jest.mock("context/SearchInputContext");

describe("Keyboard and Key components", () => {
    beforeEach(() => {
        useSearchInputContext.mockReturnValue({
            input: "",
            setInput: jest.fn(),
        });
    });

    test("Keyboard renders correctly", () => {
        const keys = [
            ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"],
            ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
            ["y", "x", "c", "v", "b", "n", "m", "-"],
        ]
        const special_keys = ["clear", "space", "backspace"]

        render(<Keyboard />);

        keys.forEach((row) => {
            row.forEach((value) => {
                expect(screen.getByText(value.toUpperCase())).toBeInTheDocument()
            })
        })
        special_keys.forEach((key) => {
            expect(screen.getByText(key)).toBeInTheDocument()
        })
    });

    test("Key component triggers setInput correctly on click", () => {
        const setInput = jest.fn();
        useSearchInputContext.mockReturnValue({
            input: "",
            setInput,
        });

        const { getByText } = render(<Key keycode="a" />);
        fireEvent.click(getByText(/A/));

        expect(setInput).toHaveBeenCalledWith("A");
    });

    test("Key component handles 'backspace' correctly", () => {
        const setInput = jest.fn();
        useSearchInputContext.mockReturnValue({
            input: "A",
            setInput,
        });

        const { getByText } = render(<Key keycode="backspace" />);
        fireEvent.click(getByText(/backspace/));

        expect(setInput).toHaveBeenCalledWith("");
    });

    test("Key component handles 'clear' correctly", () => {
        const setInput = jest.fn();
        useSearchInputContext.mockReturnValue({
            input: "A",
            setInput,
        });

        const { getByText } = render(<Key keycode="clear" />);
        fireEvent.click(getByText(/clear/));

        expect(setInput).toHaveBeenCalledWith("");
    });

    test("Key component handles 'space' correctly", () => {
        const setInput = jest.fn();
        useSearchInputContext.mockReturnValue({
            input: "",
            setInput,
        });

        const { getByText } = render(<Key keycode="space" />);
        fireEvent.click(getByText(/space/));

        expect(setInput).toHaveBeenCalledWith(" ");
    });
});
