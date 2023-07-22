import { PropsWithChildren } from "react";

interface props extends PropsWithChildren {
  className?: string;
}

export function Body({ children, className }: props) {
  return <div className={className}>{children}</div>;
}
