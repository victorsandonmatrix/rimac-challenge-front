import { useDispatch, useSelector } from "react-redux";

import { Text } from "../../Atoms/Text/Text";
import { Image } from "../../Atoms/Image/Image";

import { Btn, Counter, Info, MinMax, Wrapper } from "./styles";

import Add from "../../../Assets/Svg/gl_add.svg";
import Remove from "../../../Assets/Svg/gl_remove.svg";

import { SET_SUMA } from "../../../App/Actions/suma";

export const SumaAsegurada = () => {
  const MAX = 16500;
  const MIN = 12500;

  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.suma);

  const add = () => {
    if (value < MAX) {
      dispatch({ type: SET_SUMA, payload: value + 100 });
    }
  };

  const remove = () => {
    if (value > MIN) {
      dispatch({ type: SET_SUMA, payload: value - 100 });
    }
  };

  return (
    <Wrapper>
      <Info>
        <Text size="1rem" color="#494f66">
          Indica la suma asegurada
        </Text>

        <MinMax>
          <Text size="0.75rem" color="#676f8f">
            MIN ${MIN.toLocaleString("es-ES")}
          </Text>
          <span></span>
          <Text size="0.75rem" color="#676f8f">
            MAX ${MAX.toLocaleString("es-ES")}
          </Text>
        </MinMax>
      </Info>

      <Counter>
        <Btn onClick={remove}>
          <Image src={Remove} alt="remove icon" />
        </Btn>

        <Text size="1rem" color="#494f66">
          $ {value.toLocaleString("es-ES")}
        </Text>

        <Btn onClick={add}>
          <Image src={Add} alt="add icon" />
        </Btn>
      </Counter>
    </Wrapper>
  );
};
