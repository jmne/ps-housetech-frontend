import {
  RefObject,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";
import { CampusBuilding } from "types/Campus";
import { MapState } from "types/Map";
import { MAP_BASE_STATE } from "utils/constants";

export interface MapData {
  previous: MapState;
  current: MapState;
  setCurrent: Function;
  leo3_elements: RefObject<SVGSVGElement>[];
  leo3_building: RefObject<HTMLDivElement> | undefined;
  leo3_building_on_campus: RefObject<SVGGElement> | undefined;
  leo11_elements: RefObject<SVGSVGElement>[];
  leo11_building: RefObject<HTMLDivElement> | undefined;
  leo11_building_on_campus: RefObject<SVGGElement> | undefined;
  campus_element: RefObject<SVGSVGElement> | undefined;
  mapContainer: RefObject<HTMLDivElement> | undefined;
}

const Map_data = createContext<MapData>({
  previous: MAP_BASE_STATE,
  current: MAP_BASE_STATE,
  setCurrent: Function,
  leo3_elements: [],
  leo3_building: undefined,
  leo3_building_on_campus: undefined,
  leo11_elements: [],
  leo11_building: undefined,
  leo11_building_on_campus: undefined,
  campus_element: undefined,
  mapContainer: undefined
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

  const leo3_elements = [
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null)
  ];
  const leo3_building = useRef<HTMLDivElement>(null);
  const leo3_building_on_campus = useRef<SVGGElement>(null);

  const leo11_elements = [useRef<SVGSVGElement>(null)];
  const leo11_building = useRef<HTMLDivElement>(null);
  const leo11_building_on_campus = useRef<SVGGElement>(null);

  const mapContainer = useRef<HTMLDivElement>(null);
  const campusElement = useRef<SVGSVGElement>(null);

  let init_state: MapData = {
    previous: previousData,
    current: currentData,
    setCurrent: updateCurrent,
    leo3_elements: leo3_elements,
    leo3_building: leo3_building,
    leo3_building_on_campus: leo3_building_on_campus,
    leo11_elements: leo11_elements,
    leo11_building: leo11_building,
    leo11_building_on_campus: leo11_building_on_campus,
    campus_element: campusElement,
    mapContainer: mapContainer
  };

  return <Map_data.Provider value={init_state}>{children}</Map_data.Provider>;
}

export function useMapContext() {
  return useContext(Map_data);
}
