import { ComponentPropsWithoutRef, useCallback } from "react";
import styles from "./rotationItem.module.scss";
import { RotationProvider, useRotationContext } from "./context";
import { handleRotation } from "./animations";

function Root({ children, className, ...props }: ComponentPropsWithoutRef<"div">) {
  const rotationContext = useRotationContext();

  const handleClick = useCallback(() => {
    if (
      !rotationContext.rootRef ||
      !rotationContext.rootRef.current ||
      !rotationContext.frontRef ||
      !rotationContext.frontRef.current ||
      !rotationContext.backRef ||
      !rotationContext.backRef.current
    )
      return;

    const halfHeight = rotationContext.rootRef.current.clientHeight / 2;

    rotationContext.rootRef.current.style.transform = `translateZ(-${halfHeight}px)`;
    rotationContext.frontRef.current.style.transform = `rotateY(0deg) translateZ(${halfHeight}px)`;
    rotationContext.backRef.current.style.transform = `rotateX(90deg) translateZ(${halfHeight}px)`;

    handleRotation(rotationContext.rootRef, halfHeight);
  }, [rotationContext.backRef, rotationContext.frontRef, rotationContext.rootRef]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      onClick={handleClick}
      ref={rotationContext.rootRef}
      {...props}
    >
      {children}
    </div>
  );
}

export default function RootWithContext({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <RotationProvider>
      <Root {...props}>{children}</Root>
    </RotationProvider>
  );
}
