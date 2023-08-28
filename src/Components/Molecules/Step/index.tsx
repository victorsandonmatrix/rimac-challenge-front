import { FC } from "react";
import { Text } from "../../Atoms/Text/Text";
import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  number: number;
  isActive?: boolean;
}

export const Step: FC<Props> = ({ children, number, isActive }) => {
  return (
    <Wrapper isActive={isActive}>
      <span>{number}</span>
      <Text size="1rem">{children}</Text>
    </Wrapper>
  );
};
