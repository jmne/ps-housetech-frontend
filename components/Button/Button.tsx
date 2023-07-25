import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

interface props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconSize?: "s" | "m";
  smallPadding?: boolean;
}

export function Button({ children, className, smallPadding, iconSize, ...props }: props) {
  return (
    <button
      className={[
        styles.base,
        iconSize === "m" ? styles.iconMedium : undefined,
        smallPadding ? styles.smallPadding : undefined,
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
