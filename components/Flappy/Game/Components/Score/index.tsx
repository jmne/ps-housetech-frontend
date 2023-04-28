import { useMemo } from "react";
import { GameState, useFlappyDataContext } from "../../Logic/flappyData";
import Number from "./Number";
import styles from "./score.module.scss";

export function Score() {
  const flappyData = useFlappyDataContext();

  const styling = useMemo(() => {
    switch (flappyData.state) {
      case GameState.RUNNING: {
        return styles.container;
      }
      case GameState.OVER: {
        return [styles.container, styles.over].join(" ");
      }
      case GameState.DYING: {
        return [styles.container, styles.over].join(" ");
      }
      default: {
        return styles.container;
      }
    }
  }, [flappyData.state]);

  return <Number value={flappyData.score} className={styling} />;
}
