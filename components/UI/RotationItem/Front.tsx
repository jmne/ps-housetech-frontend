import { ComponentPropsWithoutRef } from "react";
import styles from "./rotationItem.module.scss";
import { useRotationContext } from "./context";

export default function Front({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const rotationContext = useRotationContext();
  return (
    <div
      className={[styles.background, styles.information, className].join(" ")}
      ref={rotationContext.frontRef}
      {...props}
    >
      {children}
    </div>
  );
}
