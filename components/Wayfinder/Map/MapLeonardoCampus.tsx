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

    if (mapContext.current.area === buildingNames.CAMPUS) {
      const waitForLeo3Collapse =
        mapContext.previous.area === buildingNames.LEO3
          ? mapTransitionConfig.animationDuration
          : 0;

      setTimeout(() => {
        maximizeCampus(campus);
      }, waitForLeo3Collapse);
    } else {
      minimizeCampus(campus);
    }
  }, [
    mapContext,
    mapContext.current,
    mapContext.mapContainer,
    mapContext.campus_element
  ]);

  return (
    <div className={styles.mapElement}>
      <LeonardoCampus ref={mapContext.campus_element} />
    </div>
  );
}
