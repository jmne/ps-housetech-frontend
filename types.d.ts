declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "";
