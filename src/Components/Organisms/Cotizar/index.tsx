import { useQueryClient } from "react-query";

import { Text } from "../../Atoms/Text/Text";
import { SumaAsegurada } from "../../Molecules/SumaAsegurada";
import { Vehiculo } from "../../Molecules/Vehiculo";
import { Coberturas } from "../Coberturas";

import { Container, Header, Wrapper } from "./styles";

export const Cotizar = () => {
  const queryClient = useQueryClient();
  const user: any = queryClient.getQueryData("user");

  const firstName = user && user.name.split(" ")[0];

  return (
    <Wrapper>
      <Container>
        {firstName && (
          <Header>
            <Text margin="1.5rem 0 0 0" size="40px" color="#494f66">
              ¡Hola, <span>{firstName}!</span>
            </Text>

            <Text size="1rem">Conoce las coberturas para tu plan</Text>
          </Header>
        )}

        <Vehiculo />
      </Container>
      <SumaAsegurada />
      <Coberturas />
    </Wrapper>
  );
};
