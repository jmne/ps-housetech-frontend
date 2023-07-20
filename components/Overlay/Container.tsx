import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

import styles from "./Overlay.module.scss";
import IconClose from "assets/images/icon_close.svg";

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
        <Dialog.Close asChild>
          <button className={styles.close} onClick={handleClose}>
            <IconClose />
          </button>
        </Dialog.Close>
      </Dialog.Content>
      <Dialog.Overlay className={styles.background} />
    </Dialog.Portal>
  );
}
