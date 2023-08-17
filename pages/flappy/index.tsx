import Side from "@/components/Flappy/Side";
import FlappyBirdGame from "@/components/Flappy/Game";
import styles from "./flappy.module.scss";
import { FlappyDataProvider } from "@/components/Flappy/Game/Logic/flappyData";

export default function FlappyBird() {
  return (
    <div className={styles.container}>
      <FlappyDataProvider>
        <FlappyBirdGame className={styles.game} />
        <Side className={styles.controls} />
      </FlappyDataProvider>
    </div>
  );
}
