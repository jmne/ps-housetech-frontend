import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import { Overlay } from "components/Overlay/Overlay";
import { useSearchInputContext } from "context/SearchInputContext";

jest.mock("context/SearchInputContext", () => ({
  useSearchInputContext: jest.fn()
}));

describe("Overlay", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    useSearchInputContext.mockReturnValue({ active: false });
    const { getByText } = render(<Overlay />);
    expect(
      getByText("I wonder what happens if you click the input ;)")
    ).toBeInTheDocument();
  });
});
