import { Event } from "types/Events";
import styles from "./Events.module.scss";
import indexStyles from "@/pages/index.module.scss"

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

// Icon Imports
import IconClock from "assets/images/icon_clock.svg";
import IconLocation from "assets/images/icon_location.svg";
import IconEvent from "assets/images/event.svg";
import { EventOverlay } from "./EventOverlay/EventOverlay";

interface props {
  data: Event;
}

export function EventCard({ data }: props) {
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
              data.start_date ? (
                <div className={styles.item}>
                  <IconClock />
                  <div>
                    <span>{dateFormatted}</span>
                    <span className={styles.divider}> | </span>
                    <span>{time}</span>
                  </div>
                </div>
              ) : (
                <></>
              )
            }
            {
              // If location is given -> Show location
              data.location ? (
                <div className={styles.item}>
                  <IconLocation />
                  <div>
                    <span>{data.location}</span>
                  </div>
                </div>
              ) : (
                <></>
              )
            }
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={indexStyles.overlayBackground}/>
        <Dialog.Content asChild>
          <EventOverlay event={data} setOverlayOpen={setOverlayOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
