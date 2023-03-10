import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from "styled-components";
import { theme } from 'constants/theme';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/characters">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
