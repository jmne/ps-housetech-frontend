import {
  MutableRefObject,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";
import { MapState } from "types/Map";
import { MAP_BASE_STATE } from "utils/constants";

export interface MapData {
  previous: MapState;
  current: MapState;
  setCurrent: Function;
  animationActiveCampus: MutableRefObject<boolean> | undefined;
  animationActiveLeo3: MutableRefObject<boolean> | undefined;
  animationActiveLeo11: MutableRefObject<boolean> | undefined;
}

const Map_data = createContext<MapData>({
  previous: MAP_BASE_STATE,
  current: MAP_BASE_STATE,
  setCurrent: Function,
  animationActiveCampus: undefined,
  animationActiveLeo3: undefined,
  animationActiveLeo11: undefined
});

interface props {
  children: JSX.Element;
}

function usePrevious(init_state: any) {
  const [previousData, setPreviousData] = useState(init_state);
  const [currentData, setCurrentData] = useState(init_state);

  const update = useCallback(
    (new_state: any) => {
      setCurrentData((value: any) => {
        setPreviousData(value);
        const filledState = { ...value, ...new_state };
        return filledState;
      });
    },
    [setPreviousData, setCurrentData]
  );

  return [previousData, currentData, update];
}

export function MapProvider({ children }: props) {
  const [previousData, currentData, updateCurrent] = usePrevious(MAP_BASE_STATE);
  const animationActiveCampus = useRef(false);
  const animationActiveLeo3 = useRef(false);
  const animationActiveLeo11 = useRef(false);

  let init_state: MapData = {
    previous: previousData,
    current: currentData,
    setCurrent: updateCurrent,
    animationActiveCampus: animationActiveCampus,
    animationActiveLeo3: animationActiveLeo3,
    animationActiveLeo11: animationActiveLeo11
  };

  return <Map_data.Provider value={init_state}>{children}</Map_data.Provider>;
}

export function useMapContext() {
  return useContext(Map_data);
}
