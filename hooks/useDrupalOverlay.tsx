import { REQUEST_URL } from "utils/constants";
// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Overlay } from "types/Drupal";

const url = `${REQUEST_URL}/api/drupal/overlay`;
const options = { refreshInterval: 60 * 1000 };

export default function useDrupalOverlay(locale?: string) {
  const { data, isLoading, error } = useSWR<Overlay[]>(url, fetcher, options);

  return { data, isLoading, error };
}
