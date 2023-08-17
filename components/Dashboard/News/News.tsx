import Events from "./Events/Events";

import styles from "./News.module.scss";
import { useTranslation } from "next-i18next";
import Keyboard from "@/components/UI/Keyboard/Keyboard";
import Instagram from "./Instagram/Instagram";

import * as Card from "@/components/UI/Card";
import { NewsLinksOverlay } from "./NewsLinksOverlay";

export function News() {
  const { t } = useTranslation("index");

  return (
    <Card.Container placement="medium" className={styles.container}>
      <Card.Headline className={styles.headline}>
        <Card.Title>{t("news.events.title")}</Card.Title>
        <Card.End>
          <NewsLinksOverlay />
        </Card.End>
      </Card.Headline>
      <Card.Content className={styles.content}>
        <Events />
        <Instagram />
      </Card.Content>
      <Keyboard />
    </Card.Container>
  );
}
