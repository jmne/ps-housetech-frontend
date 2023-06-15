import indexStyles from "@/pages/index.module.scss";
import styles from "./Weather.module.scss"
import { WeatherReport } from "./Report/WeaterReport";

export function Weather() {
  return (
    <section
      className={[indexStyles.contentSection, indexStyles.weatherContainer, styles.container].join(" ")}
    >
      <div className={styles.buttons}>
        <button className={styles.active}>Report</button>
        <button>Map</button>
      </div>
    <WeatherReport />
    </section>
  );
}
