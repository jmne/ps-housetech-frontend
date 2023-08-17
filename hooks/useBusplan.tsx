import { REQUEST_URL } from "utils/constants";
// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";

const url = `${REQUEST_URL}/api/bus`;
const options = { refreshInterval: 10 * 1000 };

/**
 *
 * @returns Data regarding the next busses
 */
export default function useBusplan(locale?: string) {
  const urlForLanguage = locale === "en" ? `${url}/en` : `${url}/de`;
  const { data, isLoading, error } = useSWR<Busride[]>(urlForLanguage, fetcher, options);

  return { data, isLoading, error };
}
