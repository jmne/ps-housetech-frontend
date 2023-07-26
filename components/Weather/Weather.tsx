import { WeatherReport } from "./Report/WeaterReport";
import * as Card from "@/components/Card";
import { useTranslation } from "next-i18next";
import { RainRadar } from "./RainRadar";

export function Weather() {
  const { t } = useTranslation("index");

  return (
    <Card.Container placement="smallTop">
      <Card.Headline>
        <Card.Title>{t("weather.title_report")}</Card.Title>
      </Card.Headline>
      <RainRadar />
    </Card.Container>
  );
}
