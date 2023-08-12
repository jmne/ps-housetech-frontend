import styles from "@/components/Dashboard/Wayfinder/Map/Map.module.scss";
import { useMapContext } from "context/MapContext";
import { useTranslation } from "next-i18next";
import { memo, useEffect, useState } from "react";
import { buildingNames } from "types/Campus";
import { Employee } from "types/Employee";
import {
  getPersonForRoom,
  getRoomDisplayName
} from "utils/wayfinderAnimation/mapValidations";

interface props {
  allPersons: Employee[];
}

function Title({ allPersons }: props) {
  const mapContext = useMapContext();
  const { t } = useTranslation("index");

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
      const roomName = getRoomDisplayName(mapContext.current.room, t);
      if (roomName) setRoomDisplayName(roomName);
      else setRoomDisplayName(undefined);
    }
  }, [mapContext.current.area, mapContext.current.room, allPersons, mapContext, t]);

  useEffect(() => {
    if (mapContext.current.floor) setFloorName(mapContext.current.floor);
  }, [mapContext, mapContext.current.floor]);

  return (
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
  );
}

export default memo(Title);
