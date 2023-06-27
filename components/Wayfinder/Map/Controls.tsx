import { MapData, useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { CampusBuilding, buildingNames } from "types/Campus";
import { PersonData, usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";

function handleBackToCampus(mapContext: MapData, selectedPersonContext: PersonData) {
  if (selectedPersonContext.current_person)
    handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
  mapContext.setCurrent({
    area: buildingNames.CAMPUS,
    floor: undefined,
    room: undefined
  });
}
function handleShowLeo3(mapContext: MapData, selectedPersonContext: PersonData) {
  if (selectedPersonContext.current_person)
    handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
  mapContext.setCurrent({ area: buildingNames.LEO3, floor: "floor0", room: undefined });
}
function handleShowLeo11(mapContext: MapData, selectedPersonContext: PersonData) {
  if (selectedPersonContext.current_person)
    handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
  mapContext.setCurrent({
    area: buildingNames.LEO11,
    floor: "floor0",
    room: undefined
  });
}

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

export function Controls() {
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  return (
    <div className={styles.controls}>
      <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
        <h3>Visit</h3>
        {mapContext.current.area !== buildingNames.LEO3 && (
          <button onClick={() => handleShowLeo3(mapContext, selectedPersonContext)}>
            Leo 3
          </button>
        )}
        {mapContext.current.area !== buildingNames.LEO11 && (
          <button onClick={() => handleShowLeo11(mapContext, selectedPersonContext)}>
            Leo 11
          </button>
        )}
        {mapContext.current.area !== buildingNames.CAMPUS && (
          <button onClick={() => handleBackToCampus(mapContext, selectedPersonContext)}>
            Back to Campus
          </button>
        )}
      </div>
      {mapContext.current.area === buildingNames.CAMPUS && (
        <div className={[styles.buttonsForCampus, styles.glassCard].join(" ")}>
          <h3>Where is?</h3>
          <button
            onClick={() => handleCampusBuildingHighlight(mapContext, buildingNames.LEO1)}
          >
            Leo 1
          </button>
          <button
            onClick={() => handleCampusBuildingHighlight(mapContext, buildingNames.LEO3)}
          >
            Leo 3
          </button>
          <button
            onClick={() => handleCampusBuildingHighlight(mapContext, buildingNames.LEO10)}
          >
            Leo 10
          </button>
          <button
            onClick={() => handleCampusBuildingHighlight(mapContext, buildingNames.LEO11)}
          >
            Leo 11
          </button>
          <button
            onClick={() => handleCampusBuildingHighlight(mapContext, buildingNames.LEO18)}
          >
            Leo 18
          </button>
        </div>
      )}
      {mapContext.current.room && (
        <button
          className={styles.removeHighlightButton}
          onClick={() => mapContext.setCurrent({ room: undefined })}
        >
          Remove highlight
        </button>
      )}
    </div>
  );
}
