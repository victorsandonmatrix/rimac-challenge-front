import { useSelector } from "react-redux";

import { Text } from "../../Atoms/Text/Text";
import { Image } from "../../Atoms/Image/Image";
import { Button } from "../../Atoms/Button/Button";

import { Incluye, Info, Wrapper } from "./styles";

import CheckIcon from "../../../Assets/Svg/ic_check.svg";
import { useNavigate } from "react-router-dom";

export const Monto = () => {
  const { value } = useSelector((state: any) => state.monto);
  const navigate = useNavigate();

  const comprar = () => {
    navigate("/gracias");
  };

  return (
    <Wrapper>
      <Info>
        <Text color="#494f66" size="12px" weight="bold">
          MONTO
        </Text>
        <Text color="#494f66" size="1.75rem" margin="10px 0 4px 0">
          ${value.toFixed(2)}
        </Text>
        <Text size="12px" color="#676f8f">
          mensuales
        </Text>
      </Info>

      <Incluye>
        <Text color="#494f66" size="1rem">
          El precio incluye:
        </Text>

        <ul>
          <li>
            <Image src={CheckIcon} alt="check icon" />
            <Text>Llanta de respuesto</Text>
          </li>
          <li>
            <Image src={CheckIcon} alt="check icon" />
            <Text>Analisis de motor</Text>
          </li>
          <li>
            <Image src={CheckIcon} alt="check icon" /> <Text>Aros gratis</Text>
          </li>
        </ul>
      </Incluye>

      <Button width="224px" onClick={comprar}>
        LO QUIERO
      </Button>
    </Wrapper>
  );
};
