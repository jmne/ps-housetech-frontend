import { createContext, useContext } from "react";
import { IdleHandler } from "utils/IdleHandler";
import { TIMEOUT_DURATION } from "utils/constants";

interface TimeoutData {
    handler: IdleHandler | undefined
}

const Timeout_Data = createContext<TimeoutData>({
    handler: undefined
})

interface props {
    children: JSX.Element
}

export function TimeoutProvider({ children }: props) {
    let init_state: TimeoutData = {
        handler: new IdleHandler({ timeout: TIMEOUT_DURATION })
    }

    return (
        <Timeout_Data.Provider value={init_state}>
            {children}
        </Timeout_Data.Provider>
    );
}

export function useTimeoutContext() {
    return useContext(Timeout_Data)
}