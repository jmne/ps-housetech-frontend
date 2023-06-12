import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Overlay } from "components/Overlay/Overlay";
import { useSearchInputContext } from "context/SearchInputContext";

jest.mock("react", () => {
  const originalReact = jest.requireActual("react");
  return {
    ...originalReact,
    useState: jest.fn()
  };
});

jest.mock("context/SearchInputContext", () => ({
  useSearchInputContext: jest.fn()
}));

describe("Overlay", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const useStateMock = (initState) => [initState, jest.fn()];
    React.useState.mockImplementation(useStateMock);
    useSearchInputContext.mockReturnValue({ active: false });
    const { getByText } = render(<Overlay />);
    expect(
      getByText("I wonder what happens if you click the input ;)")
    ).toBeInTheDocument();
  });

  it("shows Keyboard when activeKeyboard is true", () => {
    const useStateMock = (initState) => [true, jest.fn()];
    React.useState.mockImplementation(useStateMock);
    const { getByTestId } = render(<Overlay />);
    expect(getByTestId("keyboard")).toBeInTheDocument();
  });

  it("does not show Keyboard when activeKeyboard is false", () => {
    const useStateMock = (initState) => [false, jest.fn()];
    React.useState.mockImplementation(useStateMock);
    const { queryByTestId } = render(<Overlay />);
    expect(queryByTestId("keyboard")).toBeNull();
  });
});
