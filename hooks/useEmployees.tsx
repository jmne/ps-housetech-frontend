// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Employee } from "types/Employee";

const url = "https://ps-housetech.uni-muenster.de:444/api/cris";
const options = { refreshInterval: 60 * 60 * 1000 };

/**
 * Fetch all Employees
 * @returns Employee[]
 */
export function useEmployees() {
  const { data, isLoading, error } = useSWR<Employee[]>(url, fetcher, options);

  return { data, isLoading, error };
}
