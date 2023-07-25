import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

import styles from "./Overlay.module.scss";
import button_styles from "@/components/Button/Button.module.scss";

interface props extends PropsWithChildren {
  className?: string;
  setOverlayOpen: Function;
}

export function Container({ children, className, setOverlayOpen }: props) {
  function handleClose() {
    setOverlayOpen(false);
  }

  return (
    <Dialog.Portal>
      <Dialog.Content className={[styles.content, className].join(" ")}>
        {children}
      </Dialog.Content>
      <Dialog.Overlay className={styles.background} />
    </Dialog.Portal>
  );
}
