import { Cotizar } from "../../Components/Organisms/Cotizar";
import { Monto } from "../../Components/Organisms/Monto";
import { Steps } from "../../Components/Organisms/Steps";

import { MainLayout } from "../../Layouts/Main";

import { Content, Wrapper } from "./styles";

export const Home = () => {
  return (
    <MainLayout>
      <Wrapper>
        <Steps />
        <Content>
          <Cotizar />
          <Monto />
        </Content>
      </Wrapper>
    </MainLayout>
  );
};
