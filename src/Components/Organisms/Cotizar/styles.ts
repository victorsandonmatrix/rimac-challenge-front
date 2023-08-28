import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & p > span {
    color: ${({ theme }) => theme.colors.brand.red};
  }

  @media (max-width: 750px) {
    align-items: center;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    background-color: #f7f8fc;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
