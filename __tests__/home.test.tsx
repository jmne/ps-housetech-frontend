import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Homepage", () => {
  it("Renders the Homepage", () => {
    render(<Home />);
    // Check for test string
    expect(screen.getByText("Busplan")).toBeInTheDocument();
  });
});
