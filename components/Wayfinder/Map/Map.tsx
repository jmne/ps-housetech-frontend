// IMPORTS - REACT
import { useState, useEffect } from "react";

// IMPORTS - NEXTJS
import { useTranslation } from "next-i18next";

// IMPORTS - CONTEXT
import { useMapContext } from "context/MapContext";

// IMPORTS - CONSTANTS
import { MAP_BASE_STATE } from "utils/constants";

// CSS
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { MapLeo11 } from "./MapLeo11";
import { MapLeo3 } from "./MapLeo3";
import { MapLeonardoCampus } from "./MapLeonardoCampus";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";
import { setRoomHighlight } from "utils/Wayfinder/mapTransformations";
import { Controls } from "./Controls";
import { buildingNames } from "types/Campus";
import { getPersonForRoom, getRoomDisplayName } from "utils/Wayfinder/mapValidations";
import { Employee } from "types/Employee";
import { useMapElements } from "context/MapElements";

interface props {
  allPersons: Employee[];
}

export function CampusMap({ allPersons }: props) {
  const { t } = useTranslation("index");
  const mapContext = useMapContext();
  const mapElements = useMapElements();
  const timeoutContext = useTimeoutContext();
  const [floorName, setFloorName] = useState<string | undefined>();
  const [placesAndPeopleInSelectedRoom, setPlacesAndPeopleInSelectedRoom] = useState<
    string[] | undefined
  >();
  const [roomDisplayName, setRoomDisplayName] = useState<string | undefined>();

  useEffect(() => {
    if (!mapContext.current.area || !mapContext.current.room)
      setPlacesAndPeopleInSelectedRoom(undefined);
    else {
      setPlacesAndPeopleInSelectedRoom(
        getPersonForRoom(mapContext.current.area, mapContext.current.room, allPersons, t)
      );
      const roomName = getRoomDisplayName(mapContext.current.room);
      if (roomName) setRoomDisplayName(roomName);
      else setRoomDisplayName(undefined);
    }
  }, [mapContext.current.area, mapContext.current.room, allPersons, mapContext, t]);

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
    if (mapContext.current.floor) setFloorName(mapContext.current.floor);

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
      <div className={styles.title}>
        <div className={[styles.selectionInformation, styles.glassCard].join(" ")}>
          <h2>{t(`wayfinder.map.${mapContext.current.area}`)}</h2>
          <span>
            {floorName && mapContext.current.area !== buildingNames.CAMPUS
              ? t(`wayfinder.map.${floorName}`)
              : ""}
          </span>
          {mapContext.current.room && (
            <>
              {roomDisplayName && <p>{roomDisplayName}</p>}
              {placesAndPeopleInSelectedRoom &&
                placesAndPeopleInSelectedRoom.map((name, index) => (
                  <span className={styles.personInRoom} key={index}>
                    {name}
                  </span>
                ))}
            </>
          )}
        </div>
      </div>
      <div className={styles.mapWrapper} ref={mapElements.mapContainer}>
        <MapLeonardoCampus />
        <MapLeo3 />
        <MapLeo11 />
      </div>
      <Controls />
    </div>
  );
}
