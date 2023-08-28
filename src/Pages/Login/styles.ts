import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 35% 65%;
  }
`;
