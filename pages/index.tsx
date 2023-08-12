// IMPORTS - BUILTINS
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// IMPORTS - COMPONENTS
import Headline from "@/components/Dashboard/Headline/Headline";
import Busplan from "@/components/Dashboard/Busplan/Busplan";
import Cafeteriaplan from "@/components/Dashboard/Cafeteriaplan/Cafeteriaplan";

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";
import { Wayfinder } from "@/components/Dashboard/Wayfinder/Wayfinder";

import "swiper/css";
import "swiper/css/navigation";

// IMPORTS - CONTEXT
import { SelectedPersonProvider } from "context/PersonContext";
import { Weather } from "@/components/Dashboard/Weather/Weather";
import { News } from "@/components/Dashboard/News/News";

export default function Index() {
  return (
    <div className={styles.wrapper} id="index-wrapper">
      <Headline />
      <div className={styles.bodyWrapper}>
        <SelectedPersonProvider>
          <Wayfinder />
        </SelectedPersonProvider>
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
