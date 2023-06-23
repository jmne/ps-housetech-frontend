import { useEffect } from "react";
import styles from "./Map.module.scss";
import {
  Leo3_Floor0,
  Leo3_Floor1,
  Leo3_Floor2,
  Leo3_Floor3
} from "assets/images/map/floors_transformed";
import { useMapContext } from "context/MapContext";
import {
  collapseFloorsOfBuilding,
  highlightFloor,
  maximizeBuilding,
  minimizeBuilding,
  setRoomHighlight
} from "utils/Wayfinder/mapTransformations";
import { mapTransitionConfig } from "utils/constants";

export function MapLeo3() {
  const mapContext = useMapContext();

  useEffect(() => {
    const element_leo3_on_campus = mapContext.leo3_building_on_campus?.current;
    const element_leo3_building = mapContext.leo3_building?.current;
    const element_mapContainer = mapContext.mapContainer?.current;
  }, []);

  // Handle Change of shown area
  useEffect(() => {
    const areaJustGotInFocus =
      mapContext.current.area === "leo3" && mapContext.previous.area !== "leo3";
    const areaGotOutOfFocus =
      mapContext.current.area !== "leo3" && mapContext.previous.area === "leo3";
    const areaStayedInFocus =
      mapContext.current.area === "leo3" && mapContext.previous.area === "leo3";
    const floorChanged =
      (mapContext.current.floor !== mapContext.previous.floor || mapContext.current.area !== mapContext.previous.area) && mapContext.current.floor;
    const roomChanged = mapContext.current.room !== mapContext.previous.room;

    const element_leo3_on_campus = mapContext.leo3_building_on_campus?.current;
    const element_leo3_building = mapContext.leo3_building?.current;
    const element_mapContainer = mapContext.mapContainer?.current;
    const element_campus = mapContext.campus_element?.current;

    if (
      !element_leo3_on_campus ||
      !element_leo3_building ||
      !element_mapContainer ||
      !element_campus
    )
      return;

    const timeout_because_focusOnBuilding = areaJustGotInFocus
      ? mapTransitionConfig.animationDuration
      : 0;
    const timeout_for_room = floorChanged
      ? timeout_because_focusOnBuilding + mapTransitionConfig.animationDuration
      : timeout_because_focusOnBuilding;

    if (areaJustGotInFocus) {
      maximizeBuilding(element_leo3_building);
    } else if (areaGotOutOfFocus) {
      collapseFloorsOfBuilding(mapContext.leo3_elements);

      setTimeout(() => {
        minimizeBuilding(
          element_leo3_on_campus,
          element_leo3_building,
          element_mapContainer
        );
      }, mapTransitionConfig.animationDuration);
    } else if (mapContext.current.area !== "leo3") {
      minimizeBuilding(
        element_leo3_on_campus,
        element_leo3_building,
        element_mapContainer
      );
    }
    if (mapContext.current.area !== "leo3") return;

    if (floorChanged)
      setTimeout(() => {
        if (!mapContext.current.floor) return;
        highlightFloor(mapContext.current.floor, mapContext.leo3_elements);
      }, timeout_because_focusOnBuilding);
  }, [
    mapContext.current,
    mapContext.leo3_building_on_campus,
    mapContext.leo3_building,
    mapContext.mapContainer,
    mapContext.campus_element
  ]);

  // Handle changing of shown area
  useEffect(() => {
    // If leo3 *just* got moved out of focus -> Collapse floors
    if (
      mapContext.current.area !== "leo3" &&
      mapContext.current.area !== mapContext.previous.area
    ) {
      collapseFloorsOfBuilding(mapContext.leo3_elements);
    }
  }, [mapContext.current.area]);

  return (
    <div className={styles.mapElement} ref={mapContext.leo3_building}>
      <Leo3_Floor0 ref={mapContext.leo3_elements[0]} />
      <Leo3_Floor1 ref={mapContext.leo3_elements[1]} />
      <Leo3_Floor2 ref={mapContext.leo3_elements[2]} />
      <Leo3_Floor3 ref={mapContext.leo3_elements[3]} />
    </div>
  );
}
