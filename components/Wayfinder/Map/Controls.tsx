import { MapData, useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { CampusBuilding, buildingNames } from "types/Campus";
import { PersonData, usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

function handleCampusBuildingHighlight(mapContext: MapData, building: CampusBuilding) {
  if (mapContext.current.room === building) {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: undefined
    });
  } else {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: building
    });
  }
}

function handleAreaChange(
  mapContext: MapData,
  selectedPersonContext: PersonData,
  area: CampusBuilding
) {
  if (selectedPersonContext.current_person) {
    handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
    selectedPersonContext.setPerson(undefined);
  }
  if (area === buildingNames.CAMPUS)
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: undefined
    });
  else if (area === buildingNames.LEO3)
    mapContext.setCurrent({
      area: buildingNames.LEO3,
      floor: "floor0",
      room: undefined
    });
  else if (area === buildingNames.LEO11)
    mapContext.setCurrent({
      area: buildingNames.LEO11,
      floor: "floor0",
      room: undefined
    });
}

export function Controls() {
  const { t } = useTranslation("index");
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  const buttons = useMemo(() => {
    return (
      <div className={styles.controls}>
        <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
          <h3>{t("wayfinder.controls.visit")}</h3>
          {mapContext.current.area !== buildingNames.LEO3 && (
            <button
              onClick={() =>
                handleAreaChange(mapContext, selectedPersonContext, buildingNames.LEO3)
              }
            >
              LC 3
            </button>
          )}
          {mapContext.current.area !== buildingNames.LEO11 && (
            <button
              onClick={() =>
                handleAreaChange(mapContext, selectedPersonContext, buildingNames.LEO11)
              }
            >
              LC 11
            </button>
          )}
          {mapContext.current.area !== buildingNames.CAMPUS && (
            <button
              onClick={() =>
                handleAreaChange(mapContext, selectedPersonContext, buildingNames.CAMPUS)
              }
            >
              Campus
            </button>
          )}
        </div>
        {mapContext.current.area === buildingNames.CAMPUS && (
          <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
            <h3>{t("wayfinder.controls.highlight_building")}</h3>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO1)
              }
            >
              1
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO3)
              }
            >
              3
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO10)
              }
            >
              10
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO11)
              }
            >
              11
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO18)
              }
            >
              18
            </button>
          </div>
        )}
        {mapContext.current.area === buildingNames.CAMPUS && (
          <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
            <h3>{t("wayfinder.controls.highlight_lecture_hall_building")}</h3>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO10)
              }
            >
              Leo 1
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO10)
              }
            >
              Leo 2
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO10)
              }
            >
              Leo 3
            </button>
            <button
              onClick={() =>
                handleCampusBuildingHighlight(mapContext, buildingNames.LEO18)
              }
            >
              Leo 18.3
            </button>
          </div>
        )}
      </div>
    );
  }, [mapContext.current.area, mapContext, selectedPersonContext, t]);

  return buttons;
}
