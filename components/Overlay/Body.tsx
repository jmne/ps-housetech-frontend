import { PropsWithChildren } from "react";
import styles from "./Overlay.module.scss";

interface props extends PropsWithChildren {
  className?: string;
}

export function Body({ children, className }: props) {
  return <div className={className}>{children}</div>;
}
