// IMPORTS - BUILTINS
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// IMPORTS - COMPONENTS
import Headline from "@/components/Headline/Headline";
import Busplan from "@/components/Busplan/Busplan";
import Cafeteriaplan from "@/components/Cafeteriaplan/Cafeteriaplan";

// IMPORTS - ASSETS
import styles from "@/pages/index.module.scss";

export default function Index() {
  const { t } = useTranslation("index");
  console.log(t);

  return (
    <div className={styles.wrapper}>
      <Headline />
      <div className={styles.bodyWrapper}>
        <div className={[styles.largeContainer, styles.contentSection].join(" ")}>
          {t("wayfinder.title")}
        </div>
        <Busplan />
        <Cafeteriaplan />
        <div className={[styles.overlayContainer, styles.contentSection].join(" ")}>
          Overlay
        </div>
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
