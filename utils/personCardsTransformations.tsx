import styles_wayfinder from "@/components/Wayfinder/Wayfinder.module.scss";
import { Employee } from "types/Employee";

/**
 * Check if a person is to be shown for the given input.
 * @param e - The person object.
 * @param input - The input string from the search field.
 * @returns - Boolean indicating if the input string is found in some attribute of the person.
 */
export function employeeInFilter(e: Employee, input: string): boolean {
  const input_lower = input.toLowerCase();
  const dep_lower = e.chair?.toLowerCase();
  const name_lower = `${e.cfFamilyNames?.toLowerCase()}${e.cfFirstNames?.toLowerCase()}`;

  return dep_lower?.includes(input_lower) || name_lower.includes(input_lower);
}

/**
 * Collapse the list element for the given person to hide all details.
 * @param p - The person in the list.
 */
export function collapse(p: Employee): void {
  const elem = document.getElementById(`${p.cfFamilyNames}${p.phone}${p.chair}`);
  if (elem) elem.classList.remove(styles_wayfinder.expanded);
}

/**
 * Expand the list element for the given person to show all details.
 * @param p - The person in the list.
 */
export function expand(p: Employee): void {
  const elem = document.getElementById(`${p.cfFamilyNames}${p.phone}${p.chair}`);
  if (elem) elem.classList.add(styles_wayfinder.expanded);
}
