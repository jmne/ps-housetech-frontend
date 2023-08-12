import { MapData, useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { CampusBuilding, buildingNames } from "types/Campus";
import { PersonData, usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";
import { useTranslation } from "next-i18next";
import { memo, useCallback, useMemo } from "react";
import { Button } from "@/components/Button";

import IconSearch from "assets/icons/search.svg";

function handleCampusBuildingHighlight(mapContext: MapData, building: CampusBuilding) {
  if (mapContext.current.room !== building) {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: building
    });
  } else {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: undefined
    });
    setTimeout(() => {
      mapContext.setCurrent({
        area: buildingNames.CAMPUS,
        floor: undefined,
        room: building
      });
    }, 200);
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

function Controls() {
  const { t } = useTranslation("index");
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  const handleAreaChangeLeo3 = useCallback(
    () => handleAreaChange(mapContext, selectedPersonContext, buildingNames.LEO3),
    [mapContext, selectedPersonContext]
  );
  const handleAreaChangeLeo11 = useCallback(
    () => handleAreaChange(mapContext, selectedPersonContext, buildingNames.LEO11),
    [mapContext, selectedPersonContext]
  );
  const handleAreaChangeCampus = useCallback(
    () => handleAreaChange(mapContext, selectedPersonContext, buildingNames.CAMPUS),
    [mapContext, selectedPersonContext]
  );

  const handleCampusBuildingHighlightLeo1 = useCallback(
    () => handleCampusBuildingHighlight(mapContext, buildingNames.LEO1),
    [mapContext]
  );
  const handleCampusBuildingHighlightLeo3 = useCallback(
    () => handleCampusBuildingHighlight(mapContext, buildingNames.LEO3),
    [mapContext]
  );
  const handleCampusBuildingHighlightLeo10 = useCallback(
    () => handleCampusBuildingHighlight(mapContext, buildingNames.LEO10),
    [mapContext]
  );
  const handleCampusBuildingHighlightLeo11 = useCallback(
    () => handleCampusBuildingHighlight(mapContext, buildingNames.LEO11),
    [mapContext]
  );
  const handleCampusBuildingHighlightLeo18 = useCallback(
    () => handleCampusBuildingHighlight(mapContext, buildingNames.LEO18),
    [mapContext]
  );
  const handleCafeteriaHighlight = useCallback(
    () => handleCampusBuildingHighlight(mapContext, buildingNames.CAFETERIA),
    [mapContext]
  );

  const buttons = useMemo(() => {
    return (
      <div className={styles.controls}>
        <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
          <div className={styles.headerIcon}>
            <IconSearch className={styles.icon} />
            <h3>{t("wayfinder.controls.visit")}</h3>
          </div>
          {mapContext.current.area !== buildingNames.LEO3 && (
            <Button onClick={handleAreaChangeLeo3}>LC 3</Button>
          )}
          {mapContext.current.area !== buildingNames.LEO11 && (
            <Button onClick={handleAreaChangeLeo11}>LC 11</Button>
          )}
          {mapContext.current.area !== buildingNames.CAMPUS && (
            <Button onClick={handleAreaChangeCampus}>Campus</Button>
          )}
        </div>
        {mapContext.current.area === buildingNames.CAMPUS && (
          <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
            <div className={styles.headerIcon}>
              <IconSearch className={styles.icon} />
              <h3>{t("wayfinder.controls.highlight_building")}</h3>
            </div>
            <Button onClick={handleCampusBuildingHighlightLeo1}>1</Button>
            <Button onClick={handleCampusBuildingHighlightLeo3}>3</Button>
            <Button onClick={handleCampusBuildingHighlightLeo10}>10</Button>
            <Button onClick={handleCampusBuildingHighlightLeo11}>11</Button>
            <Button onClick={handleCampusBuildingHighlightLeo18}>18</Button>
            <Button onClick={handleCafeteriaHighlight}>
              {t("wayfinder.map.cafeteria")}
            </Button>
          </div>
        )}
        {mapContext.current.area === buildingNames.CAMPUS && (
          <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
            <div className={styles.headerIcon}>
              <IconSearch className={styles.icon} />
              <h3>{t("wayfinder.controls.highlight_lecture_hall_building")}</h3>
            </div>
            <Button onClick={handleCampusBuildingHighlightLeo10}>Leo 1</Button>
            <Button onClick={handleCampusBuildingHighlightLeo10}>Leo 2</Button>
            <Button onClick={handleCampusBuildingHighlightLeo10}>Leo 3</Button>
            <Button onClick={handleCampusBuildingHighlightLeo18}>Leo 18.3</Button>
          </div>
        )}
      </div>
    );
  }, [
    mapContext,
    t,
    handleCafeteriaHighlight,
    handleAreaChangeLeo3,
    handleAreaChangeLeo11,
    handleAreaChangeCampus,
    handleCampusBuildingHighlightLeo1,
    handleCampusBuildingHighlightLeo3,
    handleCampusBuildingHighlightLeo10,
    handleCampusBuildingHighlightLeo11,
    handleCampusBuildingHighlightLeo18
  ]);

  return buttons;
}

export default memo(Controls);
