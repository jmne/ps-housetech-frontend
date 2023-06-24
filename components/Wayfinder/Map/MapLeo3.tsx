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
  minimizeBuilding
} from "utils/Wayfinder/mapTransformations";
import { mapTransitionConfig } from "utils/constants";
import { buildingNames } from "types/Campus";

export function MapLeo3() {
  const mapContext = useMapContext();

  useEffect(() => {
    const element_leo3_on_campus = mapContext.leo3_building_on_campus?.current;
    const element_leo3_building = mapContext.leo3_building?.current;
    const element_mapContainer = mapContext.mapContainer?.current;

    if (!element_leo3_on_campus || !element_leo3_building || !element_mapContainer)
      return;

    minimizeBuilding(element_leo3_on_campus, element_leo3_building, element_mapContainer);
  }, []);

  // Handle Change of shown area
  useEffect(() => {
    const areaJustGotInFocus =
      mapContext.current.area === "leo3" && mapContext.previous.area !== "leo3";
    const areaGotOutOfFocus =
      mapContext.current.area !== "leo3" && mapContext.previous.area === "leo3";
    const floorChanged =
      mapContext.current.floor !== mapContext.previous.floor ||
      mapContext.current.area !== mapContext.previous.area;

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

    const animations: (() => Promise<unknown>)[] = [];

    if (areaJustGotInFocus) {
      animations.push(maximizeBuilding.bind(null, element_leo3_building));
    } else if (areaGotOutOfFocus) {
      animations.push(collapseFloorsOfBuilding.bind(null, mapContext.leo3_elements));
      animations.push(
        minimizeBuilding.bind(
          null,
          element_leo3_on_campus,
          element_leo3_building,
          element_mapContainer
        )
      );
    } else if (
      mapContext.current.area !== buildingNames.LEO3 &&
      mapContext.previous.area === buildingNames.LEO3
    ) {
      animations.push(
        minimizeBuilding.bind(
          null,
          element_leo3_on_campus,
          element_leo3_building,
          element_mapContainer
        )
      );
    }

    if (mapContext.current.area === buildingNames.LEO3 && floorChanged)
      animations.push(
        highlightFloor.bind(
          null,
          mapContext.current.floor ? mapContext.current.floor : "floor0",
          mapContext.leo3_elements
        )
      );

    if (animations.length === 0) return;

    const executeAnimations = async (animations: (() => Promise<unknown>)[]) => {
      for (let index = 0; index < animations.length; index++) {
        await animations[index]();
      }
    };
    executeAnimations(animations);
  }, [
    mapContext,
    mapContext.current.area,
    mapContext.current.floor,
    mapContext.leo3_building_on_campus,
    mapContext.leo3_building,
    mapContext.mapContainer,
    mapContext.campus_element
  ]);

  // Handle changing of shown area
  //useEffect(() => {
  //  // If leo3 *just* got moved out of focus -> Collapse floors
  //  if (
  //    mapContext.current.area !== "leo3" &&
  //    mapContext.current.area !== mapContext.previous.area
  //  ) {
  //    collapseFloorsOfBuilding(mapContext.leo3_elements);
  //  }
  //}, [mapContext, mapContext.current.area, mapContext.leo3_elements]);

  return (
    <div className={styles.mapElement} ref={mapContext.leo3_building}>
      <Leo3_Floor0 ref={mapContext.leo3_elements[0]} />
      <Leo3_Floor1 ref={mapContext.leo3_elements[1]} />
      <Leo3_Floor2 ref={mapContext.leo3_elements[2]} />
      <Leo3_Floor3 ref={mapContext.leo3_elements[3]} />
    </div>
  );
}
