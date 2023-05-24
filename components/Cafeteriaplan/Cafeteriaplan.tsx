// IMPORTS - BUILTINS
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { useEffect, useState } from "react";

// IMPORTS - COMPONENTS
import Dish from "@/components/Cafeteriaplan/Dish";

// IMPORTS - ASSETS
import indexStyles from "@/pages/index.module.scss";
import cafeteriaStyles from "@/components/Cafeteriaplan/Cafeteriaplan.module.scss";
import { DishInformation } from "types/DishInformation";
import { useTranslation } from "next-i18next";

export default function Cafeteriaplan() {
  const { t }=useTranslation("index");
  const { data, isLoading, error } = useCafeteriaplan();

  return (
    <section
      className={[indexStyles.smallContainer, indexStyles.contentSection].join(" ")}
    >
      <div className={indexStyles.cardHeadline}>
        <h2>{t("cafeteria_plan.title")}</h2>
      </div>
      <ol className={cafeteriaStyles.cafeteriaplan}>
        {data.map((dish, index) => (
          <Dish dish={dish} key={index} />
        ))}
      </ol>
    </section>
  );
}
