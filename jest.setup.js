// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import { Navigation, Pagination, Scrollbar, Virtual } from 'swiper';

// Mocks
import { mockImage } from "__mocks__/mock_svgComponent";
import { mockSwiper } from "__mocks__/mock_swiper.tsx"

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/image", () => mockImage);
jest.mock("assets/images/icon_city.svg", () => mockImage);
jest.mock("assets/images/icon_clock.svg", () => mockImage);
jest.mock("assets/images/icon_close.svg", () => mockImage);
jest.mock("assets/images/icon_forrest.svg", () => mockImage);
jest.mock("assets/images/icon_location.svg", () => mockImage);
jest.mock("assets/images/icon_search.svg", () => mockImage);
jest.mock('swiper/react', () => ({
    Swiper: ({ children }) => <div data-testid="Swiper-testId">{children}</div>,
    SwiperSlide: ({ children }) => (
        <div data-testid="SwiperSlide-testId">{children}</div>
    ),
}))

jest.mock('swiper', () => ({
    Navigation: (props) => null,
    Pagination: (props) => null,
    Scrollbar: (props) => null,
    Virtual: (props) => null,
}))
