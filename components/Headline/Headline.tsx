// IMPORTS - BUILTINS
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// IMPORTS - ASSETS
import styles from "@/components/Headline/Headline.module.scss";

// IMPORTS - ICONS
import logoWWU from "assets/images/wwu-no-text.svg";
import logoERCIS from "assets/images/ercis.svg";
import flag_de from "assets/images/flag/flag_germany.png";
import flag_uk from "assets/images/flag/flag_uk.png";
import { useEffect } from "react";

function flagPath(lang: string | undefined){
  if (lang === "de") return flag_uk
  else return flag_de
}

/**
 *
 * @returns headline with WWU and ERCIS logos
*/
export default function Headline() {
  const { t } = useTranslation('index')
  const router = useRouter()
  const currentLang = router.locale
  
  function switchLang(){
    if (currentLang === "en") router.push("/", "/", {locale: "de"})
    else router.push("/", "/", {locale: "en"})
  }
  
  return (
    <div className={styles.headlineWrapper}>
      <div className={[styles.side, styles.logo].join(" ")}>
        <Image src={logoWWU} alt="WWU Logo" fill={false} className={[styles.logo, styles.wwu].join(" ")} />
        <Image src={logoERCIS} alt="ERCIS Logo" fill={false} className={styles.logo} />
      </div>
      <div className={styles.title}>
        <h1>{t('header.title')}</h1>
      </div>
      <div className={[styles.side, styles.right].join(" ")}>
        <Image alt="Flag" src={flagPath(currentLang)} fill={false} className={styles.flagButton} onClick={switchLang}/>
      </div>
    </div>
  );
}
