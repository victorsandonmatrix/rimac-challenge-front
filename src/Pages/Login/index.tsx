import { BannerSeguro } from "../../Components/Molecules/BannerSeguro/BannerSeguro";
import { FormLogin } from "../../Components/Organisms/FormLogin/FormLogin";

import { MainLayout } from "../../Layouts/Main";

import { Wrapper } from "./styles";

export const Login = () => {
  return (
    <MainLayout>
      <Wrapper>
        <BannerSeguro />
        <FormLogin />
      </Wrapper>
    </MainLayout>
  );
};
