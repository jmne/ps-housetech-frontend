"use client";

// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Foodplan } from "types/Foodplan";
import { convertFoodplan } from "utils/cafeteriahelper";
import { useMemo } from "react";

const revalidate_cafeteriaplan = 20;
const url = "https://ps-housetech.uni-muenster.de:444/api/mensa";

/**
 *
 * @returns Data regarding the next busses
 */
export default function useCafeteriaplan() {
  const { data: d, isLoading, error } = useSWR<Foodplan[]>(url, fetcher);

  const data = useMemo(() => {
    if (!d) return undefined;
    else return convertFoodplan(d);
  }, [d]);

  return { data, isLoading, error };
}
