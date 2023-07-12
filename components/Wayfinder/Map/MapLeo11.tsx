import { memo, useEffect } from "react";
import styles from "./Map.module.scss";
import { Leo11_Floor0 } from "assets/images/map/floors_transformed";
import { useMapContext } from "context/MapContext";
import {
  minimizeBuilding,
  maximizeBuilding,
  addRoomClickListeners
} from "utils/Wayfinder/mapTransformations";
import { BuildingFloor, buildingNames } from "types/Campus";
import { useMapElements } from "context/MapElements";

const MapLeo11 = memo(() => {
  const mapContext = useMapContext();
  const mapElements = useMapElements();

  useEffect(() => {
    mapElements.leo11_elements.forEach((element) => {
      const container = element.current;
      const floor: BuildingFloor = "floor0";
      if (!container) return;
      addRoomClickListeners(container, buildingNames.LEO11, floor, mapContext);
    });

    requestAnimationFrame(() => {
      const element_leo11_on_campus = mapElements.leo11_building_on_campus?.current;
      const element_leo11_building = mapElements.leo11_building?.current;
      const element_mapContainer = mapElements.mapContainer?.current;

      if (
        !element_leo11_on_campus ||
        !element_leo11_building ||
        !element_mapContainer ||
        mapContext.current.area === buildingNames.LEO11
      )
        return;

      minimizeBuilding(
        element_leo11_on_campus,
        element_leo11_building,
        element_mapContainer
      );
    });
    //@ts-ignore
  }, []);

  useEffect(() => {
    const element_leo11_on_campus = mapElements.leo11_building_on_campus?.current;
    const element_leo11_building = mapElements.leo11_building?.current;
    const element_mapContainer = mapElements.mapContainer?.current;
    const element_campus = mapElements.campus_element?.current;
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
    mapElements.leo11_building_on_campus,
    mapElements.leo11_building,
    mapElements.mapContainer,
    mapElements.campus_element
  ]);

  return (
    <div
      className={styles.mapElement}
      ref={mapElements.leo11_building}
      id={buildingNames.LEO3}
    >
      <Leo11_Floor0 />
    </div>
  );
});

MapLeo11.displayName = "Leo-11 Map";
export default MapLeo11;
