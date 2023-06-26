import { useEffect } from "react";
import styles from "./Map.module.scss";
import { Leo11_Floor0 } from "assets/images/map/floors_transformed";
import { useMapContext } from "context/MapContext";
import { minimizeBuilding, maximizeBuilding } from "utils/Wayfinder/mapTransformations";
import { mapTransitionConfig } from "utils/constants";
import { buildingNames } from "types/Campus";

export function MapLeo11() {
  const mapContext = useMapContext();

  useEffect(() => {
    const element_leo11_on_campus = mapContext.leo11_building_on_campus?.current;
    const element_leo11_building = mapContext.leo11_building?.current;
    const element_mapContainer = mapContext.mapContainer?.current;

    if (!element_leo11_on_campus || !element_leo11_building || !element_mapContainer)
      return;

    minimizeBuilding(
      element_leo11_on_campus,
      element_leo11_building,
      element_mapContainer
    );
  }, []);

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
      mapContext.current.area === buildingNames.LEO11 &&
      mapContext.previous.area !== buildingNames.LEO11;
    const areaGotOutOfFocus =
      mapContext.current.area !== buildingNames.LEO11 &&
      mapContext.previous.area === buildingNames.LEO11;

    const animations: (() => Promise<unknown>)[] = [];

    if (areaJustGotInFocus) {
      const timeout_because_leo3_collapse =
        mapContext.previous.area === buildingNames.LEO3
          ? mapTransitionConfig.animationDuration
          : 0;
      animations.push(maximizeBuilding.bind(null, element_leo11_building));
    } else if (areaGotOutOfFocus) {
      animations.push(
        minimizeBuilding.bind(
          null,
          element_leo11_on_campus,
          element_leo11_building,
          element_mapContainer
        )
      );
    } else if (
      mapContext.current.area !== buildingNames.LEO11 &&
      mapContext.previous.area === buildingNames.LEO11
    ) {
      animations.push(
        minimizeBuilding.bind(
          null,
          element_leo11_on_campus,
          element_leo11_building,
          element_mapContainer
        )
      );
    }

    const executeAnimations = async (animations: (() => Promise<unknown>)[]) => {
      for (let index = 0; index < animations.length; index++) {
        await animations[index]();
      }
    };

    
    executeAnimations(animations);
  }, [
    mapContext,
    mapContext.current.area,
    mapContext.leo11_building_on_campus,
    mapContext.leo11_building,
    mapContext.mapContainer,
    mapContext.campus_element
  ]);

  return (
    <div className={styles.mapElement} ref={mapContext.leo11_building} id ={buildingNames.LEO3}>
      <Leo11_Floor0 ref={mapContext.leo11_elements[0]} />
    </div>
  );
}
