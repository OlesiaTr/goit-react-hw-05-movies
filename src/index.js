// Core
import React from 'react';
import ReactDOM from 'react-dom/client';

// Utils
import { BrowserRouter } from 'react-router-dom';

// Components
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
