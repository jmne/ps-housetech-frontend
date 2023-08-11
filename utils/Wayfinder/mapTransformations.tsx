// IMPORTS - BUILTINS
import { RefObject } from "react";
import { BuildingFloor, CampusBuilding } from "types/Campus";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { transitionFunction, transitionStyle } from "utils/animations";

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
  floor?: string,
  container?: Element
) {
  const room_id = floor ? `${building}-${room}` : `${building}-${room}`;

  const queryParent = container ? container : document;

  const multiple_rooms_possible = typeof room === "string" ? room.includes("wc") : false;
  const room_elements = multiple_rooms_possible
    ? queryParent.querySelectorAll(`#${room_id}`)
    : [queryParent.querySelector(`#${room_id}`)];
  if (!room_elements || room_elements.length === 0 || room_elements[0] === null)
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

function addRoomHighlight(elements: NodeListOf<Element> | Array<Element | null>) {
  elements.forEach((e) => {
    if (!e) return;
    e.classList.value = styles.highlight;
  });
}

function removeRoomHighlight(elements: NodeListOf<Element> | Array<Element | null>) {
  elements.forEach((e) => {
    if (!e) return;
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

  const elements: SVGSVGElement[] = [];
  building_floors.forEach((reference) => {
    if (reference.current) elements.push(reference.current);
  });

  return transitionFunction(elements, transformation);
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

  if (!building_floors[0].current) return;

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

function egg1Handler() {
  setTimeout(() => {
    const body = document.getElementById("index-wrapper");
    if (body) body.style.backgroundColor = "#f0f0f0";
  }, 10000);

  const body = document.getElementById("index-wrapper");
  const appWrapper = document.getElementById("app-wrapper");
  if (body) body.style.backgroundColor = "#f0f0f000";
  if (appWrapper)
    appWrapper.style.background =
      "conic-gradient(at 14% 50%, #0000 221.25deg, white 222deg 318deg, #0000 318.25deg),conic-gradient(at 23% 50%, #0000 221.25deg, #ffa6b9 222deg 318deg, #0000 318.25deg),conic-gradient(at 32% 50%, #0000 221.25deg, #00d2ff 222deg 318deg, #0000 318.25deg),conic-gradient(at 41% 50%, #0000 221.25deg, #753000 222deg 318deg, #0000 318.25deg),conic-gradient(at 50% 50%, #0000 221.25deg, black 222deg 318deg, #0000 318.25deg),linear-gradient(red 0 16.66%, orange 0 33.33%, yellow 0 50%, green 0 66.66%, blue 0 83.33%, indigo 0)";
}

export function buildingClickHandler(
  event: any,
  building: CampusBuilding,
  floor: BuildingFloor | undefined,
  setMapData: Function
) {
  let targetElement = event.target as HTMLElement;

  if (
    targetElement.parentElement &&
    targetElement.parentElement.id.includes(`${building}-`)
  ) {
    targetElement = targetElement.parentElement;
  } else if (
    targetElement.parentElement?.parentElement &&
    targetElement.parentElement.parentElement.id.includes(`${building}-`)
  ) {
    targetElement = targetElement.parentElement.parentElement;
  }

  if (building === "campus" && targetElement.id.includes("egg1")) {
    egg1Handler();
    return;
  }

  if (targetElement && targetElement.id.includes(`${building}-`)) {
    // Check if the clicked element is one of the room elements
    const roomNumber = targetElement.id.split("-").slice(1).join("-");
    setMapData({
      area: building,
      floor: floor,
      room: roomNumber ? roomNumber : undefined
    });
  }
}
