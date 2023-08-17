import { cardElementProps } from "./Container";
import styles from "./card.module.scss";

interface cardContentProps extends cardElementProps {
  as?: "ol" | "ul";
}

export function Content({ children, className, as }: cardContentProps) {
  if (as === "ol")
    return <ol className={[styles.content, className].join(" ")}>{children}</ol>;
  if (as === "ul")
    return <ul className={[styles.content, className].join(" ")}>{children}</ul>;

  return <div className={[styles.content, className].join(" ")}>{children}</div>;
}
