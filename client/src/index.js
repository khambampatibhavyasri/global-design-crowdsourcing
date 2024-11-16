// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global CSS file
import App from './App';
import { MessageProvider } from './context/MessageContext'; // Import the provider
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
