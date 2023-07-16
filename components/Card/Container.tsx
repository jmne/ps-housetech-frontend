import { PropsWithChildren } from "react";
import styles from "./card.module.scss";

export interface cardElementProps extends PropsWithChildren {
  className?: string;
}

interface containerProps extends cardElementProps {
  placement: containerOptions;
}

type containerOptions = "large" | "medium" | "smallTop" | "smallMiddle" | "smallBottom";
type containerClasses = {
  [key in containerOptions]: string;
};

const containerType: containerClasses = {
  large: styles.large,
  medium: styles.middle,
  smallTop: styles.smallTop,
  smallMiddle: styles.smallMiddle,
  smallBottom: styles.smallBottom
};

export function Container({ children, placement, className }: containerProps) {
  return (
    <section
      className={[styles.container, containerType[placement], className].join(" ")}
    >
      {children}
    </section>
  );
}
