import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    } 

    button{
      font-family: 'Lato', sans-serif;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export const Root = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const theme = { colors };
