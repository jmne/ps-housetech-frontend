import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Overlay.module.scss";
import * as Separator from "@radix-ui/react-separator";

interface props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dividerClass?: string;
}

export function Header({ children, className, dividerClass, ...props }: props) {
  return (
    <div className={[styles.header, className].join(" ")} {...props}>
      {children}
      <Separator.Root
        className={[styles.separator, dividerClass].join(" ")}
        orientation="horizontal"
      />
    </div>
  );
}
