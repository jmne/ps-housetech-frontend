import * as Dialog from "@radix-ui/react-dialog";
import indexStyles from "@/pages/index.module.scss";
import styles from "./Busplan.module.scss";

import IconInfo from "assets/images/icon_info.svg";
import IconClose from "assets/images/icon_close.svg";
import map from "assets/images/technologiepark.jpg";
import Image from "next/image";
import { useState } from "react";

export default function BusStationMap() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <IconInfo alt="more info" className={styles.infoButton} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          className={[indexStyles.overlayContainer, styles.overlayContainer].join(" ")}
        >
          <Dialog.Title className={styles.overlayTitle}>
            Technologiepark
          </Dialog.Title>
          <Dialog.Description asChild>
            <Image src={map} alt="Map of Busstops" className={styles.busMap} />
          </Dialog.Description>
          <Dialog.Close onClick={() => setOpen(false)} asChild>
            <IconClose className={indexStyles.close} />
          </Dialog.Close>
        </Dialog.Content>
        <Dialog.Overlay className={indexStyles.overlayBackground} />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
