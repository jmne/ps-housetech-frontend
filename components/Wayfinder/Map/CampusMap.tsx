import { useTranslation } from "next-i18next";
import { useState, useEffect, useContext } from "react";


import styles from "@/components/Wayfinder/Map/Map.module.scss"

// IMPORTS - MAPS
//
// To make this work -> Remove with/height properties from svg
import Leo3_floor0 from "assets/images/map/floors_transformed/leo3-floor_0"
import Leo3_floor1 from "assets/images/map/floors_transformed/leo3-floor_1"
import Leo3_floor2 from "assets/images/map/floors_transformed/leo3-floor_2"
import Leo3_floor3 from "assets/images/map/floors_transformed/leo3-floor_3"
import Leo11_floor0 from "assets/images/map/floors_transformed/leo11-floor0"
import { BuildingFloor, CampusBuilding } from "types/Campus";
import { useMapContext } from "context/mapContext";
import { useTimeout } from "usehooks-ts";

const animationDuration = 500;
const map_x_offset = 5;
const map_y_offset = 15;
const focus_scaling = 1.1;
const not_in_focus_opacity = 0.15;

/**
 * Get the Floor level of a room as BuildingFloor value
 * @param room number of the room
 */
function getFloor(room: string | number): BuildingFloor {
    let n = room
    if (typeof room !== "number") { let n = parseInt(room) }

    // Why ts-ignore? -> If room is given as string, it is parsed and n is overwritten as integer
    // @ts-ignore
    if (n < 100) return "floor0"
    // @ts-ignore
    if (n < 200) return "floor1"
    // @ts-ignore
    if (n < 300) return "floor2"
    // @ts-ignore
    if (n < 400) return "floor3"
    // base case
    return "floor0"
}

/**
 * Get the Floor level of a room as Number
 * @param room number of the room
 */
function getFloorNumber(room: string | number): number {
    const floorString = getFloor(room)
    const n_string = floorString.charAt(5)
    const n = parseInt(n_string)

    return (n)
}

/**
 * Check if a room is in the current building  -> Currently only configured to work for the test-data
 * @param room
 * @param building
 */
function roomInBuilding(room: string, building: CampusBuilding) {
    if (room === "017" && building === "leo3") return false
    if (building === "leo11") return false

    if (building === "leo3") return true
    else return false
}

type out_of_frame_direction = "left" | "right"
function moveBuilding(old_floors: HTMLElement[], new_floors: HTMLElement[], out_dir: out_of_frame_direction) {
    const floor_move_out = (out_dir === "left") ? "translateX(-200%)" : "translateX(100%)"

    // 'Collapse' old floors
    old_floors.forEach((e) => {
        e.style.transform = ""
        e.style.opacity = `${not_in_focus_opacity}`
    })

    setTimeout(() => {
        // Push old floors out of frame
        old_floors.forEach((e) => {
            console.log(`move ${e.id} out of frame`)
            e.style.transform = floor_move_out
            e.style.opacity = `${not_in_focus_opacity}`
        })

        // Move new floors into frame
        new_floors.forEach((e) => {
            console.log(`move ${e.id} into frame`)
            e.style.transform = ""
            e.style.opacity = "100"
        })
    }, animationDuration)
}

/**
 * Trigger highlighting of a room
 * @param room number of the room
 */
function highlightRoom(room: string | number) {
    // construct the svg-id and get the element
    const room_id = `room-${room}`
    const element = document.getElementById(room_id)
    if (!(element)) return

    // Room was selected before -> Remove highlight
    if (element.classList.contains(styles.highlight)) {
        element.classList.remove(styles.highlight)
    }
    // New selection -> Highlight room
    else {
        element.classList.add(styles.highlight)
    }
}

/**
 * Move the correct floor into focus
 * @param floor 
 * @param building 
 * @param leo3_floors
 */
function highlightFloor(new_floor: BuildingFloor, building: CampusBuilding, leo3_floors: HTMLElement[], leo11_floor: HTMLElement) {
    const floor_nr = new_floor.charAt(5)
    const index_new_layer = parseInt(floor_nr)

    console.log("Highlight ", new_floor, " in ", building)

    if (building === "leo11" && new_floor === "floor0") {
        leo11_floor.style.transform = `scale(${focus_scaling})`
        leo11_floor.style.zIndex = "5";
        leo11_floor.style.opacity = "100";
        return
    }

    leo3_floors.forEach((element, index) => {
        // Layer is the target layer -> Set focus
        if (index === index_new_layer) {
            element.style.transform = `scale(${focus_scaling})`
            element.style.zIndex = "5";
            element.style.opacity = "100";
            return
        }

        // If new layer is higher -> diff < 0
        // If new layer is lower ->  diff > 0
        const diff = index - index_new_layer
        // Layer is 'under' new layer -> Push down
        if (diff < 0) {
            element.style.transform = `translateX(${diff * map_x_offset}%) translateY(${-diff * map_y_offset}%)`
            element.style.opacity = `${not_in_focus_opacity}`
        }
        // Layer is 'over' new layer -> Push up
        else {
            element.style.transform = "translateX(40%) translateY(-100%)"
            element.style.opacity = `${not_in_focus_opacity}`
        }

    });
}

const floors_leo3 = [
    "map-leo3-floor0",
    "map-leo3-floor1",
    "map-leo3-floor2",
    "map-leo3-floor3"]

const floors_leo11 = [
    "map-leo11-floor0"
]

export function CampusMap() {
    const { t } = useTranslation("index");
    const mapContext = useMapContext()

    // Track which map is in focus & last room in focus
    const [componentRendered, setRendered] = useState(false)
    const [current_building, setBuilding] = useState<CampusBuilding>("leo3")
    const [current_floor, setFloor] = useState<BuildingFloor>("floor0")
    const [current_room, setRoom] = useState<string | undefined>(undefined)

    // Save elements of the layers
    const [leo3_elements, set_leo3_elements] = useState<HTMLElement[]>([])
    const [leo11_elements, set_leo11_elements] = useState<HTMLElement[]>([])

    // Run when component renders
    // -> Get layer elements
    // -> Set focus on Floor 0 of Leo 3
    useEffect(() => {
        if (componentRendered) return
        console.log("rerender triggered")

        floors_leo3.forEach((id) => {
            const element = document.getElementById(id)
            if (element && !(leo3_elements.includes(element))) leo3_elements.push(element)
        })
        floors_leo11.forEach((id) => {
            const element = document.getElementById(id)
            if (element && !(leo11_elements.includes(element))) leo11_elements.push(element)
        })

        moveBuilding(leo11_elements, leo3_elements, "left")
        setTimeout(() => {
            highlightFloor(current_floor, current_building, leo3_elements, leo11_elements[0])
            setRendered(true)
        }, animationDuration)
    })

    // Trigger animation when selected person changes
    useEffect(() => {
        const r = mapContext.current_room
        const b = mapContext.current_building

        // No person selected -> No room to highlight
        if (!r) {
            // If there was a room highlighted -> Remove highlighting, Update state and return
            if (current_room) highlightRoom(current_room)
            setRoom(r)
            return
        }

        // New person was selected
        // Remove highlighting on old room
        if (current_room) {
            highlightRoom(current_room)
        }

        // Highlight the new room
        manageNewHighlight(r, b)
    }, [mapContext.current_room])

    /**
     * Highlight **new** room
     * If needed: Move to other building
     * If needed: Move to other floor
     * @param room room to be highlighted
     */
    function manageNewHighlight(room: string, b: CampusBuilding) {
        const already_in_correct_building = roomInBuilding(room, current_building)
        const wait_for_building_switch = already_in_correct_building ? 0 : (animationDuration * 2)

        let buildingMoved = false

        // If needed -> Move building into frame
        if (!already_in_correct_building) {
            // Case: move to Leo 3
            if (current_building === "leo11") {
                console.log("Move to leo 3")
                moveBuilding(leo11_elements, leo3_elements, "left")
                setBuilding("leo3")
            }
            // Case: move to Leo 11
            else {
                console.log("Move to leo 11")
                moveBuilding(leo3_elements, leo11_elements, "right")
                setBuilding("leo11")
            }
            buildingMoved = true
        }

        const floor_of_room = getFloor(room)
        const already_on_correct_floor = (floor_of_room == current_floor)
        const wait_for_floor_switch = already_on_correct_floor ? 0 : animationDuration

        // If needed -> Move floor into focus
        // -> Optionally wait for building switch first
        setTimeout(() => {
            if (!already_on_correct_floor || buildingMoved) {
                console.log("Move to ", floor_of_room)
                highlightFloor(floor_of_room, b, leo3_elements, leo11_elements[0])
                setFloor(floor_of_room)
            }
        }, wait_for_building_switch)

        setTimeout(() => {
            highlightRoom(room)
            setRoom(room)
        }, (wait_for_building_switch + wait_for_floor_switch))
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{t(`wayfinder.map.${current_building}`)}</h2>
                <span>{t(`wayfinder.map.${current_floor}`)}</span>
            </div>
            <div className={styles.floorWrapper}>
                <Leo3_floor0 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor0"} />
                <Leo3_floor1 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor1"} />
                <Leo3_floor2 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor2"} />
                <Leo3_floor3 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor3"} />
                <Leo11_floor0 className={styles.floor} width="100%" height="100%" id={"map-leo11-floor0"} />
            </div>
        </div>
    )
}