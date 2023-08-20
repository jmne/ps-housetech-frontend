import { useMemo } from "react";
import { useFlappyDataContext } from "../../Logic/flappyData";
import { BlueBird, RedBird, YellowBird } from "./Colors";

export function Bird() {
  const flappyDataContext = useFlappyDataContext();

  return useMemo(() => {
    if (flappyDataContext.birdColor === "blue") return <BlueBird />;
    if (flappyDataContext.birdColor === "yellow") return <YellowBird />;
    return <RedBird />;
  }, [flappyDataContext.birdColor]);
}
