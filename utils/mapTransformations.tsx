// IMPORTS - BUILTINS
import { RefObject } from "react";
import { BuildingFloor, CampusBuilding } from "types/Campus";
import styles from "@/components/Wayfinder/Map/Map.module.scss";

/**
 * Configuration for map transitions
 */
export const mapTransitionConfig = {
    animationDuration: 500,
    map_x_offset: 5,
    map_y_offset: 15,
    focus_scaling: 1.1,
    not_in_focus_opacity: 0.15
};

/**
 * Get the floor level of a room as BuildingFloor value
 * @param room Number of the room
 * @returns Floor level as BuildingFloor value
 */
export function getFloor(room: string | number): BuildingFloor {
    const n = typeof room === "number" ? room : parseInt(room);

    if (n < 100) return "floor0";
    if (n < 200) return "floor1";
    if (n < 300) return "floor2";
    if (n < 400) return "floor3";
    // base case
    return "floor0";
}

/**
 * Get the floor level of a room as a number
 * @param room Number of the room
 * @returns Floor level as a number
 */
export function getFloorNumber(room: string | number): number {
    const floorString = getFloor(room);
    const n_string = floorString.charAt(5);
    const n = parseInt(n_string);

    return n;
}

/**
 * Check if a room is in the current building
 * CURRENTLY ONLY CONFIGURED TO WORK FOR THE TEST-DATA
 * @param room Room number
 * @param current_building Current building
 * @returns Boolean indicating if the room is in the current building
 */
export function roomInBuilding(room: string, current_building: CampusBuilding): boolean {
    if (room === "017" && current_building === "leo3") return false;
    else if (room === "017" && current_building === "leo11") return true;

    if (current_building === "leo11") return false;
    return true;
}

export type out_of_frame_direction = "left" | "right";

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
 */
export function highlightRoom(room: string | number) {
    // Construct the SVG ID and get the element
    const room_id = `room-${room}`;
    const element = document.getElementById(room_id);
    if (!element) return;

    // Room was selected before, remove highlight
    if (element.classList.contains(styles.highlight)) {
        element.classList.remove(styles.highlight);
    }
    // New selection, highlight room
    else {
        element.classList.add(styles.highlight);
    }
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

        element.style.transform = `scale(${mapTransitionConfig.focus_scaling})`;
        element.style.zIndex = "5";
        element.style.opacity = "100";
        return;
    }

    leo3_floors.forEach((element, index) => {
        const el = element.current;
        if (!el) return;
        // Layer is the target layer, set focus
        if (index === index_new_layer) {
            el.style.transform = `scale(${mapTransitionConfig.focus_scaling})`;
            el.style.zIndex = "5";
            el.style.opacity = "100";
            return;
        }

        // If new layer is higher, diff < 0
        // If new layer is lower, diff > 0
        const diff = index - index_new_layer;
        // Layer is 'under' new layer, push down
        if (diff < 0) {
            el.style.transform = `translateX(${diff * mapTransitionConfig.map_x_offset}%) translateY(${-diff * mapTransitionConfig.map_y_offset}%)`;
            el.style.opacity = `${mapTransitionConfig.not_in_focus_opacity}`;
        }
        // Layer is 'over' new layer, push up
        else {
            el.style.transform = "translateX(40%) translateY(-100%)";
            el.style.opacity = `${mapTransitionConfig.not_in_focus_opacity}`;
        }
    });
}