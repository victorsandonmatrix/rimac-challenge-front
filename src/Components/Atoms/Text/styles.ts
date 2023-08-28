import styled from "styled-components";

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  highlight?: boolean;
  margin?: string;
}

export const Wrapper = styled.p<Props>`
  color: ${({ color, theme }) => (color ? color : theme.colors.text.paragraph)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};

  //if is highligthted text
  color: ${({ highlight }) => highlight && "#6F7DFF"};
`;
