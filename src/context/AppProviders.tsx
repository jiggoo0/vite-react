import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
    <ThemeProvider>{children}</ThemeProvider>
  </BrowserRouter>
);

export default AppProviders;