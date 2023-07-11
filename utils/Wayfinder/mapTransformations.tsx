// IMPORTS - BUILTINS
import { RefObject } from "react";
import { BuildingFloor, CampusBuilding, buildingNames } from "types/Campus";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { transitionFunction, transitionStyle } from "utils/animations";
import { MapData } from "context/MapContext";
import { getPersonForRoom } from "./mapValidations";
import { Employee } from "types/Employee";

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

  if (!building_floors[0].current) return;

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

export function addRoomClickListeners(
  container: Element,
  building: CampusBuilding,
  floor: BuildingFloor | undefined,
  mapContext: MapData
) {
  if (building === buildingNames.CAMPUS) {
    const egg1 = container.querySelector(`[id=egg1]`);
    const egg2 = container.querySelector(`[id=egg2]`);
    const egg3 = container.querySelector(`[id=egg3]`);
    const egg4 = container.querySelector(`[id=egg4]`);

    egg1?.addEventListener("click", () => {
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
    });
  }

  container.addEventListener("click", (event) => {
    let targetElement = event.target as HTMLElement;

    if (
      targetElement.parentElement &&
      targetElement.parentElement.id.includes(`${building}-`)
    ) {
      targetElement = targetElement.parentElement;
    }
    if (targetElement && targetElement.id.includes(`${building}-`)) {
      // Check if the clicked element is one of the room elements
      const roomNumber = targetElement.id.split("-").slice(1).join("-");
      mapContext.setCurrent({
        area: building,
        floor: floor,
        room: roomNumber ? roomNumber : undefined
      });
    }
  });
}
