import styled from "styled-components";

interface MainProps {
  isActive?: boolean;
}

export const Wrapper = styled.div<MainProps>`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  align-items: flex-start;
  margin-top: 2rem;
  gap: 1.5rem;
  border-bottom: 1px solid #e4e8f7;
  padding-bottom: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.5rem;
  width: 255px;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  isActive: boolean;
}

export const Arrow = styled.div<Props>`
  transform: ${({ isActive }) => isActive && "rotate(180deg)"};
  cursor: pointer;
  user-select: none;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 95px;
  cursor: pointer;
  user-select: none;

  & div {
    border: 1px solid #939dff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 0.125rem;
  }
`;
