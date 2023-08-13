// IMPORTS - BUILTINS
import Image from "next/image";

// IMPORTS - COMPONENTS
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";

// IMPORTS - ASSETS
import styles from "@/components/Dashboard/Headline/Headline.module.scss";
import logoWWU from "assets/images/wwu-no-text.svg?url";
import logoERCIS from "assets/images/ercis.svg?url";
import { Title } from "./Title";

/**
 *
 * @returns headline with WWU and ERCIS logos
 */
export default function Headline() {
  return (
    <div className={styles.headlineWrapper}>
      <div className={[styles.side, styles.logo].join(" ")}>
        <Image
          src={logoWWU}
          alt="WWU Logo"
          fill={false}
          className={[styles.logo, styles.wwu].join(" ")}
          priority
        />
        <Image
          src={logoERCIS}
          alt="ERCIS Logo"
          fill={false}
          className={styles.logo}
          priority
        />
      </div>
      <Title />
      <div className={[styles.side, styles.right].join(" ")}>
        <LanguageSelector />
      </div>
    </div>
  );
}
