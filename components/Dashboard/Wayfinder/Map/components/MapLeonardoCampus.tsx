import styles from "@/components/Dashboard/Wayfinder/Map/Map.module.scss";
import React, { memo, useEffect, useMemo } from "react";
import LeonardoCampus from "assets/map/campus_transformed/leonardocampus";
import { useMapContext } from "context/MapContext";
import {
  buildingClickHandler,
  maximizeCampus,
  minimizeCampus
} from "utils/wayfinderAnimation/mapTransformations";
import { buildingNames } from "types/Campus";
import { useMapElements } from "context/MapElements";
import { AnimationQueue } from "utils/wayfinderAnimation/AnimationQueue";
import { usePersonSearchContext } from "context/PersonContext";

const MapLeonardoCampus = memo(({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const mapContext = useMapContext();
  const mapElements = useMapElements();
  const personContext = usePersonSearchContext();
  const animationQueue = useMemo(() => new AnimationQueue(), []);

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

    if (animations.length > 0) animationQueue.enqueue(animations);
  }, [mapContext, mapElements.mapContainer, mapElements.campus_element, animationQueue]);

  return (
    <div className={styles.mapElement} {...props}>
      <LeonardoCampus
        onClick={(e) =>
          buildingClickHandler(
            e,
            buildingNames.CAMPUS,
            undefined,
            mapContext.setCurrent,
            personContext
          )
        }
      />
    </div>
  );
});

MapLeonardoCampus.displayName = "Leonardo-Campus Map";
export default MapLeonardoCampus;
