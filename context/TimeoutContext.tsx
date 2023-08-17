import { createContext, useContext } from "react";
import { IdleHandlerManager } from "utils/IdleHandling/IdleHandlerManager";
import { TIMEOUT_DURATION } from "utils/constants";

interface TimeoutData {
  manager: IdleHandlerManager | undefined;
}

const Timeout_Data = createContext<TimeoutData>({
  manager: undefined
});

interface props {
  children: JSX.Element;
}

export function TimeoutProvider({ children }: props) {
  let init_state: TimeoutData = {
    manager: new IdleHandlerManager({ timeout: TIMEOUT_DURATION })
  };

  return <Timeout_Data.Provider value={init_state}>{children}</Timeout_Data.Provider>;
}

export function useTimeoutContext() {
  return useContext(Timeout_Data);
}
