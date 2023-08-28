import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;

    & img {
      transform: rotateY(180deg);
      height: 325px;
      max-width: 100%;

      object-fit: cover;
      object-position: 70% 5%;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  max-width: 480px;

  & p:nth-child(3) {
    font-weight: 300;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  & button {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & p:nth-child(2),
    p:nth-child(1) {
      font-size: 28px;
    }

    & button {
        align-self: center;
    }
  }
`;
