// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Employee, sampleEmployees, sortKeysEmployee } from "types/Employee";
import { useMemo, useState } from "react";

const revalidate_busplan = 20;
const url = "https://ps-housetech.uni-muenster.de:444/api/cris";

/**
 * Fetch all Employees
 * @returns Employee[]
 */
export function useEmployees() {
  const { data, isLoading, error } = useSWR<Employee[]>(url, fetcher);

  return {data, isLoading, error};
}
