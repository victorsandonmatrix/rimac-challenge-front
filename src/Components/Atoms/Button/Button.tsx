import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  height?: string;
  width?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<Props> = ({
  children,
  disabled,
  onClick,
  height,
  width,
  type,
}) => {
  return (
    <Wrapper
      height={height}
      width={width}
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};
