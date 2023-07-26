import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import styles from "./Button.module.scss";

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconSize?: "s" | "m";
  smallPadding?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, smallPadding, iconSize, ...props }, ref) => (
    <button
      className={[
        styles.base,
        iconSize === "m" ? styles.iconMedium : undefined,
        smallPadding ? styles.smallPadding : undefined,
        className
      ].join(" ")}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
