import Headline from "@/components/headline/Headline";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Homepage", () => {
  it("renders a sample page", () => {
    render(<Headline />);
    // Check for test string
    expect(screen.getByText("Department of Information Systems")).toBeInTheDocument();
    // Check for images
    expect(screen.getByAltText("WWU Logo")).toBeInTheDocument();
    expect(screen.getByAltText("ERCIS Logo")).toBeInTheDocument();
  });
});
