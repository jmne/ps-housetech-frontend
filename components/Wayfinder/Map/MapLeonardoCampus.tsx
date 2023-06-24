import styles from "./Map.module.scss";
import { useEffect } from "react";
import LeonardoCampus from "assets/images/map/campus_transformed/leonardocampus";
import { useMapContext } from "context/MapContext";
import { maximizeCampus, minimizeCampus } from "utils/Wayfinder/mapTransformations";
import { mapTransitionConfig } from "utils/constants";
import { buildingNames } from "types/Campus";

export function MapLeonardoCampus() {
  const mapContext = useMapContext();

  useEffect(() => {
    const campus = mapContext.campus_element?.current;
    if (!campus) return;

    const transitionToCampus =
      mapContext.current.area === buildingNames.CAMPUS &&
      mapContext.previous.area !== buildingNames.CAMPUS;

    const transitionFromCampus =
      mapContext.current.area !== buildingNames.CAMPUS &&
      mapContext.previous.area === buildingNames.CAMPUS;

    const animations: (() => Promise<unknown>)[] = [];

    if (transitionToCampus) {
      const waitForLeo3Collapse =
        mapContext.previous.area === buildingNames.LEO3
          ? mapTransitionConfig.animationDuration
          : 0;

      animations.push(maximizeCampus.bind(null, campus));
    } else if (transitionFromCampus) {
      animations.push(minimizeCampus.bind(null, campus));
    }

    const executeAnimations = async (animations: (() => Promise<unknown>)[]) => {
      for (let index = 0; index < animations.length; index++) {
        await animations[index]();
      }
    };

    executeAnimations(animations);
  }, [mapContext, mapContext.mapContainer, mapContext.campus_element]);

  return (
    <div className={styles.mapElement}>
      <LeonardoCampus ref={mapContext.campus_element} />
    </div>
  );
}
