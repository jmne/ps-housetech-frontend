// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Overlay } from "types/Drupal";
import { sampleOverlay } from "types/Drupal";

const url = "https://ps-housetech.uni-muenster.de:444/api/drupal/overlay";
const options = { refreshInterval: 60 * 1000 };

export default function useDrupalOverlay(locale?: string) {
  const { data, isLoading, error } = useSWR<Overlay[]>(url, fetcher, options);

  return { data: sampleOverlay, isLoading, error };
}
