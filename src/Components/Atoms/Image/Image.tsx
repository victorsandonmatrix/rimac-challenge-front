import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  src: string;
  alt: string;
  height?: string;
  width?: string;
}

export const Image: FC<Props> = ({ src, alt, height, width }) => {
  return <Wrapper src={src} alt={alt} width={width} height={height} />;
};
