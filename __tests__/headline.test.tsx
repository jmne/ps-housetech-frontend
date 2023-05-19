// Testing library
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Translation Setup
import i18n from "../i18-test_config";
import { I18nextProvider } from "react-i18next";

// Component
import Headline from "@/components/Headline/Headline";

describe("Headline", () => {
  it("Renders the headline", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Headline />
      </I18nextProvider>
    );
    // Check for test string
    expect(screen.getByText("Department of Information Systems")).toBeInTheDocument();
    // Check for images
    expect(screen.getByAltText("WWU Logo")).toBeInTheDocument();
    expect(screen.getByAltText("ERCIS Logo")).toBeInTheDocument();
  });
});
