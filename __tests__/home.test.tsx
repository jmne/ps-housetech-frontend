// Testing library
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Translation Setup
import i18n from "../i18-test_config";
import { I18nextProvider } from "react-i18next";

// Mocks
import { mockImage } from "../__mocks__/mock_svgComponent";

// Component
import Home from "@/pages/index";

jest.mock("next/image", () => mockImage);
jest.mock("assets/images/icon_search.svg", () => mockImage);
jest.mock("assets/images/icon_city.svg", () => mockImage);
jest.mock("assets/images/icon_forrest.svg", () => mockImage);

describe("Homepage", () => {
  it("Renders the Homepage", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );
    // Check for test string
    expect(screen.getByText("Department of Information Systems")).toBeInTheDocument();
    expect(screen.getByText("Bus plan")).toBeInTheDocument();
  });
});
