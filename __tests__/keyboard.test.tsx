import { render, fireEvent, screen } from "@testing-library/react";
import Keyboard from "@/components/Keyboard/Keyboard";
import { Letter, Space } from "@/components/Keyboard/Keys";
import { useSearchInputContext } from "context/SearchInputContext";

jest.mock("context/SearchInputContext");

describe("Keyboard and Key components", () => {
  beforeEach(() => {
    useSearchInputContext.mockReturnValue({
      active: true,
      input: "",
      setInput: jest.fn()
    });
  });

  test("Keyboard renders correctly", () => {
    const keys = [
      ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
      ["y", "x", "c", "v", "b", "n", "m", "-"]
    ];

    render(<Keyboard />);

    keys.forEach((row) => {
      row.forEach((value) => {
        expect(screen.getByText(value.toUpperCase())).toBeInTheDocument();
      });
    });
  });

  test("Key component triggers setInput correctly on click", () => {
    const setInput = jest.fn();
    useSearchInputContext.mockReturnValue({
      active: true,
      input: "",
      setInput
    });

    const { getByText } = render(<Letter keycode="a" />);
    fireEvent.mouseDown(getByText(/A/));

    expect(setInput).toHaveBeenCalledWith("A");
  });

  test("Key component handles 'space' correctly", () => {
    const setInput = jest.fn();
    useSearchInputContext.mockReturnValue({
      active: true,
      input: "",
      setInput
    });

    const { getByText } = render(<Space />);
    fireEvent.mouseDown(getByText(/space/));

    expect(setInput).toHaveBeenCalledWith(" ");
  });
});
