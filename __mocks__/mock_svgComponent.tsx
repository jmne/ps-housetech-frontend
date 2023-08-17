import * as React from "react";
import { ImageProps } from "next/image";

export const mockImage = (props: ImageProps): React.ReactElement => {
  // in my case, I was only using these props, but you may need to filter out more if you are using more props
  // that shouldn't be rested onto an <img /> element
  const { objectFit, objectPosition, src, ...filteredProps } = props;

  return <img src={"assets/images/bus.png"} {...filteredProps} />;
};
