import { Title as TitleElement, DialogTitleProps } from "@radix-ui/react-dialog";

export function Title({ children, className, ...props }: DialogTitleProps) {
  return (
    <TitleElement className={className} {...props}>
      {children}
    </TitleElement>
  );
}
