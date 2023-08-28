import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Wrapper = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors.brand.red};
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: #fff;

  width: ${({ width }) => width || "296px"};
  height: ${({ height }) => height || "56px"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};

  :disabled {
    background-color: ${({ theme }) => theme.colors.text.light};
    cursor: not-allowed;
  }
`;
