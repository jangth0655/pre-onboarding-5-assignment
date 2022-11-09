import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'styles/GlobalStyle';
import Theme from './styles/theme';
import Router from './Router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Router />,
    errorElement: 'loading',
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
