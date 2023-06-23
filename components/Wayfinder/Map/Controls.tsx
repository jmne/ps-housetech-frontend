import { useMapContext } from "context/MapContext";
import styles from "@/components/Wayfinder/Map/Map.module.scss";
import { buildingNames } from "types/Campus";
import { usePersonSearchContext } from "context/PersonContext";
import { handleExpansion } from "utils/Wayfinder/personCardsTransformations";

export function Controls() {
  const mapContext = useMapContext();
  const selectedPersonContext = usePersonSearchContext();

  function handleBackToCampus() {
    if (selectedPersonContext.current_person)
      handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
    mapContext.setCurrent({
      area: buildingNames.CAMPUS,
      floor: undefined,
      room: undefined
    });
  }
  function handleShowLeo3() {
    if (selectedPersonContext.current_person)
      handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
    mapContext.setCurrent({ area: buildingNames.LEO3, floor: "floor0", room: undefined });
  }
  function handleShowLeo11() {
    if (selectedPersonContext.current_person)
      handleExpansion(selectedPersonContext.current_person, false, selectedPersonContext);
    mapContext.setCurrent({
      area: buildingNames.LEO11,
      floor: "floor0",
      room: undefined
    });
  }

  if (mapContext.current.area === buildingNames.CAMPUS) {
    return (
      <div className={styles.controls}>
        <button onClick={handleShowLeo3}>Show Leo 3</button>
        <button onClick={handleShowLeo11}>Show Leo 11</button>
      </div>
    );
  } else if (mapContext.current.area === buildingNames.LEO3) {
    return (
      <div className={styles.controls}>
        <button onClick={handleBackToCampus}>Back to Campus</button>
        <button onClick={handleShowLeo11}>Show Leo 11</button>
      </div>
    );
  } else if (mapContext.current.area === buildingNames.LEO11) {
    return (
      <div className={styles.controls}>
        <button onClick={handleBackToCampus}>Back to Campus</button>
        <button onClick={handleShowLeo3}>Show Leo 3</button>
      </div>
    );
  }

  return <></>;
}
