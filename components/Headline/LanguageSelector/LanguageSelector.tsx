// IMPORTS - BUILTIN
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// IMPORTS - ASSETS
import styles from "./LanguageSelector.module.scss";
import flag_de from "assets/images/flag/flag_germany.png";
import flag_uk from "assets/images/flag/flag_uk.png";

export function LanguageSelector() {
  const router = useRouter();
  const currentLang = router.locale;
  const [animationInProgress, setAnimation] = useState(true);

  // Run once to set up the selector according to first domain
  useEffect(() => {
    const flag_de = document.getElementById("first-lang-button");
    const flag_uk = document.getElementById("second-lang-button");
    if (!flag_de || !flag_uk) return;

    if (currentLang === "en") {
      flag_uk.classList.add(styles.active);
    } else flag_de.classList.add(styles.active);

    // Wait for animation to finish
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  }, [currentLang]);

  function switchLang() {
    if (animationInProgress) return;
    setAnimation(true);
    // Get DOM elements
    const flag_de = document.getElementById("first-lang-button");
    const flag_uk = document.getElementById("second-lang-button");
    if (!flag_de || !flag_uk) return;

    if (["en", "en-gb", "en-us"].includes(router.locale ? router.locale : "en")) {
      flag_de.classList.add(styles.active);
      flag_uk.classList.remove(styles.active);

      router.push("/", "/", { locale: "de" });
    } else {
      flag_de.classList.remove(styles.active);
      flag_uk.classList.add(styles.active);

      router.push("/", "/", { locale: "en" });
    }
    // Wait for animation to finish
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  }

  return (
    <ul className={styles.wrapper}>
      <li onClick={switchLang} id="first-lang-button">
        <Image
          src={flag_de}
          alt="Germany Flag"
          fill={false}
          className={styles.flag}
          priority
        />
      </li>
      <li onClick={switchLang} id="second-lang-button">
        <Image
          src={flag_uk}
          alt="UK Flag"
          fill={false}
          className={styles.flag}
          priority
        />
      </li>
    </ul>
  );
}
