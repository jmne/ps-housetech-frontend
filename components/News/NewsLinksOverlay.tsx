import * as Dialog from "@radix-ui/react-dialog";
import * as Overlay from "@/components/Overlay";
import { useState } from "react";
import styles from "./News.module.scss";
import IconInfo from "assets/images/icon_info.svg";
import QRCode from "react-qr-code";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/Button";

const insta_wi_link = "https://www.instagram.com/wirtschaftsinformatik_wwu";
const insta_wi_tag = "@wirtschaftsinformatik";

const insta_wwu_link = "https://www.instagram.com/wwu_muenster";
const insta_wwu_tag = "@wwu_muenster";

export function NewsLinksOverlay() {
  const { t } = useTranslation("index");

  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className={styles.overlayTrigger} iconSize="s">
          {t("news.link_overlay_trigger")}
          <IconInfo alt="Info" />
        </Button>
      </Dialog.Trigger>
      <Overlay.Container setOverlayOpen={setOpen}>
        <Overlay.Title className={styles.overlayTitle}>Instagram Channel</Overlay.Title>
        <Overlay.Body className={styles.overlayContent}>
          <div className={styles.overlayQRWrapper}>
            <QRCode
              bgColor="#fafafa"
              fgColor="#15171b"
              size={225}
              value={insta_wi_link}
              className={styles.code}
            />
            <span>{insta_wi_tag}</span>
          </div>
        </Overlay.Body>
      </Overlay.Container>
    </Dialog.Root>
  );
}
