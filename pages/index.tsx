// IMPORTS - COMPONENTS
import Headline from "@/components/headline/headline";

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Headline />
      <div className={styles.bodyWrapper}>
        <div className={styles.largeContainer}>LARGE</div>
        <div className={styles.smallContainer}>small</div>
        <div className={styles.smallContainer}>small</div>
        <div className={styles.overlayContainer}>Overlay</div>
        <div className={styles.smallContainer}>small</div>
      </div>
    </div>
  );
}
