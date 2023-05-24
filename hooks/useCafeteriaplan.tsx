// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { DishInformation, sample_dishes } from "types/DishInformation";

const revalidate_cafeteriaplan = 20;
const url = "ps-housetech.uni-muenster.de/api/mensa";

/**
 *
 * @returns Data regarding the next busses
 */
export default function useCafeteriaplan() {
  // const { data, isLoading, error } = useSWR<Busride>(url, fetcher);

  const data = sample_dishes;
  const isLoading = false;
  const error = undefined;

  return { data, isLoading, error };
}
