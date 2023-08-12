import { PropsWithChildren } from "react";
import styles from "./info.module.scss";

interface props extends PropsWithChildren {
  className?: string;
  type?: "outlined" | "text";
  muted?: boolean;
}

export function Info({ children, className, type, muted }: props) {
  return (
    <div
      className={[
        styles.container,
        type === "outlined" ? styles.outlined : undefined,
        type === "text" ? styles.text : undefined,
        muted ? styles.muted : undefined,
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}
