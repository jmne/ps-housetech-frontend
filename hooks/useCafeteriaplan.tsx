// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { sample_foodplan } from "types/Foodplan";

const revalidate_cafeteriaplan = 20;
const url = "ps-housetech.uni-muenster.de/api/mensa";

/**
 *
 * @returns Data regarding the next busses
 */
export default function useCafeteriaplan() {
  // const { data, isLoading, error } = useSWR<Busride>(url, fetcher);

  const data = sample_foodplan;
  const isLoading = false;
  const error = undefined;

  return { data, isLoading, error };
}
