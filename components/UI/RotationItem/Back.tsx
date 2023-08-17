import { ComponentPropsWithoutRef } from "react";
import styles from "./rotationItem.module.scss";
import { useRotationContext } from "./context";

export default function Back({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const rotationContext = useRotationContext();
  return (
    <div
      className={[styles.background, styles.easteregg, className].join(" ")}
      ref={rotationContext.backRef}
      {...props}
    >
      {children}
    </div>
  );
}
