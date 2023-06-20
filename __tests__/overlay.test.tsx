import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Weather as Overlay } from "components/Overlay/Overlay";
import { useSearchInputContext } from "context/SearchInputContext";

jest.mock("react", () => {
  const originalReact = jest.requireActual("react");
  return {
    ...originalReact,
    useState: jest.fn()
  };
});


describe("Overlay", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { getByText } = render(<Overlay />);
    expect(
      getByText("I wonder what happens if you click the input ;)")
    ).toBeInTheDocument();
  });
});
