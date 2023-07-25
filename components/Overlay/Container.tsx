import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Overlay.module.scss";

interface props extends Dialog.DialogContentProps {
  className?: string;
}

export function Container({ children, className, ...props }: props) {
  return (
    <Dialog.Portal>
      <Dialog.Content className={[styles.content, className].join(" ")} {...props}>
        {children}
      </Dialog.Content>
      <Dialog.Overlay className={styles.background} />
    </Dialog.Portal>
  );
}
