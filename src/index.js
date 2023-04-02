import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App, { theme } from './App.js'; // Importing the theme object from App.js
import { ThemeProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);