import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 4rem;

  & p:nth-child(1) {
    color: ${({ theme }) => theme.colors.text.titles};
    margin-bottom: 1rem;
    align-self: flex-start;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & button {
      @media (min-width: 768px) {
        align-self: flex-start;
        width: 192px;
      }
    }
  }
`;
