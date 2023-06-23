import { useEffect, useRef } from "react";
import styles from "./Map.module.scss";
import { Leo11_Floor0 } from "assets/images/map/floors_transformed";
import { useMapContext } from "context/MapContext";
import {
  minimizeBuilding,
  maximizeCampus,
  maximizeBuilding,
  minimizeCampus
} from "utils/Wayfinder/mapTransformations";
import { mapTransitionConfig } from "utils/constants";

export function MapLeo11() {
  const mapContext = useMapContext();

  useEffect(() => {
    const element_leo11_on_campus = mapContext.leo11_building_on_campus?.current;
    const element_leo11_building = mapContext.leo11_building?.current;
    const element_mapContainer = mapContext.mapContainer?.current;
    const element_campus = mapContext.campus_element?.current;
    if (
      !element_leo11_on_campus ||
      !element_leo11_building ||
      !element_mapContainer ||
      !element_campus
    )
      return;

    const areaJustGotInFocus =
      mapContext.current.area === "leo11" && mapContext.previous.area !== "leo11";
    const areaGotOutOfFocus =
      mapContext.current.area !== "leo11" && mapContext.previous.area === "leo11";

    if (areaJustGotInFocus) {
      const timeout_because_leo3_collapse =
        mapContext.previous.area === "leo3" ? mapTransitionConfig.animationDuration : 0;
      setTimeout(() => {
        if (!element_leo11_building) return;
        maximizeBuilding(element_leo11_building);
      }, timeout_because_leo3_collapse);

      if (!mapContext.current.floor || !mapContext.current.room) return;
    } else if (areaGotOutOfFocus) {
      minimizeBuilding(
        element_leo11_on_campus,
        element_leo11_building,
        element_mapContainer
      );
    } else if (mapContext.current.area !== "leo11") {
      minimizeBuilding(
        element_leo11_on_campus,
        element_leo11_building,
        element_mapContainer
      );
    }
  }, [
    mapContext.current,
    mapContext.leo11_building_on_campus,
    mapContext.leo11_building,
    mapContext.leo11_elements,
    mapContext.mapContainer,
    mapContext.campus_element,
    mapContext.current
  ]);

  return (
    <div className={styles.mapElement} ref={mapContext.leo11_building}>
      <Leo11_Floor0 ref={mapContext.leo11_elements[0]} />
    </div>
  );
}
