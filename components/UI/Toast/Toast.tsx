import * as Toast from "@radix-ui/react-toast";
import styles from "./Toast.module.scss";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useToastContext } from "context/ToastContext";

export interface ToastInformation {
  title: string;
  caption: string;
  type: "info" | "error" | "success";
}

export function ToastElement({ title, caption, type }: ToastInformation) {
  const toastContext = useToastContext();

  const typeClass = {
    info: styles.info,
    error: styles.error,
    success: styles.success
  };

  return (
    <Toast.Root
      className={[styles.root, typeClass[type]].join(" ")}
      duration={2500}
      open={true}
      onOpenChange={(open) => {
        if (!open) toastContext.push(undefined);
      }}
    >
      <InfoCircledIcon className={styles.icon} />
      <Toast.Title className={styles.title}>{title}</Toast.Title>
      <Toast.Description asChild>
        <span className={styles.caption}>{caption}</span>
      </Toast.Description>
    </Toast.Root>
  );
}
