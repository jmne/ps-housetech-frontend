import { Foodplan } from "types/Foodplan";

export function getCafeteriaDateString(date: Date) {
    const month_short = date.getMonth();
    const day_short = date.getDate();
  
    const year = date.getFullYear();
    const month = month_short.valueOf() < 10 ? `0${month_short}` : month_short;
    const day = day_short.valueOf() < 10 ? `0${day_short}` : day_short;
  
    return `${year}-${month}-${day}`;
  }

  export function getIndexForDate(data: Foodplan[], date: Date) {
    const formattedDate = getCafeteriaDateString(date);
  }