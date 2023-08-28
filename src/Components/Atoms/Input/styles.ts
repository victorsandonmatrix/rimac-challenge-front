import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  error?: boolean;
}

export const Wrapper = styled.input<Props>`
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "296px"};
  height: ${({ height }) => height || "56px"};

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 99999s ease-in-out 0s;
  }
`;
