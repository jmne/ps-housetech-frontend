import { useTranslation } from "next-i18next";
import styles from "./Headline.module.scss";
import { PropsWithChildren, useEffect, useMemo, useRef } from "react";

export function Title() {
  const { t } = useTranslation("index");
  const specialMessage = useMemo(() => {
    const today = new Date();

    const itsChristmasTime = today.getMonth() === 11;
    if (itsChristmasTime) return "header.sub_heading.christmas";

    const itsNewYear = today.getMonth() === 0 && today.getDay() <= 15;
    if (itsNewYear) return "header.sub_heading.new_year";

    const itsStarWarsTime = today.getMonth() === 4 && today.getDay() === 3;
    if (itsStarWarsTime) return "header.sub_heading.star_wars";

    return undefined;
  }, []);

  const specialEmoji = useMemo(() => {
    const today = new Date();

    const itsChristmasTime = today.getMonth() === 11;
    if (itsChristmasTime) return "&#10052;"; //Snowflakes

    const itsStarWarsTime = today.getMonth() === 4 && today.getDay() === 3;
    if (itsStarWarsTime) return undefined; //

    const itsNewYear = today.getMonth() === 0 && today.getDay() <= 15;
    if (itsNewYear) return "&#127878;"; // firework

    return undefined;

    // 127752 rainbow
    // 127878 firework 1
    // 127879 firework 2
    // 	&#10052; snowflakes
  }, []);

  return (
    <div className={styles.title}>
      <h1>{t("header.title")}</h1>
      {specialMessage && <SubHeading emoji={specialEmoji} text_code={specialMessage} />}
    </div>
  );
}

interface SubProps extends PropsWithChildren {
  text_code: string;
  emoji: string | undefined;
}

function SubHeading({ text_code, emoji }: SubProps) {
  const { t } = useTranslation("index");

  const span1 = useRef<HTMLSpanElement>(null);
  const span2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!emoji) return;
    if (span1.current) span1.current.innerHTML = emoji;
  }, [span1.current]);

  useEffect(() => {
    if (!emoji) return;
    if (span2.current) span2.current.innerHTML = emoji;
  }, [span2.current]);

  if (emoji) {
    return (
      <div className={styles.subHeading}>
        <span ref={span1} />
        <span>{t(text_code)}</span>
        <span ref={span2} />
      </div>
    );
  } else return <span>{t(text_code)}</span>;
}
