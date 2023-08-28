import { useQueryClient } from "react-query";

import { Image } from "../../Atoms/Image/Image";
import { Text } from "../../Atoms/Text/Text";

import { Info, Wrapper } from "./styles";

import ImagePlaca from "../../../Assets/Svg/placa-img.svg";

export const Vehiculo = () => {
  const queryClient = useQueryClient();

  const userlogged: any = queryClient.getQueryData("userlogged");

  return (
    <Wrapper>
      {userlogged && (
        <Info>
          <Text size="0.75rem" color="#a3abcc">
            Placa: {userlogged.placa}
          </Text>
          <Text size="1.25rem" color="#494f66">
            Wolkswagen 2019 Golf
          </Text>
        </Info>
      )}

      <Image src={ImagePlaca} alt="Men image" />
    </Wrapper>
  );
};
