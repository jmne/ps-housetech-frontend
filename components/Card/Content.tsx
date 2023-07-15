import { cardElementProps } from "./Container";
import styles from "./card.module.scss";

export function Content({ children, className }: cardElementProps) {
  return <div className={[styles.content, className].join(" ")}>{children}</div>;
}
