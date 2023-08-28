import { useSelector } from "react-redux";

import { Text } from "../../Atoms/Text/Text";
import { Cobertura } from "../../Molecules/Cobertura";

import { Wrapper } from "./styles";

import ChoqueImg from "../../../Assets/Svg/choque.svg";
import AtropelloImg from "../../../Assets/Svg/atropello.svg";
import LlantaRobadaImg from "../../../Assets/Svg/llanta-robada.svg";

export const Coberturas = () => {
  const { value } = useSelector((state: any) => state.suma);

  return (
    <Wrapper>
      <Text size="1.25rem" color="#494f66">
        Agrega o quita coberturas
      </Text>

      <Cobertura
        img={LlantaRobadaImg}
        title="Llanta robada"
        text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
            y mucho más"
        aumentar={15}
        isActive
      />
      <Cobertura
        img={ChoqueImg}
        title="Choque y/o pasarte la luz roja"
        text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
            y mucho más"
        aumentar={20}
        isActive={value <= 16000}
      />
      <Cobertura
        img={AtropelloImg}
        title="Atropello en la vía Evitamiento"
        text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
            y mucho más"
        aumentar={50}
        isActive
      />
    </Wrapper>
  );
};
