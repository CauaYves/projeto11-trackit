import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from '../src/styles/GlobalStyle'
import ResetStyle from '../src/styles/ResetStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ResetStyle />
    <App />
  </React.StrictMode>
);

