import { FC } from "react";

import { Header } from "../../Components/Organisms/Header/Header";

import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
