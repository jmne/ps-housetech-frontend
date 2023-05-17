// IMPORTS - BUILTINS
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

// IMPORTS - COMPONENTS
import Headline from "@/components/Headline/Headline";
import Busplan from '@/components/Busplan/Busplan'

// IMPORTS - ASSETS
import styles from '@/pages/index.module.scss'


export default function Index() {
  const { t } = useTranslation("index")
  console.log(t)

  return (
    <div className={styles.wrapper}>
      <Headline />
      <div className={styles.bodyWrapper}>
        <div className={[styles.largeContainer, styles.contentSection].join(" ")}>{t("index.wayfinder")}</div>
        <Busplan />
        <div className={[styles.smallContainer, styles.contentSection].join(" ")}>{t('index.cafeteria_plan')}</div>
        <div className={[styles.overlayContainer, styles.contentSection].join(" ")}>Overlay</div>
        <div className={[styles.smallContainer, styles.contentSection].join(" ")}>{t('index.news')}</div>
      </div>
    </div>
  );
}


//@ts-ignore
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['index']))
  }
})