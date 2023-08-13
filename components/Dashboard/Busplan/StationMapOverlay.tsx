import * as Dialog from "@radix-ui/react-dialog";
import * as Overlay from "@/components/UI/Overlay";
import styles from "./Busplan.module.scss";

import IconMap from "assets/icons/map.svg";
import map from "assets/images/busstop.png";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import { Button } from "@/components/UI/Button";

export default function BusStationMap() {
  const { t } = useTranslation("index");
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className={styles.infoButton} iconSize="s" smallPadding>
          {t("busplan.map_button")}
          <IconMap alt="more info" />
        </Button>
      </Dialog.Trigger>
      <Overlay.Container setOpen={setOpen} open={open}>
        <Overlay.Header>
          <Dialog.Title>Leonardo Campus</Dialog.Title>
        </Overlay.Header>
        <Dialog.Description asChild>
          <Image src={map} alt="Map of Busstops" className={styles.busMap} priority />
        </Dialog.Description>
      </Overlay.Container>
    </Dialog.Root>
  );
}
