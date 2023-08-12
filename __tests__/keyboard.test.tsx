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
});
