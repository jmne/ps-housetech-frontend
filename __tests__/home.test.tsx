import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import i18n from "../i18-test_config";
import { I18nextProvider } from "react-i18next";

describe("Homepage", () => {


  it("Renders the Homepage", () => {
    const mounted = mount(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    )
    // Check for test string
    expect(mounted.contains("Bus plan")).toBe(true);
    expect(mounted.contains("Department of Information Systems")).toBe(true);
  });
});
