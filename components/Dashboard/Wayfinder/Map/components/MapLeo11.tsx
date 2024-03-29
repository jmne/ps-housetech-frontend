import React, { memo, useEffect, useMemo } from "react";
import styles from "@/components/Dashboard/Wayfinder/Map/Map.module.scss";
import { Leo11_Floor0 } from "assets/map/floors_transformed";
import { useMapContext } from "context/MapContext";
import {
  buildingClickHandler,
  maximizeBuilding,
  minimizeBuilding
} from "utils/wayfinderAnimation/mapTransformations";
import { buildingNames } from "types/Campus";
import { useMapElements } from "context/MapElements";
import { AnimationQueue } from "utils/wayfinderAnimation/AnimationQueue";
import { usePersonSearchContext } from "context/PersonContext";

const MapLeo11 = memo(({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const mapContext = useMapContext();
  const mapElements = useMapElements();
  const personContext = usePersonSearchContext();
  const animationQueue = useMemo(() => new AnimationQueue(), []);

  useEffect(() => {
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
  }, [
    mapContext,
    mapElements.leo11_building,
    mapElements.leo11_building_on_campus,
    mapElements.mapContainer
  ]);

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

    if (animations.length > 0) animationQueue.enqueue(animations);
  }, [
    mapContext,
    mapContext.current.area,
    mapElements.leo11_building_on_campus,
    mapElements.leo11_building,
    mapElements.mapContainer,
    mapElements.campus_element,
    animationQueue
  ]);

  return (
    <div
      className={styles.mapElement}
      ref={mapElements.leo11_building}
      id={buildingNames.LEO3}
      {...props}
    >
      <Leo11_Floor0
        onClick={(e) =>
          buildingClickHandler(
            e,
            buildingNames.LEO11,
            "floor0",
            mapContext.setCurrent,
            personContext
          )
        }
      />
    </div>
  );
});

MapLeo11.displayName = "Leo-11 Map";
export default MapLeo11;
