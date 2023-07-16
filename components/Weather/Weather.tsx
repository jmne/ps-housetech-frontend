import { WeatherReport } from "./Report/WeaterReport";
import * as Card from "@/components/Card";
import { useTranslation } from "next-i18next";

export function Weather() {
  const { t } = useTranslation("index");

  return (
    <Card.Container placement="smallTop">
      <Card.Headline>
        <Card.Title>{t("weather.title_report")}</Card.Title>
      </Card.Headline>
      <WeatherReport />
    </Card.Container>
  );
}
