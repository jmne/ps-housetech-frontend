import { Events } from "./Events/Events";

import indexStyles from "@/pages/index.module.scss"
import styles from "./News.module.scss"
import { useTranslation } from "next-i18next";
import { useSearchInputContext } from "context/SearchInputContext";
import { useState, useRef, useEffect } from "react";
import Keyboard from "@/components/Keyboard/Keyboard";

export function News() {
    const { t } = useTranslation("index")

    const [activeKeyboard, setActiveKeyboard] = useState(false);
    const searchInputContext = useSearchInputContext();
    const keyboardRef = useRef<HTMLElement>();

    useEffect(() => {
        if (searchInputContext.active) setActiveKeyboard(true);
        else {
            if (keyboardRef.current) keyboardRef.current.style.opacity = "0";
            setTimeout(() => {
                setActiveKeyboard(false);
            }, 500);
        }
    }, [searchInputContext.active]);

    return (
        <section className={[indexStyles.contentSection, indexStyles.newsContainer, styles.container].join(" ")} >
            <div className={styles.headlineContainer}>
                <h2>{t("news.title")}</h2>
            </div>
            <Events />

            {activeKeyboard ? <Keyboard ref={keyboardRef} /> : <></>}
        </section>
    )
}