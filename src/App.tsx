import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Routes } from "./Routes";

import { GlobalStyles, Root, theme } from "./Themes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { cacheTime: Infinity },
    },
  });

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Root>
            <Routes />
          </Root>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
