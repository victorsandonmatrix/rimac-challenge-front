import { Image } from "../../Atoms/Image/Image";
import { Text } from "../../Atoms/Text/Text";

import { Info, Title, Wrapper } from "./styles";

import HeroImg from "../../../Assets/Svg/hero-img.svg";
import HeroImgLg from "../../../Assets/Svg/hero-img-lg.svg";

export const BannerSeguro = () => {
  return (
    <Wrapper>
      <Info>
        <Text size="0.625rem" weight="700" margin="0.75rem 0 0 0">
          ¡NUEVO!
        </Text>

        <Title>
          <Text size="1.75rem" color="#494F66" margin="0 0.5rem 0 0">
            Seguro
          </Text>
          <Text size="1.75rem">Vehicular</Text>
          <Text size="1.75rem">Tracking</Text>
        </Title>

        <Text>Cuentanos donde le haras seguimiento a tu seguro</Text>
      </Info>

      <Image src={HeroImg} alt="Seguro Vehicular" />

      <Image
        src={HeroImgLg}
        alt="Seguro Vehicular"
        width="320px"
        height="250px"
      />
    </Wrapper>
  );
};
