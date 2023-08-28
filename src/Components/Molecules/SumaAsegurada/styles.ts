import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.75rem;
  margin-top: 3.5rem;
  font-family: "Lato", sans-serif;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MinMax = styled.div`
  display: flex;
  gap: 0.5rem;

  & span {
    height: 1rem;
    width: 1px;
    background-color: #e4e8f7;
  }
`;

export const Counter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 11px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  @media (max-width: 750px) {
    padding: 1rem;
    width: 296px;
    justify-content: space-between;
  }
`;

export const Btn = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
`;
