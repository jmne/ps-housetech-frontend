import { PropsWithChildren } from "react";
import styles from "./Cafeteriaplan.module.scss";

export function Fallback({ children }: PropsWithChildren) {
  return (
    <div className={styles.fallbackContainer}>
      <span className={styles.fallbackMessage}>{children}</span>
    </div>
  );
}
