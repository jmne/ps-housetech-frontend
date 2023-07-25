import styles from "./Map.module.scss";
import { memo, useCallback, useEffect } from "react";
import LeonardoCampus from "assets/images/map/campus_transformed/leonardocampus";
import { useMapContext } from "context/MapContext";
import {
  buildingClickHandler,
  maximizeCampus,
  minimizeCampus
} from "utils/Wayfinder/mapTransformations";
import { buildingNames } from "types/Campus";
import { useMapElements } from "context/MapElements";

const MapLeonardoCampus = memo(() => {
  const mapContext = useMapContext();
  const mapElements = useMapElements();

  const animationActive = useCallback(() => {
    if (!mapContext.animationActiveCampus) {
      return;
    }
    mapContext.animationActiveCampus.current = true;
  }, [mapContext]);

  const animationFinished = useCallback(() => {
    if (!mapContext.animationActiveCampus) {
      return;
    }
    mapContext.animationActiveCampus.current = false;
  }, [mapContext]);

  useEffect(() => {
    const campus = mapElements.campus_element?.current;
    if (!campus) return;

    const transitionToCampus =
      mapContext.current.area === buildingNames.CAMPUS &&
      mapContext.previous.area !== buildingNames.CAMPUS;

    const transitionFromCampus =
      mapContext.current.area !== buildingNames.CAMPUS &&
      mapContext.previous.area === buildingNames.CAMPUS;

    const animations: (() => Promise<unknown>)[] = [];

    if (transitionToCampus) {
      animations.push(maximizeCampus.bind(null, campus));
    } else if (transitionFromCampus) {
      animations.push(minimizeCampus.bind(null, campus));
    }

    const executeAnimations = async (animations: (() => Promise<unknown>)[]) => {
      animationActive();
      for (let index = 0; index < animations.length; index++) {
        await animations[index]();
      }
      animationFinished();
    };

    executeAnimations(animations);
  }, [
    mapContext,
    mapElements.mapContainer,
    mapElements.campus_element,
    animationActive,
    animationFinished
  ]);

  return (
    <div className={styles.mapElement}>
      <LeonardoCampus
        onClick={(e) =>
          buildingClickHandler(e, buildingNames.CAMPUS, undefined, mapContext.setCurrent)
        }
      />
    </div>
  );
});

MapLeonardoCampus.displayName = "Leonardo-Campus Map";
export default MapLeonardoCampus;
