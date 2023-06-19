import { Foodplan, FoodplanConverted } from "types/Foodplan";

export function getIndexForDate(data: FoodplanConverted[], date: Date) {
  const index = data.findIndex(
    (element) =>
      element.date.getFullYear === date.getFullYear &&
      element.date.getMonth === date.getMonth &&
      element.date.getDay === date.getDay
  );
  return index;
}

export function convertStringToDate(dateString: String) {
  var parts = dateString.split("-"); // Split the string into an array of parts
  var year = parseInt(parts[0], 10); // Extract the year and convert it to an integer
  var month = parseInt(parts[1], 10) - 1; // Extract the month (subtract 1 since months are zero-based)
  var day = parseInt(parts[2], 10); // Extract the day

  var date = new Date(year, month, day); // Create a new Date object

  return date;
}

export function convertFoodplan(data: Foodplan[]) {
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
        item: [entry.item],
        date: currentDate
      };
    } else {
      // Otherwise, create a placeholder menu item for the missing date
      const dish = {
        item: undefined,
        date: currentDate
      };

      filledMenuArray.push(dish);
    }

    // Move to the next day
    currentDate.setTime(currentDate.getTime() + 86400000);
  }

  return filledMenuArray;
}
