import { Image } from "../../Atoms/Image/Image";
import { Text } from "../../Atoms/Text/Text";

import { Phone, Wrapper } from "./styles";

import PhoneIcon from "../../../Assets/Svg/ic_phone.svg";

export const Llamanos = () => {
  return (
    <Wrapper>
      <Text>¿Tienes alguna duda?</Text>
      <Phone>
        <Image src={PhoneIcon} alt="Phone Icon" />
        <Text highlight>(01) 411 6001</Text>
        <Text highlight>Llámanos</Text>
      </Phone>
    </Wrapper>
  );
};
