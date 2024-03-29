import { PropsWithChildren } from "react";
import styles from "./card.module.scss";
import ErrorBoundary from "./ErrorBoundary";

export interface cardElementProps extends PropsWithChildren {
  className?: string;
}

interface containerProps extends cardElementProps {
  placement: containerOptions;
}

type containerOptions = "large" | "medium" | "smallTop" | "smallMiddle" | "smallBottom";

const containerType = {
  large: styles.large,
  medium: styles.middle,
  smallTop: styles.smallTop,
  smallMiddle: styles.smallMiddle,
  smallBottom: styles.smallBottom
};

export function Container({ children, placement, className }: containerProps) {
  return (
    <ErrorBoundary
      className={[styles.container, containerType[placement], styles.error].join(" ")}
    >
      <section
        className={[styles.container, containerType[placement], className].join(" ")}
      >
        {children}
      </section>
    </ErrorBoundary>
  );
}
