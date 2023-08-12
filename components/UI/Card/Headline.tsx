import { cardElementProps } from "./Container";
import styles from "./card.module.scss";

export function Headline({ children, className }: cardElementProps) {
  return <div className={[styles.headline, className].join(" ")}>{children}</div>;
}

export function Title({ children, className }: cardElementProps) {
  return <h2 className={[styles.title, className].join(" ")}>{children}</h2>;
}

export function Middle({ children, className }: cardElementProps) {
  return <div className={[styles.middle, className].join(" ")}>{children}</div>;
}

export function End({ children, className }: cardElementProps) {
  return <div className={[styles.end, className].join(" ")}>{children}</div>;
}
