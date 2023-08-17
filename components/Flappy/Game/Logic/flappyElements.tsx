import { PropsWithChildren, RefObject, createContext, useContext, useRef } from "react";

export interface FlappyElements {
  bird: RefObject<HTMLDivElement> | undefined;
  background: RefObject<HTMLImageElement | null> | undefined;
}

const FlappyElementsContext = createContext<FlappyElements>({
  bird: undefined,
  background: undefined
});

export function FlappyElementsProvider({ children }: PropsWithChildren) {
  const birdRef = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLImageElement>(null);

  return (
    <FlappyElementsContext.Provider
      value={{
        bird: birdRef,
        background: background
      }}
    >
      {children}
    </FlappyElementsContext.Provider>
  );
}

export function useFlappyElementsContext() {
  return useContext(FlappyElementsContext);
}
