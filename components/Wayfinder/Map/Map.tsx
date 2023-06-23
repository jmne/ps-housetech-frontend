// IMPORTS - REACT
import { useState, useEffect, useCallback } from "react";

// IMPORTS - NEXTJS
import { useTranslation } from "next-i18next";

// IMPORTS - CONTEXT
import { useMapContext } from "context/MapContext";

// IMPORTS - CONSTANTS
import { MAP_BASE_STATE, mapTransitionConfig } from "utils/constants";

// CSS
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { getFloor } from "utils/Wayfinder/mapValidations";
import { MapLeo11 } from "./MapLeo11";
import { MapLeo3 } from "./MapLeo3";
import { MapLeonardoCampus } from "./MapLeonardoCampus";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";
import { setRoomHighlight } from "utils/Wayfinder/mapTransformations";
import { Architects_Daughter } from "next/font/google";
import { Controls } from "./Controls";

export function CampusMap() {
  const { t } = useTranslation("index");
  const mapContext = useMapContext();
  const timeoutContext = useTimeoutContext();

  const resetLayout = useCallback(() => {
    mapContext.setCurrent(MAP_BASE_STATE);
  }, [mapContext.setCurrent]);

  useEffect(() => {
    const handler = new IdleHandler({
      origin: "map",
      resetFunction: resetLayout
    });
    timeoutContext.manager?.addResetListener(handler);
  }, [timeoutContext.manager]);

  const [floorName, setFloorName] = useState<string | undefined>();

  useEffect(() => {
    var floorName = undefined;
    if (typeof mapContext.current.room === "number") {
      getFloor(mapContext.current.room);
    }

    setFloorName(floorName);

    const areaChanged = mapContext.current.area !== mapContext.previous.area;
    const floorChanged = mapContext.current.floor !== mapContext.previous.floor;
    const delay_roomHighlight =
      (areaChanged ? mapTransitionConfig.animationDuration : 0) +
      (floorChanged ? mapTransitionConfig.animationDuration : 0);

    if (mapContext.current.room && mapContext.current.area) {
      setTimeout(() => {
        if (!mapContext.current.room || !mapContext.current.area) return;
        setRoomHighlight(mapContext.current.room, mapContext.current.area, true);
      }, delay_roomHighlight);
    }
    if (
      mapContext.previous.room &&
      mapContext.previous.area &&
      mapContext.previous.room !== mapContext.current.room
    ) {
      setRoomHighlight(mapContext.previous.room, mapContext.previous.area, false);
    }
  }, [mapContext.current.room]);

  useEffect(() => {
    console.log(mapContext.previous);
    console.log(mapContext.current);
  }, [mapContext.previous, mapContext.current]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{t(`wayfinder.map.${mapContext.current.area}`)}</h2>
        {floorName ? <span>{t(`wayfinder.map.${floorName}`)}</span> : <></>}
      </div>
      <div className={styles.mapWrapper} ref={mapContext.mapContainer}>
        <MapLeo11 />
        <MapLeonardoCampus />
        <MapLeo3 />
        <Controls />
      </div>
    </div>
  );
}
