import { ToastInformation } from "@/components/Toast/Toast";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState
} from "react";

export interface ToastContextData {
  info: ToastInformation | undefined;
  push: (x: ToastInformation | undefined) => void;
}

const ToastContext = createContext<ToastContextData>({ info: undefined, push: () => {} });

export function ToastContextProvider({ children }: PropsWithChildren) {
  const [info, setInfo] = useState<ToastInformation | undefined>(undefined);

  const pushToast = useCallback(
    (newToast: ToastInformation | undefined) => {
      setInfo(newToast);
    },
    [setInfo]
  );

  let init_state: ToastContextData = { info: info, push: pushToast };
  return <ToastContext.Provider value={init_state}>{children}</ToastContext.Provider>;
}

export function useToastContext() {
  return useContext(ToastContext);
}
