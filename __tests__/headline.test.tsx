import Headline from "@/components/Headline/Headline";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { mount } from 'enzyme';

import i18n from "../i18-test_config";
import { I18nextProvider } from "react-i18next";

import wwu_logo from "assets/images/wwu-no-text.svg";
import ercis_logo from "assets/images/ercis.svg";

describe("Headline", () => {
  it("Renders the headline", () => {
    const mounted = mount(
      <I18nextProvider i18n={i18n}>
        <Headline />
      </I18nextProvider>
    )
    // Check for test string
    expect(mounted.contains("Department of Information Systems")).toBe(true);
    // Check for images
    // expect(mounted.getByAltText("WWU Logo")).toBeInTheDocument();
    // expect(mounted.getByAltText("ERCIS Logo")).toBeInTheDocument();
    expect(mounted.find("img").prop("src")?.includes(wwu_logo))
    expect(mounted.find("img").prop("src")?.includes(ercis_logo))
  });
});
