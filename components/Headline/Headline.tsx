// IMPORTS - BUILTINS
import Image from "next/image";
import { useTranslation } from "next-i18next";

// IMPORTS - COMPONENTS
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";

// IMPORTS - ASSETS
import styles from "@/components/Headline/Headline.module.scss";
import logoWWU from "assets/images/wwu-no-text.svg?url";
import logoERCIS from "assets/images/ercis.svg?url";

/**
 *
 * @returns headline with WWU and ERCIS logos
 */
export default function Headline() {
  const { t } = useTranslation("index");

  return (
    <div className={styles.headlineWrapper}>
      <div className={[styles.side, styles.logo].join(" ")}>
        <Image
          src={logoWWU}
          alt="WWU Logo"
          fill={false}
          className={[styles.logo, styles.wwu].join(" ")}
        />
        <Image src={logoERCIS} alt="ERCIS Logo" fill={false} className={styles.logo} />
      </div>
      <div className={styles.title}>
        <h1>{t("header.title")}</h1>
      </div>
      <div className={[styles.side, styles.right].join(" ")}>
        <LanguageSelector />
      </div>
    </div>
  );
}
