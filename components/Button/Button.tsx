import { ButtonHTMLAttributes, DetailedHTMLProps, LegacyRef, forwardRef } from "react";
import styles from "./Button.module.scss";

interface props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconSize?: "s" | "m";
  smallPadding?: boolean;
}

export const Button = forwardRef(
  (
    { children, className, smallPadding, iconSize, ...props }: props,
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={[
          styles.base,
          iconSize === "m" ? styles.iconMedium : undefined,
          smallPadding ? styles.smallPadding : undefined,
          className
        ].join(" ")}
        ref={ref ? ref : undefined}
        {...props}
      >
        {children}
      </button>
    );
  }
);
