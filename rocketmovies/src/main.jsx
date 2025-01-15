import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/global';

import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

import Details from './pages/Details/Details';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
