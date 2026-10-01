import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { pageFromPath } from './data/pages';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App page={pageFromPath(window.location.pathname)?.id} />
  </React.StrictMode>
);

if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
