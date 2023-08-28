import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: calc(100% - 250px);

  @media (min-width: 950px) {
    justify-content: space-evenly;
  }

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;
