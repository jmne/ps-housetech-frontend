import { Events } from "./Events/Events";

import indexStyles from "@/pages/index.module.scss";
import styles from "./News.module.scss";
import { useTranslation } from "next-i18next";
import { useSearchInputContext } from "context/SearchInputContext";
import Keyboard from "@/components/Keyboard/Keyboard";

export function News() {
  const { t } = useTranslation("index");
  const searchInputContext = useSearchInputContext();

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

      <Keyboard visible={searchInputContext.active} />
    </section>
  );
}
