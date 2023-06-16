import { fireEvent, render, screen } from "@testing-library/react";
import Cafeteriaplan, { getDayOfWeek } from "@/components/Cafeteriaplan/Cafeteriaplan";
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";
import { SampleDishes } from "types/SampleDishes";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18-test_config";

jest.mock("hooks/useCafeteriaplan");
jest.mock("utils/IdleHandling/IdleHandler");
jest.mock("context/TimeoutContext");

const mockedUseCafeteriaplan = useCafeteriaplan as jest.MockedFunction<
  typeof useCafeteriaplan
>;
const mockedUseTimeoutContext = useTimeoutContext as jest.MockedFunction<
  typeof useTimeoutContext
>;

function formatDateForData(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function generateMockData(): SampleDishes[] {
  const currentTime = new Date();

  return [
    {
      date: formatDateForData(new Date(currentTime.getTime() - 86400000 * 3)),
      weekday: getDayOfWeek(new Date(currentTime.getTime() - 86400000 * 3)),
      item: [
        {
          meal: "Dish 3",
          price1: 12,
          category: "Category 3",
          foodicons: [],
          price3: 0,
          allergens: "D"
        },
        {
          meal: "Dish 4",
          price1: 8,
          category: "Category 4",
          foodicons: [],
          price3: 0,
          allergens: "G"
        }
      ]
    },
    {
      date: formatDateForData(new Date(currentTime.getTime() - 86400000 * 2)),
      weekday: getDayOfWeek(new Date(currentTime.getTime() - 86400000 * 2)),
      item: [
        {
          meal: "Dish 5",
          price1: 9,
          category: "Category 5",
          foodicons: [],
          price3: 0,
          allergens: "H"
        },
        {
          meal: "Dish 6",
          price1: 11,
          category: "Category 6",
          foodicons: [],
          price3: 0,
          allergens: "J"
        }
      ]
    },
    {
      date: formatDateForData(new Date(currentTime.getTime() - 86400000)),
      weekday: getDayOfWeek(new Date(currentTime.getTime() - 86400000)),
      item: [
        {
          meal: "Dish 7",
          price1: 13,
          category: "Category 7",
          foodicons: [],
          price3: 0,
          allergens: "K"
        },
        {
          meal: "Dish 8",
          price1: 10,
          category: "Category 8",
          foodicons: [],
          price3: 0,
          allergens: "L"
        }
      ]
    },
    {
      date: formatDateForData(currentTime),
      weekday: getDayOfWeek(currentTime),
      item: [
        {
          meal: "Dish 1",
          price1: 10,
          category: "Category 1",
          foodicons: [],
          price3: 0,
          allergens: "F"
        },
        {
          meal: "Dish 2",
          price1: 15,
          category: "Category 2",
          foodicons: [],
          price3: 0,
          allergens: "AWE"
        }
      ]
    },
    {
      date: formatDateForData(new Date(currentTime.getTime() + 86400000)),
      weekday: getDayOfWeek(new Date(currentTime.getTime() + 86400000)),
      item: [
        {
          meal: "Dish 3",
          price1: 12,
          category: "Category 3",
          foodicons: [],
          price3: 0,
          allergens: "D"
        },
        {
          meal: "Dish 4",
          price1: 8,
          category: "Category 4",
          foodicons: [],
          price3: 0,
          allergens: "G"
        }
      ]
    },
    {
      date: formatDateForData(new Date(currentTime.getTime() + 86400000 * 2)),
      weekday: getDayOfWeek(new Date(currentTime.getTime() + 86400000 * 2)),
      item: [
        {
          meal: "Dish 5",
          price1: 9,
          category: "Category 5",
          foodicons: [],
          price3: 0,
          allergens: "H"
        },
        {
          meal: "Dish 6",
          price1: 11,
          category: "Category 6",
          foodicons: [],
          price3: 0,
          allergens: "J"
        }
      ]
    },
    {
      date: formatDateForData(new Date(currentTime.getTime() + 86400000 * 3)),
      weekday: getDayOfWeek(new Date(currentTime.getTime() + 86400000 * 3)),
      item: [
        {
          meal: "Dish 7",
          price1: 13,
          category: "Category 7",
          foodicons: [],
          price3: 0,
          allergens: "K"
        },
        {
          meal: "Dish 8",
          price1: 10,
          category: "Category 8",
          foodicons: [],
          price3: 0,
          allergens: "L"
        }
      ]
    }
  ];
}

const mockData: SampleDishes[] = generateMockData();

describe("Cafeteriaplan component", () => {
  beforeEach(() => {
    mockedUseCafeteriaplan.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: undefined
    });
    mockedUseTimeoutContext.mockReturnValue({ manager: undefined });
  });

  const hasText = (element: HTMLElement | null, text: string) => {
    return element?.textContent?.toLowerCase().includes(text.toLowerCase()) ?? false;
  };
  
  test("Renders the component correctly", () => {
    render(<Cafeteriaplan />);
  
    const dish1Element = screen.queryByText((content, element) => hasText(element as HTMLElement, "Dish 1"));
    expect(dish1Element).not.toBeNull();
  
    const dish2Element = screen.queryByText((content, element) => hasText(element as HTMLElement, "Dish 2"));
    expect(dish2Element).not.toBeNull();
  });
  

  test("Data remains the same when handling arrowBackButton on the first index", () => {
    render(<Cafeteriaplan />);

    // Use the alt text to find the arrow back button
    const arrowBackAltText = "Arrow Back";
    const arrowBackButton = screen.getByAltText(arrowBackAltText);

    fireEvent.click(arrowBackButton);

    const firstItem = mockData[0];
    const dish1Element = screen.getByText(firstItem.item[0].meal);
    const dish2Element = screen.getByText(firstItem.item[1].meal);

    expect(dish1Element).toBeInTheDocument();
    expect(dish2Element).toBeInTheDocument();
  });

  test("Data remains the same when handling arrowForwardButton on the last index", () => {
    render(<Cafeteriaplan />);

    const arrowForwardAltText = "Arrow Forward";
    const arrowForwardButton = screen.getByAltText(arrowForwardAltText);

    fireEvent.click(arrowForwardButton);

    const lastItem = mockData[mockData.length - 1];
    const dish1Element = screen.getByText(lastItem.item[0].meal);
    const dish2Element = screen.getByText(lastItem.item[1].meal);

    expect(dish1Element).toBeInTheDocument();
    expect(dish2Element).toBeInTheDocument();
  });

  describe("Cafeteriaplan component", () => {
    it("Renders the component with translated title", () => {
      render(
        <I18nextProvider i18n={i18n}>
          <Cafeteriaplan />
        </I18nextProvider>
      );
      // Check for test string
      expect(screen.getByText("Cafeteria plan")).toBeInTheDocument();
    });
  });
});
