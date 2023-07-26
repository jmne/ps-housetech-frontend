"use client";

// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Foodplan } from "types/Foodplan";
import { convertFoodplan } from "utils/cafeteriahelper";
import { useMemo } from "react";

const url = "https://ps-housetech.uni-muenster.de:444/api/mensa";
const options = { refreshInterval: 10 * 60 * 1000 };

export const AllCafeterias: Cafeteria[] = ["davinci", "aasee", "bispinghof", "ring"];
export type Cafeteria = "davinci" | "aasee" | "bispinghof" | "ring";

/**
 *
 * @returns Data regarding the next busses
 */
export default function useCafeteriaplan(cafeteria: Cafeteria, locale?: string) {
  const baseUrl = `${url}/${cafeteria}`;
  const urlForLanguage = locale === "en" ? `${baseUrl}/en` : `${url}/${cafeteria}/de`;

  const { data: d, isLoading, error } = useSWR<Foodplan[]>(urlForLanguage, fetcher);
  // /${cafeteria}
  const data = useMemo(() => {
    if (!d) return undefined;
    else return convertFoodplan(d);
  }, [d]);

  return { data, isLoading, error };
}
