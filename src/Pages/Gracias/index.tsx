import { useQueryClient } from "react-query";

import { Image } from "../../Components/Atoms/Image/Image";
import { Text } from "../../Components/Atoms/Text/Text";

import { MainLayout } from "../../Layouts/Main";

import { Content, Wrapper } from "./styles";

import Illustration from "../../Assets/Svg/Illustration.svg";

import { Button } from "../../Components/Atoms/Button/Button";

export const Gracias = () => {
  const query = useQueryClient();

  const user: any = query.getQueryData("user");

  const { email } = user || { email: "" };

  return (
    <MainLayout>
      <Wrapper>
        <Image src={Illustration} alt="illustration" />

        <Content>
          <Text color="#ef3340" size="2.25rem">
            ¡Te damos la bienvenida!
          </Text>
          <Text color="#494f66" size="2.25rem">
            Cuenta con nosotros para proteger tu vehículo
          </Text>
          <Text size="1rem" color="#676f8f">
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
          </Text>

          <Text weight="bold" size="1rem">
            {email}
          </Text>

          <Button>cómo usar mi seguro</Button>
        </Content>
      </Wrapper>
    </MainLayout>
  );
};
