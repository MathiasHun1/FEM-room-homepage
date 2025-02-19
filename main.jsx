import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './src/styles/global.scss';

import App from './src/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
