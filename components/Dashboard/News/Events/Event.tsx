import { Event } from "types/Events";
import styles from "./Events.module.scss";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

// Icon Imports
import IconClock from "assets/icons/clock.svg";
import IconLocation from "assets/icons/location.svg";
import IconEvent from "assets/icons/event.svg";
import { EventOverlay } from "./EventOverlay/EventOverlay";
import { Button } from "@/components/UI/Button";
import { useTranslation } from "next-i18next";
import { Info } from "@/components/UI/Info";

interface props {
  data: Event;
}

export function EventCard({ data }: props) {
  const { t } = useTranslation("index");
  const [overlayOpen, setOverlayOpen] = useState(false);

  const date = new Date(data.start_date);
  const dateFormatted = date.toLocaleDateString("de-de");
  const time = date.toLocaleTimeString("de-de").slice(0, 5);

  return (
    <Dialog.Root open={overlayOpen} onOpenChange={setOverlayOpen}>
      <Dialog.Trigger asChild>
        <div className={styles.eventContainer} onClick={() => setOverlayOpen(true)}>
          <div className={styles.imageContainer}>
            {data.image ? (
              <img src={data.image} alt="Event Image" />
            ) : (
              <div>
                <IconEvent />
              </div>
            )}
          </div>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.info}>
            {
              // If date is given -> Show date
              data.start_date && (
                <Info>
                  <IconClock />
                  <span style={{ whiteSpace: "nowrap" }}>
                    {dateFormatted} | {time}
                  </span>
                </Info>
              )
            }
            {
              // If location is given -> Show location
              data.location && (
                <Info>
                  <IconLocation />
                  {data.location}
                </Info>
              )
            }
            <Button className={styles.button}>{t("news.view_more_hint")}</Button>
          </div>
        </div>
      </Dialog.Trigger>
      <EventOverlay event={data} setOpen={setOverlayOpen} open={overlayOpen} />
    </Dialog.Root>
  );
}
