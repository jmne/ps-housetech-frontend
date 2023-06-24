import { MapData, useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { buildingNames } from "types/Campus";
import { PersonData, usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";
import { useState, useCallback } from "react";
import { getFloorIndex } from "utils/Wayfinder/mapValidations";

function handleBackToCampus(mapContext: MapData, selectedPersonContext: PersonData) {
  console.log(mapContext.campus_element);
  console.log(mapContext.leo3_building);

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

function handleTouchEnd(
  touchStart: number | undefined,
  touchEnd: number,
  mapContext: MapData
) {
  if (
    mapContext.current.area !== "leo3" ||
    typeof mapContext.current.floor === "undefined" ||
    typeof touchStart === "undefined"
  )
    return;

  if (typeof touchStart !== "number") return;
  const goUp = touchStart - touchEnd < 0;

  if (goUp) {
    const nextFloorIndex = getFloorIndex(mapContext.current.floor) + 1;
    if (nextFloorIndex > 3) return;
    mapContext.setCurrent({ floor: `floor${nextFloorIndex}` });
  } else {
    const nextFloorIndex = getFloorIndex(mapContext.current.floor) - 1;
    if (nextFloorIndex < 0) return;
    mapContext.setCurrent({ floor: `floor${nextFloorIndex}` });
  }
}

export function Controls() {
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  const [touchStart, setTouchStart] = useState<number | undefined>();

  return (
    <div
      className={styles.controls}
      onMouseDown={(e) => {
        setTouchStart(e.pageY);
      }}
      onMouseUp={(e) => {
        handleTouchEnd(touchStart, e.pageY, mapContext);
      }}
    >
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
    </div>
  );
}
