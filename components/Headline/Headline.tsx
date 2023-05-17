// IMPORTS - BUILTINS
import Image from "next/image";
import { useTranslation } from "next-i18next";

// IMPORTS - ASSETS
import styles from "@/components/Headline/Headline.module.scss";

// IMPORTS - ICONS
import logoWWU from "assets/images/wwu-no-text.svg";
import logoERCIS from "assets/images/ercis.svg";

/**
 *
 * @returns headline with WWU and ERCIS logos
 */
export default function Headline() {
  const { t } = useTranslation('index')

  return (
    <div className={styles.headlineWrapper}>
      <div className={styles.logo}>
        <Image src={logoWWU} alt="WWU Logo" fill={false} className={[styles.logo, styles.wwu].join(" ")} />
      </div>
      <div className={styles.title}>
        <h1>{t('header.title')}</h1>
      </div>
      <div className={styles.logo}>
        <Image src={logoERCIS} alt="ERCIS Logo" fill={false} className={styles.logo} />
      </div>
    </div>
  );
}
