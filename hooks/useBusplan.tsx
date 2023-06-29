// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";

const url = "https://ps-housetech.uni-muenster.de:444/api/bus";
const options = { refreshInterval: 10 * 1000 };

/**
 *
 * @returns Data regarding the next busses
 */
export default function useBusplan() {
  const { data, isLoading, error } = useSWR<Busride[]>(url, fetcher, options);

  return { data, isLoading, error };
}
