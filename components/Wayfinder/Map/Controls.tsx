import { MapData, useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { CampusBuilding, buildingNames } from "types/Campus";
import { PersonData, usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";
import { useTranslation } from "next-i18next";
import { useCallback, useMemo } from "react";
import { animationAllowed } from "utils/Wayfinder/mapValidations";
import { useToastContext } from "context/ToastContext";
import { Button } from "@/components/Button";

function handleCampusBuildingHighlight(mapContext: MapData, building: CampusBuilding) {
  if (mapContext.current.room !== building) {
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
  const toastContext = useToastContext();
  const selectedPersonContext = usePersonSearchContext();

  const handleAreaChangeLeo3 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleAreaChange(mapContext, selectedPersonContext, buildingNames.LEO3),
    [mapContext, selectedPersonContext, toastContext]
  );
  const handleAreaChangeLeo11 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleAreaChange(mapContext, selectedPersonContext, buildingNames.LEO11),
    [mapContext, selectedPersonContext, toastContext]
  );
  const handleAreaChangeCampus = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleAreaChange(mapContext, selectedPersonContext, buildingNames.CAMPUS),
    [mapContext, selectedPersonContext, toastContext]
  );

  const handleCampusBuildingHighlightLeo1 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleCampusBuildingHighlight(mapContext, buildingNames.LEO1),
    [mapContext, toastContext]
  );
  const handleCampusBuildingHighlightLeo3 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleCampusBuildingHighlight(mapContext, buildingNames.LEO3),
    [mapContext, toastContext]
  );
  const handleCampusBuildingHighlightLeo10 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleCampusBuildingHighlight(mapContext, buildingNames.LEO10),
    [mapContext, toastContext]
  );
  const handleCampusBuildingHighlightLeo11 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleCampusBuildingHighlight(mapContext, buildingNames.LEO11),
    [mapContext, toastContext]
  );
  const handleCampusBuildingHighlightLeo18 = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleCampusBuildingHighlight(mapContext, buildingNames.LEO18),
    [mapContext, toastContext]
  );
  const handleCafeteriaHighlight = useCallback(
    () =>
      animationAllowed(mapContext, toastContext) &&
      handleCampusBuildingHighlight(mapContext, buildingNames.CAFETERIA),
    [mapContext, toastContext]
  );

  const buttons = useMemo(() => {
    return (
      <div className={styles.controls}>
        <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
          <h3>{t("wayfinder.controls.visit")}</h3>
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
            <h3>{t("wayfinder.controls.highlight_building")}</h3>
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
            <h3>{t("wayfinder.controls.highlight_lecture_hall_building")}</h3>
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
