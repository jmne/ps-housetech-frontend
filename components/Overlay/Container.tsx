import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Overlay.module.scss";
import { useEffect } from "react";
import { useTimeoutContext } from "context/TimeoutContext";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";

interface props extends Dialog.DialogContentProps {
  className?: string;
  setOpen: Function;
}

export function Container({ children, className, setOpen, ...props }: props) {
  const timeoutContext = useTimeoutContext();
  useEffect(() => {
    function resetLayout() {
      setOpen(false);
    }

    const timeoutHandler = new IdleHandler({
      origin: "overlay",
      resetFunction: resetLayout
    });

    if (timeoutContext.manager) timeoutContext.manager.addResetListener(timeoutHandler);
  }, [setOpen, timeoutContext.manager]);

  return (
    <Dialog.Portal>
      <Dialog.Content className={[styles.content, className].join(" ")} {...props}>
        {children}
      </Dialog.Content>
      <Dialog.Overlay className={styles.background} />
    </Dialog.Portal>
  );
}
