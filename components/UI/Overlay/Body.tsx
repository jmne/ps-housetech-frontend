import { Description, DialogDescriptionProps } from "@radix-ui/react-dialog";
import { forwardRef } from "react";

const Body = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Description className={className} {...props} asChild>
        <div ref={ref}>{children}</div>
      </Description>
    );
  }
);

Body.displayName = "Body";

export { Body };
