/**
 *
 * @param day Date-object
 * @param length Specifies if the full string of the weekday, or an abbreviation is returned
 * @param locale The currect locale of the router
 * @returns Weekday-string in the specified length and language
 */
export function getWeekday(day: Date, length: "short" | "long", locale: string | undefined) {
  const weekday = day
    .toLocaleTimeString(locale == "de" ? "de-de" : "en-gb", { weekday: length })
    .replace(".", " ")
    .replace(",", " ")
    .split(" ")[0];

  return weekday;
}
