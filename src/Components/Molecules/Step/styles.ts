import styled from "styled-components";

interface Props {
  isActive?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & span {
    border: 1px solid ${({ isActive }) => (isActive ? "#6F7DFF" : "#A3ABCC")};
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${({ isActive }) => (isActive ? "#6F7DFF" : "#fff")};
    font-weight: 700;
    font-size: 0.75rem;
    display: grid;
    place-items: center;
    color: ${({ isActive }) => (isActive ? "#fff" : "#C5CBE0")};
  }

  & p {
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.text.titles : "#A3ABCC"};
  }
`;
