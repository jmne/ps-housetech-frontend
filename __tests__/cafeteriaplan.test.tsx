import { render, screen } from "@testing-library/react";
import Cafeteriaplan, { getDayOfWeek } from "@/components/Cafeteriaplan/Cafeteriaplan";
import  useCafeteriaplan  from "hooks/useCafeteriaplan";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";
import { SampleDishes } from "types/SampleDishes";

jest.mock("hooks/useCafeteriaplan");
jest.mock("utils/IdleHandling/IdleHandler");
jest.mock("context/TimeoutContext");

const mockedUseCafeteriaplan = useCafeteriaplan as jest.MockedFunction<typeof useCafeteriaplan>;
const mockedUseTimeoutContext = useTimeoutContext as jest.MockedFunction<typeof useTimeoutContext>;
const mockData: SampleDishes[] = [
    {
      date: "2023-06-15",
      weekday: "Thursday",
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
        },
      ],
    },
  ];
  
  

describe("Cafeteriaplan component", () => {
  beforeEach(() => {
    mockedUseCafeteriaplan.mockReturnValue({
        data: mockData,
        isLoading: false,
        error: undefined
      });
    mockedUseTimeoutContext.mockReturnValue({ manager: undefined });
  });

  test("Renders the component correctly", () => {
    render(<Cafeteriaplan />);

    expect(screen.getByText("Dish 1")).toBeInTheDocument();
    expect(screen.getByText("Dish 2")).toBeInTheDocument();
  });

  test("Handles arrow back correctly", () => {
    render(<Cafeteriaplan />);

    const arrowBack = screen.getByAltText("Arrow Back");
    expect(arrowBack).toBeInTheDocument();

    arrowBack.click();

    expect(screen.getByText("Dish 3")).toBeInTheDocument();
    expect(screen.getByText("Dish 4")).toBeInTheDocument();
  });

  test("Handles arrow forward correctly", () => {
    render(<Cafeteriaplan />);

    const arrowForward = screen.getByAltText("Arrow Forward");
    expect(arrowForward).toBeInTheDocument();

    arrowForward.click();

    expect(screen.getByText("Dish 3")).toBeInTheDocument();
    expect(screen.getByText("Dish 4")).toBeInTheDocument();
  });

  test("Formats date correctly", () => {
    const date = new Date("2023-06-15");
    const formattedDate = formatDateForData(date);
    expect(formattedDate).toBe("2023-06-15");
  });

  test("Gets day of week correctly", () => {
    const date = new Date("2023-06-15");
    const dayOfWeek = getDayOfWeek(date);
    expect(dayOfWeek).toBe("Thursday");
  });
});
function formatDateForData(date: Date) {
    throw new Error("Function not implemented.");
}

