// IMPORTS - BUILTINS
import Image from "next/image";

// IMPORTS - ASSETS
import styles from "components/headline/headline.module.scss";

// IMPORTS - ICONS
import logoWWU from "assets/images/wwu.svg";
import logoERCIS from "assets/images/ercis.svg";

/**
 * 
 * @returns headline with WWU and ERCIS logos
 */
export default function Headline() {
  return (
    <div className={styles.headlineWrapper}>
      <div className={styles.logo}>
        <Image src={logoWWU} alt="WWU Logo" fill={false} className={styles.logo}/>
      </div>
      <div className={styles.title}>
        <h1>Department of Information Systems</h1>
      </div>
      <div className={[styles.logo, styles.alignRight].join(" ")}>
        <Image src={logoERCIS} alt="ERCIS Logo" fill={false} className={styles.logo}/>
      </div>
    </div>
  );
}
