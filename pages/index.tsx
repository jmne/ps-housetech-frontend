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
import { useTimeoutContext } from "context/TimeoutContext";
import { useEffect } from "react";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useRouter } from "next/router";

export default function Index() {
  const overlayContext = useOverlayContext();
  const timeoutContext = useTimeoutContext();
  const router = useRouter();

  useEffect(() => {
    function resetIndex() {
      overlayContext.setOverlay(undefined);
      router.push("/", "/", { locale: "en" });
    }

    const idleHandler = new IdleHandler({ origin: "index", resetFunction: resetIndex });
    if (timeoutContext.manager) timeoutContext.manager.addResetListener(idleHandler);
  }, [timeoutContext.manager, overlayContext, router]);

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
