import { useEffect, useState } from "react";
import styles from "./Map.module.scss";
import {
  Leo3_Floor0,
  Leo3_Floor1,
  Leo3_Floor2,
  Leo3_Floor3
} from "assets/images/map/floors_transformed";
import { MapData, useMapContext } from "context/MapContext";
import {
  addRoomClickListeners,
  collapseFloorsOfBuilding,
  highlightFloor,
  maximizeBuilding,
  minimizeBuilding
} from "utils/Wayfinder/mapTransformations";
import { buildingNames } from "types/Campus";
import { getFloorFromIndex, getFloorIndex } from "utils/Wayfinder/mapValidations";
import { PersonData, usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";
import ArrowUp from "assets/images/icon_arrow_up.svg";
import ArrowDown from "assets/images/icon_arrow_down.svg";

function handleTouchEnd(
  touchStart: number | undefined,
  touchEnd: number,
  mapContext: MapData,
  personContext: PersonData
) {
  if (
    mapContext.current.area !== "leo3" ||
    typeof mapContext.current.floor === "undefined" ||
    typeof touchStart === "undefined"
  )
    return;

  if (typeof touchStart !== "number") return;
  const swipeDistance = touchStart - touchEnd;
  const goUp = swipeDistance < 0;
  const swipeThreshhold = Math.abs(touchStart - touchEnd) > 50;

  if (!swipeThreshhold) return;

  if (goUp) {
    floorUp(mapContext, personContext);
    return;
  } else {
    floorDown(mapContext, personContext);
    return;
  }
}

function floorUp(mapContext: MapData, personContext: PersonData) {
  if (!mapContext.current.floor) return;
  const nextFloorIndex = getFloorIndex(mapContext.current.floor) + 1;
  if (nextFloorIndex > 3) return;
  if (personContext.current_person) {
    handleExpansion(personContext.current_person, false);
    personContext.setPerson(undefined);
  }
  mapContext.setCurrent({ room: undefined, floor: `floor${nextFloorIndex}` });
}

function floorDown(mapContext: MapData, personContext: PersonData) {
  if (!mapContext.current.floor) return;
  const nextFloorIndex = getFloorIndex(mapContext.current.floor) - 1;
  if (nextFloorIndex < 0) return;
  if (personContext.current_person) {
    handleExpansion(personContext.current_person, false);
    personContext.setPerson(undefined);
  }
  mapContext.setCurrent({ room: undefined, floor: `floor${nextFloorIndex}` });
}

export function MapLeo3() {
  const mapContext = useMapContext();
  const personContext = usePersonSearchContext();
  const [touchStart, setTouchStart] = useState<number | undefined>();

  useEffect(() => {
    mapContext.leo3_elements.forEach((element, index) => {
      const container = element.current;
      const floor = getFloorFromIndex(index);
      if (!container) return;
      addRoomClickListeners(container, buildingNames.LEO3, floor, mapContext);
    });

    requestAnimationFrame(() => {
      const element_leo3_on_campus = mapContext.leo3_building_on_campus?.current;
      const element_leo3_building = mapContext.leo3_building?.current;
      const element_mapContainer = mapContext.mapContainer?.current;

      if (
        !element_leo3_on_campus ||
        !element_leo3_building ||
        !element_mapContainer ||
        mapContext.current.area === buildingNames.LEO3
      )
        return;

      minimizeBuilding(
        element_leo3_on_campus,
        element_leo3_building,
        element_mapContainer
      );
    });
  }, []);

  // Handle Change of shown area
  useEffect(() => {
    requestAnimationFrame(() => {
      const areaJustGotInFocus =
        mapContext.current.area === buildingNames.LEO3 &&
        mapContext.previous.area !== buildingNames.LEO3;
      const areaGotOutOfFocus =
        mapContext.current.area !== buildingNames.LEO3 &&
        mapContext.previous.area === buildingNames.LEO3;
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
    });
  }, [
    mapContext,
    mapContext.current.area,
    mapContext.current.floor,
    mapContext.leo3_building_on_campus,
    mapContext.leo3_building,
    mapContext.mapContainer,
    mapContext.campus_element
  ]);

  return (
    <div
      className={[styles.mapElement, styles.leo3Wrapper].join(" ")}
      ref={mapContext.leo3_building}
      onMouseDown={(e) => {
        setTouchStart(e.pageY);
      }}
      onMouseUp={(e) => {
        handleTouchEnd(touchStart, e.pageY, mapContext, personContext);
      }}
    >
      {mapContext.current.floor !== "floor3" && (
        <button
          className={[styles.floorNavigationButton, styles.up].join(" ")}
          onMouseDown={() => floorUp(mapContext, personContext)}
        >
          <ArrowUp />
        </button>
      )}
      {mapContext.current.floor !== "floor0" && (
        <button
          className={[styles.floorNavigationButton, styles.down].join(" ")}
          onMouseDown={() => floorDown(mapContext, personContext)}
        >
          <ArrowDown />
        </button>
      )}
      <Leo3_Floor0 ref={mapContext.leo3_elements[0]} />
      <Leo3_Floor1 ref={mapContext.leo3_elements[1]} />
      <Leo3_Floor2 ref={mapContext.leo3_elements[2]} />
      <Leo3_Floor3 ref={mapContext.leo3_elements[3]} />
    </div>
  );
}
