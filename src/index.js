// Core
import React from 'react';
import ReactDOM from 'react-dom/client';

// Utils
import { BrowserRouter } from 'react-router-dom';

// Components
import { App } from 'components/App';

// Styles
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
