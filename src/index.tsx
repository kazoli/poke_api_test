import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './components/core/App';

/**
 * Container for root
 * @date 2022. 12. 20. - 14:00:20
 */
const container = document.getElementById('root')!;
/**
 * Root
 * @date 2022. 12. 20. - 14:00:20
 */
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
