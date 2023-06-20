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
import { MapProvider } from "context/MapContext";
import { Weather } from "@/components/Weather/Weather";
import { News } from "@/components/News/News";
import { useOverlayContext } from "context/OverlayContext";

export default function Index() {
  const overlayContext = useOverlayContext()

  return (
    <div className={styles.wrapper}>
      <Headline />
      <div
        className={
          overlayContext.current_overlay
            ? [styles.bodyWrapper, styles.bodyMuted].join(" ")
            : styles.bodyWrapper
        }
      >
        <MapProvider>
          <SelectedPersonProvider>
            <Wayfinder />
          </SelectedPersonProvider>
        </MapProvider>
        <Weather />
        <Cafeteriaplan />
        <News />
        <Busplan />
      </div>
      {overlayContext.current_overlay ? overlayContext.current_overlay : undefined}
    </div>
  );
}

//@ts-ignore
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["index"]))
  }
});
