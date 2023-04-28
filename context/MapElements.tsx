import { createContext, RefObject, useContext, useRef } from "react";

export interface MapElements {
  leo3_elements: RefObject<SVGSVGElement>[];
  leo3_building: RefObject<HTMLDivElement> | undefined;
  leo3_building_on_campus: RefObject<SVGGElement> | undefined;
  leo11_elements: RefObject<SVGSVGElement>[];
  leo11_building: RefObject<HTMLDivElement> | undefined;
  leo11_building_on_campus: RefObject<SVGGElement> | undefined;
  campus_element: RefObject<SVGSVGElement> | undefined;
  mapContainer: RefObject<HTMLDivElement> | undefined;
}

const Map_elements = createContext<MapElements>({
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

export function MapElementsProvider({ children }: props) {
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

  let init_state: MapElements = {
    leo3_elements: leo3_elements,
    leo3_building: leo3_building,
    leo3_building_on_campus: leo3_building_on_campus,
    leo11_elements: leo11_elements,
    leo11_building: leo11_building,
    leo11_building_on_campus: leo11_building_on_campus,
    campus_element: campusElement,
    mapContainer: mapContainer
  };

  return <Map_elements.Provider value={init_state}>{children}</Map_elements.Provider>;
}

export function useMapElements() {
  return useContext(Map_elements);
}
