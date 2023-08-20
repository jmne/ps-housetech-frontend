import { createContext, PropsWithChildren, RefObject, useContext, useRef } from "react";

interface RotationData {
  rootRef: RefObject<HTMLDivElement> | undefined;
  frontRef: RefObject<HTMLDivElement> | undefined;
  backRef: RefObject<HTMLDivElement> | undefined;
}

const RotationDataContext = createContext<RotationData>({
  rootRef: undefined,
  frontRef: undefined,
  backRef: undefined
});

export function RotationProvider({ children }: PropsWithChildren) {
  return (
    <RotationDataContext.Provider
      value={{
        rootRef: useRef<HTMLDivElement>(null),
        frontRef: useRef<HTMLDivElement>(null),
        backRef: useRef<HTMLDivElement>(null)
      }}
    >
      {children}
    </RotationDataContext.Provider>
  );
}

export function useRotationContext() {
  return useContext(RotationDataContext);
}
