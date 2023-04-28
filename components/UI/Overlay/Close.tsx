import { Close as CloseDialog, DialogCloseProps } from "@radix-ui/react-dialog";
import styles from "./Overlay.module.scss";
import IconClose from "assets/icons/close.svg";

export function Close({ children, className, ...props }: DialogCloseProps) {
  return (
    <CloseDialog className={[styles.close, className].join(" ")} {...props}>
      {children ? children : <IconClose />}
    </CloseDialog>
  );
}
