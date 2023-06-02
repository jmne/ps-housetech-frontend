// IMPORTS - BUILTINS
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// IMPORTS - COMPONENTS
import Dish from "@/components/Cafeteriaplan/Dish";

// IMPORTS - ASSETS
import indexStyles from "@/pages/index.module.scss";
import cafeteriaStyles from "@/components/Cafeteriaplan/Cafeteriaplan.module.scss";
import { DishInformation } from "types/DishInformation";
import { useTranslation } from "next-i18next";

// IMPORTS - ICONS
import arrow_back from "assets/images/arrow_back.svg";
import arrow_forward from "assets/images/arrow_forward.svg";

export default function Cafeteriaplan() {
  const { t } = useTranslation("index");
  const { data, isLoading, error } = useCafeteriaplan();

  const olRef = useRef<HTMLOListElement>(null);
  const timer = useRef<number>();

  // getting the formatted Date from today
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();
  const formattedDate = `${day}.${month}.${year}`;

  const startTimer = () => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      if (olRef.current) {
        olRef.current.scrollTo({ top: 0, behavior: "smooth" });
        startTimer(); // recursive to repeat the timer
      }
    }, 2000);
  };

  useEffect(() => {
    startTimer(); // start timer, when component is used

    return () => {
      clearTimeout(timer.current); // clear timer afterwards
    };
  }, []);

  return (
    <section
      className={[
        indexStyles.smallContainer,
        indexStyles.contentSection,
        cafeteriaStyles.shadowFix
      ].join(" ")}
    >
      <div
        className={[indexStyles.cardHeadline, cafeteriaStyles.headlineMargin].join(" ")}
      >
        <h2>{t("cafeteria_plan.title")}</h2>
        <div className={cafeteriaStyles.date}>
          <Image
            src={arrow_back}
            alt={"Arrow Back"}
            fill={false}
            className={cafeteriaStyles.date}
          />
          <span className={cafeteriaStyles.dateText}>{formattedDate}</span>
          <Image
            src={arrow_forward}
            alt={"Arrow Forward"}
            fill={false}
            className={cafeteriaStyles.date}
          />
        </div>
      </div>
      <ol className={cafeteriaStyles.cafeteriaplan} ref={olRef}>
        {data.map((dish, index) =>
          index === 2 ? (
            <>
              <Dish dish={dish["item"]} key={index} />
              <div></div>
            </>
          ) : (
            <Dish dish={dish["item"]} key={index} />
          )
        )}
      </ol>
    </section>
  );
}
