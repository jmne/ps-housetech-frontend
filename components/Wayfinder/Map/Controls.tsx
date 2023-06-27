import { MapData, useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { buildingNames } from "types/Campus";
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

function handleHighlightLeo3(mapContext: MapData) {
  if (mapContext.current.room === buildingNames.LEO3) {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: undefined
    });
  } else {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: buildingNames.LEO3
    });
  }
}

function handleHighlightLeo11(mapContext: MapData) {
  if (mapContext.current.room === buildingNames.LEO11) {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: undefined
    });
  } else {
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: buildingNames.LEO11
    });
  }
}

export function Controls() {
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  return (
    <div className={styles.controls}>
      {mapContext.current.area !== buildingNames.LEO3 && (
        <button onClick={() => handleShowLeo3(mapContext, selectedPersonContext)}>
          Show Leo 3
        </button>
      )}
      {mapContext.current.area !== buildingNames.LEO11 && (
        <button onClick={() => handleShowLeo11(mapContext, selectedPersonContext)}>
          Show Leo 11
        </button>
      )}
      {mapContext.current.area !== buildingNames.CAMPUS && (
        <button onClick={() => handleBackToCampus(mapContext, selectedPersonContext)}>
          Back to Campus
        </button>
      )}
      {mapContext.current.area === buildingNames.CAMPUS && (
        <>
          <button onClick={() => handleHighlightLeo3(mapContext)}>Where is Leo 3?</button>
          <button onClick={() => handleHighlightLeo11(mapContext)}>
            Where is Leo 11?
          </button>
        </>
      )}
      {mapContext.current.area && mapContext.current.room && (
        <div className={styles.selectionInformation}>
          <h3>{mapContext.current.room}</h3>
          <span>{mapContext.current.area}</span>
          <button onClick={() => mapContext.setCurrent({ room: undefined })}>
            reset
          </button>
        </div>
      )}
    </div>
  );
}
