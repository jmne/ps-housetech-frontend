// IMPORTS - BUILTIN
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";

// IMPORTS - ASSETS
import styles from "./LanguageSelector.module.scss";
import flag_de from "assets/images/flag/flag_germany.png";
import flag_uk from "assets/images/flag/flag_uk.png";
import { useTimeoutContext } from "context/TimeoutContext";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";

export function LanguageSelector() {
  const timeoutContext = useTimeoutContext();
  const flagRefDE = useRef<HTMLLIElement>(null);
  const flagRefUK = useRef<HTMLLIElement>(null);
  const router = useRouter();

  useEffect(() => {
    const resetLanguage = () => {
      router.push("/", "/", { locale: "en" });
    };

    const handler = new IdleHandler({ origin: "language", resetFunction: resetLanguage });
    timeoutContext.manager && timeoutContext.manager.addResetListener(handler);
  }, [router, timeoutContext]);

  const handleClick = useCallback(() => {
    router.locale === "en"
      ? router.push("/", "/", { locale: "de" })
      : router.push("/", "/", { locale: "en" });
  }, [router, router.locale]);

  return (
    <ul className={styles.wrapper} onClick={handleClick}>
      <li ref={flagRefDE} className={router.locale === "de" ? styles.active : undefined}>
        <Image
          src={flag_de}
          alt="Germany Flag"
          fill={false}
          className={styles.flag}
          priority
        />
      </li>
      <li ref={flagRefUK} className={router.locale === "de" ? undefined : styles.active}>
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
