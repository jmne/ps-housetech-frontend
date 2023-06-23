// IMPORTS - BUILTINS
import { RefObject } from "react";
import { BuildingFloor, CampusBuilding } from "types/Campus";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { mapTransitionConfig, out_of_frame_direction } from "utils/constants";

const getFloorStyleFromOffset = [
  styles.floor__1below,
  styles.floor__2below,
  styles.floor__3below,
  styles.floor__4below
];

export function minimizeBuilding(
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

  building.style.transform = `translateX(${building_offset_x}px) translateY(${building_offset_y}px) scale(0)`;
}

export function maximizeBuilding(building: HTMLDivElement) {
  building.style.transform = "";
}

export function minimizeCampus(campus: SVGSVGElement) {
  campus.style.opacity = "0";
}

export function maximizeCampus(campus: SVGSVGElement) {
  campus.style.opacity = "1";
}

/**
 * Trigger highlighting of a room
 * @param room Number of the room
 * @param building id of the building: 'leo3' or 'leo11'
 */
export function setRoomHighlight(
  room: string | number,
  building: CampusBuilding,
  highlight: boolean,
  floor?: string
) {
  // Construct the SVG ID and get the element(s)
  // if e.g. wc is given, multiple elements are existing and floor is needed
  const room_id = floor ? `${building}-${room}` : `${building}-${room}`;
  const room_elements = document.querySelectorAll(`#${room_id}`);
  if (!room_elements || room_elements.length === 0) return;

  if (highlight === true) addRoomHighlight(room_elements);
  else removeRoomHighlight(room_elements);
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

export function highlightFloor(
  floor_to_highlight: BuildingFloor,
  building_floors: RefObject<SVGSVGElement>[]
) {
  const floor_nr = floor_to_highlight.charAt(5);
  const index_new_layer = parseInt(floor_nr);

  building_floors.forEach((element, index) => {
    const el = element.current;
    if (!el) return;
    // Layer is the target layer, set focus
    if (index === index_new_layer) {
      setFloorInFocus(el);
      return;
    }

    // If new layer is higher, diff < 0
    // If new layer is lower, diff > 0
    const diff = index - index_new_layer;
    setFloorOutOfFocus(el, diff);
  });
}

export function collapseFloorsOfBuilding(
  building_floors: RefObject<SVGSVGElement>[]
){
  building_floors.forEach((floor) => {
    const element = floor.current
    if (!element) return
    element.classList.value = ""
  })
}

function setFloorInFocus(element: SVGSVGElement) {
  element.classList.value = styles.floor__focus;
}

function setFloorOutOfFocus(element: SVGSVGElement, offset: number) {
  // Layer is 'under' new layer, push down
  if (offset < 0) {
    const offset_value = Math.abs(offset);
    if (1 <= offset_value && offset_value <= getFloorStyleFromOffset.length)
      element.classList.value = getFloorStyleFromOffset[offset_value - 1];
  }
  // Layer is 'over' new layer, push up
  else {
    element.classList.value = styles.floor__above;
  }
}
