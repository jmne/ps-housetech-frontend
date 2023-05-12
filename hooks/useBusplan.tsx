// IMPORT - BUILTINS
import useSWR from "swr"
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { Busride, sample_busrides } from "types/Busride";

const revalidate_busplan = 20;
const url = "ps-housetech.uni-muenster.de/api/bus"

/**
 * 
 * @returns Data regarding the next busses
 */
export default function useBusplan() {
    // const { data, isLoading, error } = useSWR<Busride>(url, fetcher);
    
    const data = sample_busrides;
    const isLoading = false;
    const error = undefined;

    return ({ data, isLoading, error })
}
