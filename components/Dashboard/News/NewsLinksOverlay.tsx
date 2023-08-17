import * as Dialog from "@radix-ui/react-dialog";
import * as Overlay from "@/components/UI/Overlay";
import { useState } from "react";
import styles from "./News.module.scss";
import IconInstagram from "assets/icons/insta.svg";
import QRCode from "react-qr-code";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/UI/Button";
import { INSTAGRAM_TAG } from "utils/constants";

const insta_link = `https://www.instagram.com/${INSTAGRAM_TAG}`;

export function NewsLinksOverlay() {
  const { t } = useTranslation("index");
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className={styles.overlayTrigger} iconSize="s" smallPadding>
          {t("news.link_overlay_trigger")}
          <IconInstagram alt="Info" />
        </Button>
      </Dialog.Trigger>
      <Overlay.Container
        setOpen={setOpen}
        open={open}
        className={styles.overlayContainer}
      >
        <Overlay.Header
          dividerClass={styles.overlayDivider}
          className={styles.overlayHeader}
        >
          <Overlay.Title className={styles.overlayTitle}>Instagram Channel</Overlay.Title>
        </Overlay.Header>
        <Overlay.Body className={styles.overlayQRWrapper}>
          <QRCode
            bgColor="#fafafa"
            fgColor="#15171b"
            size={225}
            value={insta_link}
            className={styles.code}
          />
          <span>@{INSTAGRAM_TAG}</span>
        </Overlay.Body>
      </Overlay.Container>
    </Dialog.Root>
  );
}
