import { Foodplan, FoodplanConverted } from "types/Foodplan";

export function getIndexForDate(data: FoodplanConverted[], date: Date) {
  const index = data.findIndex((element) => {
    const isSameDate =
      element.date.getFullYear() === date.getFullYear() &&
      element.date.getMonth() === date.getMonth() &&
      element.date.getDate() === date.getDate();
      
    return isSameDate;
  });
  return index;
}

export function convertStringToDate(dateString: String) {
  return new Date(Date.parse(`${dateString}T00:00:00Z`));
}

export function convertFoodplan(data: Foodplan[]): FoodplanConverted[] {
  // Create a new array to store the filled menu items
  const filledMenuArray = [];

  // Extract the first and last dates from the original array
  const startDate = convertStringToDate(data[0].date);
  const endDate = convertStringToDate(data[data.length - 1].date);

  // Iterate through each date between the start and end dates
  let currentDate = startDate;
  while (currentDate <= endDate) {
    // Check if the current date exists in the original array
    const entry = data.find(
      (item: { date: string }) => item.date == currentDate.toISOString().split("T")[0]
    );

    // If a menu item exists for the current date, add it to the filled array
    if (entry) {
      convertStringToDate(entry.date);
      const dish = {
        item: entry.item,
        date: new Date(currentDate.getTime())
      };

      filledMenuArray.push(dish)
    } else {
      // Otherwise, create a placeholder menu item for the missing date
      const dish = {
        item: undefined,
        date: new Date(currentDate.getTime())
      };

      filledMenuArray.push(dish);
    }

    // Move to the next day
    currentDate.setTime(currentDate.getTime() + 86400000);
  }

  return filledMenuArray;
}
