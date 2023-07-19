import { PropsWithChildren } from "react";
import styles from "./Overlay.module.scss";

interface props extends PropsWithChildren {
  className?: string;
}

export function Title({ children, className }: props) {
  return <h2 className={[styles.header, className].join(" ")}>{children}</h2>;
}
