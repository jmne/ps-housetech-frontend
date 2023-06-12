// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Employee, sampleEmployees, sortKeysEmployee } from "types/Employee";
import { useMemo, useState } from "react";

const revalidate_busplan = 20;
const url = "ps-housetech.uni-muenster.de/api/bus";

/**
 * Fetch all Employees
 * @returns Employee[]
 */
export function useEmployees() {
    // const { data, isLoading, error } = useSWR<Employee[]>

    const data = sampleEmployees;
    const isLoading = false;
    const error = undefined;

    return data
}