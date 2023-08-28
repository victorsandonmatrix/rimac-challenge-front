import { FC } from "react";

import { Input } from "../../Atoms/Input/Input";
import { Text } from "../../Atoms/Text/Text";

import { Wrapper } from "./styles";

interface Props {
  setTc: (val: boolean) => void;
}

export const TerminosCondiciones: FC<Props> = ({ setTc }) => {
  return (
    <Wrapper>
      <Input
        id="terminoscondiciones"
        type={"checkbox"}
        width={"1.25rem"}
        height={"1.25rem"}
        onChange={(event) => {
          setTc(event.target.checked);
        }}
      />
      <Text size="0.75rem">
        Acepto la <span>Política de Protecciòn de Datos Personales</span> y los{" "}
        <span>Términos y Condiciones.</span>
      </Text>
    </Wrapper>
  );
};
