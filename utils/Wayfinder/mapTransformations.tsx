// IMPORTS - BUILTINS
import { RefObject } from "react";
import { BuildingFloor, CampusBuilding } from "types/Campus";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { mapTransitionConfig, out_of_frame_direction } from "utils/constants";
import { Employee } from "types/Employee";
import { getAddressID, validateRoomNumber } from "./mapValidations";
import { MapData } from "context/MapContext";
import { PersonData } from "context/PersonContext";

/**
 * Move the building from old floors to new floors
 * @param old_floors Old floors
 * @param new_floors New floors
 * @param out_dir Direction of moving out of frame ("left" or "right")
 */
export function moveBuilding(
  old_floors: RefObject<SVGSVGElement>[],
  new_floors: RefObject<SVGSVGElement>[],
  out_dir: out_of_frame_direction
) {
  const floor_move_out = out_dir === "left" ? "translateX(-200%)" : "translateX(100%)";

  // 'Collapse' old floors
  old_floors.forEach((e) => {
    const element = e.current;
    if (!element) return;

    element.style.transform = "";
    element.style.opacity = `${mapTransitionConfig.not_in_focus_opacity}`;
  });

  setTimeout(() => {
    // Push old floors out of frame
    old_floors.forEach((e) => {
      const element = e.current;
      if (!element) return;

      element.style.transform = floor_move_out;
      element.style.opacity = `${mapTransitionConfig.not_in_focus_opacity}`;
    });

    // Move new floors into frame
    new_floors.forEach((e) => {
      const element = e.current;
      if (!element) return;

      element.style.transform = "";
      element.style.opacity = "100";
    });
  }, mapTransitionConfig.animationDuration);
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
  const room_id = floor ? `${building}-${room}${floor}` : `${building}-${room}`;
  const room_elements = document.querySelectorAll(`#${room_id}`);
  if (!room_elements || room_elements.length === 0) return;

  // Room was selected before, remove highlight
  if (highlight === true) addRoomHighlight(room_elements);
  // New selection, highlight room
  else removeRoomHighlight(room_elements);
}

function addRoomHighlight(elements: NodeListOf<Element>) {
  elements.forEach((e) => {
    const classes = e.classList;
    if (!classes.contains(styles.highlight)) classes.add(styles.highlight);
  });
}

function removeRoomHighlight(elements: NodeListOf<Element>) {
  elements.forEach((e) => {
    const classes = e.classList;
    if (classes.contains(styles.highlight)) classes.remove(styles.highlight);
  });
}

/**
 * Move the correct floor into focus
 * @param new_floor New floor to be highlighted
 * @param building Current building
 * @param leo3_floors Refs to Leo3 floors
 * @param leo11_floor Ref to Leo11 floor
 */
export function highlightFloor(
  new_floor: BuildingFloor,
  building: CampusBuilding,
  leo3_floors: RefObject<SVGSVGElement>[],
  leo11_floor: RefObject<SVGSVGElement>
) {
  const floor_nr = new_floor.charAt(5);
  const index_new_layer = parseInt(floor_nr);

  if (building === "leo11" && new_floor === "floor0") {
    const element = leo11_floor.current;
    if (!element) return;

    applyHighlightOnFloor(element);
    return;
  }

  leo3_floors.forEach((element, index) => {
    const el = element.current;
    if (!el) return;
    // Layer is the target layer, set focus
    if (index === index_new_layer) {
      applyHighlightOnFloor(el);
      return;
    }

    // If new layer is higher, diff < 0
    // If new layer is lower, diff > 0
    const diff = index - index_new_layer;
    removeHighlightFromFloor(el, diff);
  });
}
function applyHighlightOnFloor(element: SVGSVGElement) {
  element.style.transform = `scale(${mapTransitionConfig.focus_scaling})`;
  element.style.zIndex = "5";
  element.style.opacity = "100";
}

function removeHighlightFromFloor(element: SVGSVGElement, offset: number) {
  // Layer is 'under' new layer, push down
  if (offset < 0) {
    element.style.transform = `translateX(${
      offset * mapTransitionConfig.map_x_offset
    }%) translateY(${-offset * mapTransitionConfig.map_y_offset}%)`;
    element.style.opacity = `${
      mapTransitionConfig.not_in_focus_opacity / Math.abs(offset * 2)
    }`;
    element.style.zIndex = "4";
  }
  // Layer is 'over' new layer, push up
  else {
    element.style.transform = "translateX(40%) translateY(-100%)";
    element.style.opacity = `${mapTransitionConfig.not_in_focus_opacity}`;
    element.style.zIndex = "6";
  }
}

export function handleClickOnPerson(
  person: Employee,
  mapContext: MapData,
  selectedPersonContext: PersonData
) {
  const previous_selection = {
    person: selectedPersonContext.current_person,
    building: mapContext.current_building,
    room: mapContext.current_room
  };

  const clicked = {
    person: person,
    building: person.address ? getAddressID(person.address) : undefined,
    room: person.roomNumber ? validateRoomNumber(person.roomNumber) : undefined
  };

  // Same person clicked -> remove from context
  if (previous_selection.person === clicked.person) {
    selectedPersonContext.setPerson(undefined);
    mapContext.setBuilding(undefined);
    mapContext.setRoom(undefined);
    return;
  }
  // Other Person selected -> set context value
  selectedPersonContext.setPerson(clicked.person)
  mapContext.setBuilding(clicked.building)
  mapContext.setRoom(clicked.room)
}