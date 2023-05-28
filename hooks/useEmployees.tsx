// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Employee, sampleEmployees, sortKeysEmployee } from "types/Employee";
import { useMemo, useState } from "react";

const revalidate_busplan = 20;
const url = "ps-housetech.uni-muenster.de/api/bus";

/**
 * Fetch the list of all Employees and return it sorted by the Name or Department
 * @param sortBy 
 * @returns Employee[]
 */
export function useEmployeesSorted(sortBy: sortKeysEmployee){
    const allItems = useEmployees()
    const [sortedEmployees, setSorted] = useState<Employee[]>([])

    // If sort-key or data did not change -> Return last calculated data
    useMemo(() => {
        if(!(allItems)) return
        setSorted(
            [...allItems].sort((a,b) => (a[sortBy].localeCompare(b[sortBy])))
        )
    },[sortBy, allItems])

    return(sortedEmployees)
}

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