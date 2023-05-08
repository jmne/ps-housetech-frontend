import Home from "@/pages/home";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Homepage", () => {
  it("renders a sample page", () => {
    render(<Home />);
    // Check for test string
    expect(screen.getByText("Test: Homepage")).toBeInTheDocument();
  });
});
