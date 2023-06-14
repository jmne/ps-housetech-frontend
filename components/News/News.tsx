import { Events } from "./Events/Events";

import indexStyles from "@/pages/index.module.scss"
import styles from "./News.module.scss"
import { useTranslation } from "next-i18next";

export function News(){
    const {t} = useTranslation("index")

    return(
        <section className={[indexStyles.contentSection, styles.container].join(" ")} >
            <div className={styles.headlineContainer}>
                <h2>{t("news.events.title")}</h2>
            </div>
            <Events />
        </section>
    )
}