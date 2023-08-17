import { REQUEST_URL } from "utils/constants";
// IMPORT - BUILTINS
import useSWR from "swr";
import { Post } from "types/Instagram";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS

const url = `${REQUEST_URL}/api/instagram`;
const options = { refreshInterval: 10 * 60 * 1000 };

/**
 * Fetch all Instagram Posts
 * @returns Post[]
 */
export function useInstagram() {
  const { data, isLoading, error } = useSWR<Post[]>(url, fetcher, options);

  return { data, isLoading, error };
}
