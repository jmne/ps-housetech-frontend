// IMPORTS - BUILTINS
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { useEffect, useState, useRef, Fragment } from "react";
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
import { SampleDishes, sample_dishes } from "types/SampleDishes";

function formatDateForData(d: Date) {
  const month_short = d.getMonth()
  const day_short = d.getDate()

  const year = d.getFullYear()
  const month = month_short.valueOf() < 10 ? `0${month_short}` : month_short
  const day = day_short.valueOf() < 10 ? `0${day_short}` : day_short

  return `${year}-${month}-${day}`
}

export default function Cafeteriaplan() {
  const { t } = useTranslation("index");
  const { data, isLoading, error } = useCafeteriaplan();

  const olRef = useRef<HTMLOListElement>(null);
  const timer = useRef<number>();

  // getting the formatted Date from today
  const today = new Date()
  const current_date_title = today.toLocaleDateString("en-gb").replaceAll("/", ".")

  const [selectedDate, setSelectedDate] = useState(formatDateForData(today))
  const [currentData, setCurrentData] = useState<SampleDishes>()

  useEffect(() => {
    const selection = data.find((e) => e.date === selectedDate)
    if (selection) setCurrentData(selection)
  }, [selectedDate])

  const startTimer = () => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      if (olRef.current) {
        olRef.current.scrollTo({ top: 0, behavior: "smooth" });
        startTimer(); // recursive to repeat the timer
      }
    }, 5000);
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
          <span className={cafeteriaStyles.dateText}>{current_date_title}</span>
          <Image
            src={arrow_forward}
            alt={"Arrow Forward"}
            fill={false}
            className={cafeteriaStyles.date}
          />
        </div>
      </div>
      <ol className={cafeteriaStyles.cafeteriaplan} ref={olRef}>
        {currentData ?
          currentData.item.map((dish, index) =>
            index === 2 ? (
              <Fragment key={`${dish.meal}${dish.price1}`}>
                <Dish dish={dish} />
                <div></div>
              </Fragment>
            ) : (
              <Dish dish={dish} key={`${dish.meal}${dish.price1}`} />
            )
          )
          :
          <></>
        }
      </ol>
    </section>
  );
}
