// IMPORTS - BUILTINS
import { RefObject } from "react";
import { BuildingFloor, CampusBuilding, buildingNames } from "types/Campus";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { transitionClass, transitionFunction, transitionStyle } from "utils/animations";
import { MapData } from "context/MapContext";

const getFloorStyleFromOffset = [
  styles.floor__1below,
  styles.floor__2below,
  styles.floor__3below,
  styles.floor__4below
];

export async function minimizeBuilding(
  building_onCampus: SVGGElement,
  building: HTMLDivElement,
  mapContainer: HTMLDivElement
) {
  const boundingBox_buildingOnCampus = building_onCampus.getBoundingClientRect();
  const boundingBox_map = mapContainer.getBoundingClientRect();

  const center_buildingOnCampus = {
    x: boundingBox_buildingOnCampus.x + boundingBox_buildingOnCampus.width / 2,
    y: boundingBox_buildingOnCampus.y + boundingBox_buildingOnCampus.height / 2
  };
  const center_building = {
    x: boundingBox_map.width / 2,
    y: boundingBox_map.height / 2
  };

  const building_offset_x =
    center_buildingOnCampus.x - center_building.x - boundingBox_map.x;
  const building_offset_y =
    center_buildingOnCampus.y - center_building.y - boundingBox_map.y;

  //const isLeo3 = building.id == buildingNames.LEO3
  //${isLeo3 ? 'rotate(-20deg)' : 'rotate(-90deg)'}

  return transitionStyle(building, {
    transform: `translateX(${building_offset_x}px) translateY(${building_offset_y}px) scale(0)`
  });
}

export async function maximizeBuilding(building: HTMLDivElement) {
  return transitionStyle(building, { transform: "" });
}

export async function minimizeCampus(campus: SVGSVGElement) {
  return transitionStyle(campus, { opacity: "0" });
}

export async function maximizeCampus(campus: SVGSVGElement) {
  return transitionStyle(campus, { opacity: "1" });
}

export async function setRoomHighlight(
  room: string | number,
  building: CampusBuilding,
  highlight: boolean,
  floor?: string
) {
  const room_id = floor ? `${building}-${room}` : `${building}-${room}`;
  const room_elements = document.querySelectorAll(`#${room_id}`);
  if (!room_elements || room_elements.length === 0)
    return new Promise((resolve) => {
      resolve(null);
    });

  if (highlight === true)
    return transitionFunction(
      room_elements[0],
      addRoomHighlight.bind(null, room_elements)
    );
  else
    return transitionFunction(
      room_elements[0],
      removeRoomHighlight.bind(null, room_elements)
    );
}

function addRoomHighlight(elements: NodeListOf<Element>) {
  elements.forEach((e) => {
    e.classList.value = styles.highlight;
  });
}

function removeRoomHighlight(elements: NodeListOf<Element>) {
  elements.forEach((e) => {
    e.classList.value = "";
  });
}

function highlightFloor_internal(
  building_floors: RefObject<SVGSVGElement>[],
  indexNewLayer: number
) {
  for (let index = 0; index < building_floors.length; index++) {
    const el = building_floors[index].current;
    if (!el) return;

    if (index === indexNewLayer) {
      setFloorInFocus(el);
      continue;
    }

    const diff = index - indexNewLayer;
    setFloorOutOfFocus(el, diff);
  }
}

export async function highlightFloor(
  floor_to_highlight: BuildingFloor,
  building_floors: RefObject<SVGSVGElement>[]
) {
  const floor_nr = floor_to_highlight.charAt(5);
  const index_new_layer = parseInt(floor_nr);

  const transformation = highlightFloor_internal.bind(
    null,
    building_floors,
    index_new_layer
  );

  return transitionFunction(building_floors[0].current, transformation);
}

function collapseFloorsOfBuilding_internal(building_floors: RefObject<SVGSVGElement>[]) {
  for (let index = 0; index < building_floors.length; index++) {
    const element = building_floors[index].current;
    if (!element) continue;
    element.classList.value = "";
  }
}

export async function collapseFloorsOfBuilding(
  building_floors: RefObject<SVGSVGElement>[]
) {
  const transformation = collapseFloorsOfBuilding_internal.bind(null, building_floors);

  return transitionFunction(building_floors[0].current, transformation);
}

function setFloorInFocus(element: SVGSVGElement) {
  element.classList.value = styles.floor__focus;
}

function setFloorOutOfFocus(element: SVGSVGElement, offset: number) {
  if (offset < 0) {
    const offset_value = Math.abs(offset);
    if (1 <= offset_value && offset_value <= getFloorStyleFromOffset.length)
      element.classList.value = getFloorStyleFromOffset[offset_value - 1];
  } else {
    element.classList.value = styles.floor__above;
  }
}

export function addRoomClickListeners(
  container: Element,
  building: CampusBuilding,
  floor: BuildingFloor | undefined,
  mapContext: MapData
) {
  const allRoomElements = container.querySelectorAll(`[id*="${building}-"]`);
  allRoomElements.forEach((element) => {
    const roomNumber = element.id.split("-").slice(1).join("-");
    element.addEventListener("click", () => {
      mapContext.setCurrent({
        area: building,
        floor: floor,
        room: roomNumber ? roomNumber : undefined
      });
    });
  });
}
