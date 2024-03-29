// IMPORTS - REACT
import { useEffect } from "react";

// IMPORTS - CONTEXT
import { useMapContext } from "context/MapContext";

// IMPORTS - CONSTANTS
import { MAP_BASE_STATE } from "utils/constants";

// CSS
import styles from "@/components/Dashboard/Wayfinder/Map/Map.module.scss";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";
import { setRoomHighlight } from "utils/wayfinderAnimation/mapTransformations";
import { Employee } from "types/Employee";
import { useMapElements } from "context/MapElements";

import { Controls, MapLeo11, MapLeo3, MapLeonardoCampus, Title } from "./components";

export interface MapProps {
  allPersons: Employee[];
}

export function CampusMap({ allPersons }: MapProps) {
  const mapContext = useMapContext();
  const mapElements = useMapElements();
  const timeoutContext = useTimeoutContext();

  useEffect(() => {
    const resetLayout = () => {
      mapContext.setCurrent(MAP_BASE_STATE);
    };

    const handler = new IdleHandler({
      origin: "map",
      resetFunction: resetLayout
    });
    timeoutContext.manager?.addResetListener(handler);
  }, [timeoutContext.manager, mapContext]);

  useEffect(() => {
    if (mapContext.current.room && mapContext.current.area) {
      setRoomHighlight(mapContext.current.room, mapContext.current.area, true);
    }

    if (
      mapContext.previous.room &&
      mapContext.previous.area &&
      mapContext.previous.room !== mapContext.current.room
    ) {
      setRoomHighlight(mapContext.previous.room, mapContext.previous.area, false);
    }
  }, [mapContext.current.room, mapContext.current.floor, mapContext]);

  return (
    <div className={styles.container}>
      <Title allPersons={allPersons} />
      <div className={styles.mapWrapper} ref={mapElements.mapContainer}>
        <MapLeonardoCampus />
        <MapLeo3 />
        <MapLeo11 />
      </div>
      <Controls />
    </div>
  );
}
