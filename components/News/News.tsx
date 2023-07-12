import Events from "./Events/Events";

import indexStyles from "@/pages/index.module.scss";
import styles from "./News.module.scss";
import { useTranslation } from "next-i18next";
import Keyboard from "@/components/Keyboard/Keyboard";
import Instagram from "./Instagram/Instagram";

export function News() {
  const { t } = useTranslation("index");

  return (
    <section
      className={[
        indexStyles.contentSection,
        indexStyles.newsContainer,
        styles.container
      ].join(" ")}
    >
      <div className={styles.headlineContainer}>
        <h2>{t("news.events.title")}</h2>
      </div>
      <Events />
      <Instagram />
      <Keyboard />
    </section>
  );
}
