// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Mocks
import { mockImage } from "__mocks__/mock_svgComponent";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/image", () => mockImage);
jest.mock("assets/icons/city.svg", () => mockImage);
jest.mock("assets/icons/clock.svg", () => mockImage);
jest.mock("assets/icons/close.svg", () => mockImage);
jest.mock("assets/icons/forrest.svg", () => mockImage);
jest.mock("assets/icons/location.svg", () => mockImage);
jest.mock("assets/icons/search.svg", () => mockImage);
jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="Swiper-testId">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="SwiperSlide-testId">{children}</div>
}));

jest.mock("swiper", () => ({
  Navigation: (props) => null,
  Pagination: (props) => null,
  Scrollbar: (props) => null,
  Virtual: (props) => null
}));
