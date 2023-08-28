import { Image } from "../../Atoms/Image/Image";

import { Wrapper } from "./styles";

import LogoRimac from "../../../Assets/Svg/Logo-rimac.svg";
import { Llamanos } from "../../Molecules/Llamanos/Llamanos";

export const Header = () => {
  return (
    <Wrapper>
      <Image src={LogoRimac} alt="Logo Rimac" />
      <Llamanos />
    </Wrapper>
  );
};
