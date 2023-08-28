import { Step } from "../../Molecules/Step";
import { Container, Wrapper } from "./styles";

export const Steps = () => {
  return (
    <Wrapper>
      <Container>
        <Step number={1}>Datos</Step>
        <Step number={2} isActive>
          Arma tu plan
        </Step>
      </Container>
    </Wrapper>
  );
};
