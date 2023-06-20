import indexStyles from "@/pages/index.module.scss";
import styles from "./Weather.module.scss"
import { WeatherReport } from "./Report/WeaterReport";

export function Weather() {
  return (
    <section
      className={[indexStyles.contentSection, indexStyles.weatherContainer, styles.container].join(" ")}
    >
    <WeatherReport />
    </section>
  );
}
