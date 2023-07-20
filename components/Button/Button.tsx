import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

interface props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconSize?: "s" | "m";
}

export function Button({ children, className, iconSize, ...props }: props) {
  return (
    <button
      className={[
        styles.base,
        iconSize === "m" ? styles.iconMedium : undefined,
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
