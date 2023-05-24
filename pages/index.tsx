// IMPORTS - COMPONENTS
import Headline from "@/components/Headline/Headline";
import Busplan from "@/components/Busplan/Busplan";
import Cafeteriaplan from "@/components/Cafeteriaplan/Cafeteriaplan";

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Headline />
      <div className={styles.bodyWrapper}>
        <div className={[styles.largeContainer, styles.contentSection].join(" ")}>
          LARGE
        </div>
        <Busplan />
        <Cafeteriaplan />
        <div className={[styles.overlayContainer, styles.contentSection].join(" ")}>
          Overlay
        </div>
        <div className={[styles.smallContainer, styles.contentSection].join(" ")}>
          small
        </div>
      </div>
    </div>
  );
}
