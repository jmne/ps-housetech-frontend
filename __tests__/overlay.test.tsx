import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Weather } from "@/components/Weather/Weather";

describe("Overlay", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { getByText } = render(<Weather />);
    expect(
      getByText("I wonder what happens if you click the input ;)")
    ).toBeInTheDocument();
  });
});
