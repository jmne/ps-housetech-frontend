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
import Leo11_floor0 from "assets/images/map/floors/leo11-floor-0.svg"
import { BuildingFloor, CampusBuilding } from "types/Campus";
import { useMapContext } from "context/mapContext";

/**
 * Trigger highlighting of a room
 * @param room number of the room
 */
function highlightRoom(room: string | number){
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
 * Move the correct building & floor into focus
 * @param floor 
 * @param building 
 */
function highlightFloor(floor: BuildingFloor, building: CampusBuilding) {

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
    const [current_building, setBuilding] = useState<CampusBuilding>("leo3")
    const [current_floor, setFloor] = useState<BuildingFloor>("floor1")
    const [current_room, setRoom] = useState<string | undefined>(undefined)

    // Trigger animation when selected person changes
    useEffect(() => {
        console.log("Transforming map")

        const r = mapContext.current_room

        // No person selected -> No room to highlight
        if (!r) {
            // If there was a room highlighted -> Remove highlighting, Update state and return
            if (current_room) highlightRoom(current_room)
            setRoom(r)
            return
        }

        // Person was selected
        // If other room was highlighted -> move highlight to other room
        if (current_room) {
            highlightRoom(current_room)
        }

        
        // Highlight and save new room
        highlightRoom(r)
        setRoom(r)

    }, [mapContext.current_room])

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{t(`wayfinder.map.${current_building}`)}</h2>
                <span>{t(`wayfinder.map.${current_floor}`)}</span>
            </div>
            <div className={styles.floorWrapper}>
                <Leo3_floor1 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor1"} />
                <Leo3_floor2 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor2"} />
                <Leo3_floor3 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor3"} />
                <Leo3_floor0 className={styles.floor} width="100%" height="100%" id={"map-leo3-floor0"} />
            </div>
        </div>
    )
}