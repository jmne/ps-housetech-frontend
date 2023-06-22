// IMPORTS - REACT
import { useState, useEffect, useRef, useCallback } from "react";

// IMPORTS - NEXTJS
import { useTranslation } from "next-i18next";

// IMPORTS - TYPES
import { BuildingFloor, CampusBuilding, buildingNames } from "types/Campus";

// IMPORTS - CONTEXT
import { useMapContext } from "context/MapContext";

// IMPORTS - UTIL_FUNCTIONS
import {
  highlightFloor,
  setRoomHighlight,
  moveBuilding
} from "utils/Wayfinder/mapTransformations";
import { animate_to, mapTransitionConfig } from "utils/constants";

// IMPORTS - ASSETS
// SVG
import {
  Leo11_Floor0,
  Leo3_Floor0,
  Leo3_Floor1,
  Leo3_Floor2,
  Leo3_Floor3
} from "assets/images/map/floors_transformed";
// CSS
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { roomInBuilding, getFloor } from "utils/Wayfinder/mapValidations";

export function CampusMap() {
  const { t } = useTranslation("index");
  const mapContext = useMapContext();

  // Track which map is in focus & last room in focus
  const [current_building, setBuilding] = useState<CampusBuilding>(buildingNames.LEO3);
  const [current_floor, setFloor] = useState<BuildingFloor>("floor0");
  const [current_room, setRoom] = useState<string | undefined>(undefined);

  // Save elements of the layers
  // Initialize Refs directly in array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const leo3_elements = [
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null),
    useRef<SVGSVGElement>(null)
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const leo11_elements = [useRef<SVGSVGElement>(null)];

  // This effect runs only once after the initial render. It sets up the initial state of the map.
  useEffect(() => {
    moveBuilding(leo11_elements, leo3_elements, "left");

    setTimeout(() => {
      highlightFloor(current_floor, current_building, leo3_elements, leo11_elements[0]);
    }, mapTransitionConfig.animationDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This effect is triggered whenever mapContext.current_room changes. It manages highlighting the new room and making necessary adjustments.
  useEffect(() => {
    const { current_room: contextRoom, current_building: contextBuilding } = mapContext;
    console.log(`New selection: ${contextRoom} in ${contextBuilding}`);

    // Remove old highlight
    if (typeof current_room !== "undefined")
      setRoomHighlight(current_room, current_building, false);

    // update internal states
    setRoom(contextRoom);
    if (typeof contextBuilding !== "undefined") setBuilding(contextBuilding);

    // Set new highlight
    if (typeof contextRoom !== "undefined" && typeof contextBuilding !== "undefined") {
      manageNewHighlight(contextRoom, contextBuilding);
    }
  }, [mapContext.current_room, mapContext.current_building]);

  /**
   * Highlight the **new** room
   * If needed: Move to another building
   * If needed: Move to another floor
   * @param room The room to be highlighted
   * @param b The building to which the room belongs
   */
  const manageNewHighlight = useCallback(
    (room: string, b: CampusBuilding) => {
      const already_in_correct_building = roomInBuilding(b, current_building);
      const wait_for_building_switch = already_in_correct_building
        ? 0
        : mapTransitionConfig.animationDuration * 2;

      let buildingMoved = false;

      // If needed -> Move building into frame
      if (!already_in_correct_building) {
        const [from_elements, to_elements, to_Building, animation_out_direction] =
          current_building === buildingNames.LEO11
            ? [leo11_elements, leo3_elements, buildingNames.LEO3, animate_to.LEO3]
            : [leo3_elements, leo11_elements, buildingNames.LEO11, animate_to.LEO11];

        moveBuilding(from_elements, to_elements, animation_out_direction);
        setBuilding(to_Building);

        buildingMoved = true;
      }

      const floor_of_room = getFloor(room);
      const already_on_correct_floor = floor_of_room === current_floor;
      const wait_for_floor_switch = already_on_correct_floor
        ? 0
        : mapTransitionConfig.animationDuration;

      // If needed -> Move floor into focus
      // -> Optionally wait for building switch first
      setTimeout(() => {
        if (!already_on_correct_floor || buildingMoved) {
          highlightFloor(floor_of_room, b, leo3_elements, leo11_elements[0]);
          setFloor(floor_of_room);
        }

        setTimeout(() => {
          setRoomHighlight(room, b, true);
          setRoom(room);
        }, wait_for_floor_switch);
      }, wait_for_building_switch);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [current_building, current_floor, leo3_elements, leo11_elements]
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{t(`wayfinder.map.${current_building}`)}</h2>
        <span>{t(`wayfinder.map.${current_floor}`)}</span>
      </div>
      <div className={styles.floorWrapper}>
        <Leo3_Floor0
          className={styles.floor}
          id={"map-leo3-floor0"}
          ref={leo3_elements[0]}
        />
        <Leo3_Floor1
          className={styles.floor}
          id={"map-leo3-floor1"}
          ref={leo3_elements[1]}
        />
        <Leo3_Floor2
          className={styles.floor}
          id={"map-leo3-floor2"}
          ref={leo3_elements[2]}
        />
        <Leo3_Floor3
          className={styles.floor}
          id={"map-leo3-floor3"}
          ref={leo3_elements[3]}
        />
        <Leo11_Floor0
          className={styles.floor}
          id={"map-leo11-floor0"}
          ref={leo11_elements[0]}
        />
      </div>
    </div>
  );
}
