import * as Dialog from "@radix-ui/react-dialog";
import styles from "./DrupalOverlay.module.scss";
import InfoIcon from "assets/icons/info.svg";
import { Button } from "@/components/UI/Button";
import { useTranslation } from "next-i18next";

export function Trigger() {
  const { t } = useTranslation("index");
  return (
    <Dialog.Trigger asChild>
      <Button iconSize="m" className={styles.trigger}>
        <InfoIcon className={styles.infoIcon} />
        {t("header.overlay_available")}
      </Button>
    </Dialog.Trigger>
  );
}
