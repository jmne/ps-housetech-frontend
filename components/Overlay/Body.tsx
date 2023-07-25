import { Description, DialogDescriptionProps } from "@radix-ui/react-dialog";

export function Body({ children, className, ...props }: DialogDescriptionProps) {
  return (
    <Description className={className} {...props} asChild>
      <div>{children}</div>
    </Description>
  );
}
