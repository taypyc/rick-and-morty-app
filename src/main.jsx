import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { GlobalStyles } from './styles/global'
import CharactersList from './components/CharactersList/charactersList';
import CharacterDetails from './components/CharacterDetails/characterDetails';
import ErrorPage from "./components/ErrorPage/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharactersList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "character/:id",
    element: <CharacterDetails />
  }  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  </React.StrictMode>,
)
