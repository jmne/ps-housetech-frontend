// IMPORTS - BUILTINS
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// IMPORTS - COMPONENTS

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";

import "swiper/css";
import "swiper/css/navigation";

// IMPORTS - CONTEXT
import {
  Headline,
  Wayfinder,
  Weather,
  Cafeteriaplan,
  News,
  Busplan
} from "@/components/Dashboard";

export default function Index() {
  return (
    <div className={styles.wrapper} id="index-wrapper">
      <Headline />
      <div className={styles.bodyWrapper}>
        <Wayfinder />
        <Weather />
        <Cafeteriaplan />
        <News />
        <Busplan />
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
