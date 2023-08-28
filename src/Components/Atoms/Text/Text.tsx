import { FC } from "react";
import { Wrapper } from "./styles";

interface Props {
  size?: string;
  color?: string;
  weight?: string;
  margin?: string;
  highlight?: boolean;
  children: React.ReactNode;
}

export const Text: FC<Props> = ({
  size,
  color,
  margin,
  weight,
  children,
  highlight,
}) => {
  return (
    <Wrapper
      color={color}
      margin={margin}
      fontSize={size}
      fontWeight={weight}
      highlight={highlight}
    >
      {children}
    </Wrapper>
  );
};
