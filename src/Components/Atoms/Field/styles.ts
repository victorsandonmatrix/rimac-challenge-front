import styled from "styled-components";

interface Props {
  isFocus: boolean;
  width?: string;
  error?: boolean;
}

export const Wrapper = styled.div<Props>`
  width: ${({ width }) => width || "296px"};
  height: 56px;
  border-radius: 0.25rem;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.brand.red : theme.colors.input.border};

  position: relative;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  & input {
    border: none;
    height: inherit;
    width: calc(100% - 1rem);
    outline: none;
    font-size: 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.paragraph};
    padding-left: 1rem;
  }

  & span {
    transition: 200ms ease-in-out;
    position: absolute;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.text.light} !important;

    left: ${({ isFocus }) => (isFocus ? "17%" : "15%")};
    font-size: ${({ isFocus }) => (isFocus ? "0.875rem" : "1rem")};
    top: ${({ isFocus }) => (isFocus ? "-2.5%" : "50%")};
    background-color: ${({ isFocus }) => (isFocus ? "#fff" : "transparent")};
  }
`;
