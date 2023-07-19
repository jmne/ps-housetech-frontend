import * as Toast from "@radix-ui/react-toast";
import styles from "./Toast.module.scss";
import { PropsWithChildren } from "react";
import { ToastElement } from "./Toast";
import { useToastContext } from "context/ToastContext";

export function ToastProvider({ children }: PropsWithChildren) {
  const toastContext = useToastContext();
  return (
    <Toast.Provider swipeDirection="right">
      {children}
      {toastContext.info && (
        <ToastElement
          title={toastContext.info.title}
          caption={toastContext.info.caption}
          type={toastContext.info.type}
        />
      )}
      <Toast.Viewport className={styles.viewport} />
    </Toast.Provider>
  );
}
