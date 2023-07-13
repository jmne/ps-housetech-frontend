// IMPORTS - BUILTINS
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// IMPORTS - COMPONENTS
import Headline from "@/components/Headline/Headline";
import Busplan from "@/components/Busplan/Busplan";
import Cafeteriaplan from "@/components/Cafeteriaplan/Cafeteriaplan";

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";
import { Wayfinder } from "@/components/Wayfinder/Wayfinder";

// IMPORTS - CONTEXT
import { SelectedPersonProvider } from "context/PersonContext";
import { Weather } from "@/components/Weather/Weather";
import { News } from "@/components/News/News";

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
