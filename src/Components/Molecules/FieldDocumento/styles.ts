import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  margin-bottom: 0.5rem;

  & select {
    width: 96px;
    height: 58px;
    border: 1px solid ${({ theme }) => theme.colors.input.border};
    border-right: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: red;
    background-color: #fff;
    background-image: url("src/Assets/Svg/chevrot.svg");
    background-repeat: no-repeat;
    background-position: 75% 50%;
    color: ${({ theme }) => theme.colors.text.titles};
    font-size: 1rem;
    padding-left: 1rem;
    border-radius: 0.25rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  & div:nth-child(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
