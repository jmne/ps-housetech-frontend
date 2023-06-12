// IMPORTS - BUILTINS
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// IMPORTS - COMPONENTS
import Headline from "@/components/Headline/Headline";
import Busplan from "@/components/Busplan/Busplan";
import Cafeteriaplan from "@/components/Cafeteriaplan/Cafeteriaplan";

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";
import { Wayfinder } from "@/components/Wayfinder/Wayfinder";

// IMPORTS - CONTEXT
import { SelectedPersonProvider } from "context/PersonContext";
import { MapProvider } from "context/MapContext";
import { Overlay } from "@/components/Overlay/Overlay";

export default function Index() {
  const { t } = useTranslation("index");

  return (
    <div className={styles.wrapper}>
      <Headline />
      <div className={styles.bodyWrapper}>
        <MapProvider>
          <SelectedPersonProvider>
            <Wayfinder />
          </SelectedPersonProvider>
        </MapProvider>
        <Busplan />
        <Cafeteriaplan />
        <Overlay />
        <div className={[styles.smallContainer, styles.contentSection].join(" ")}>
          {t("news.title")}
        </div>
      </div>
    </div>
  );
}

//@ts-ignore
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["index"]))
  }
});
