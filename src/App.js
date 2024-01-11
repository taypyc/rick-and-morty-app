import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { GlobalStyles } from './styles/global'
import CharactersList from './components/CharactersList/charactersList';
import CharacterDetails from './components/CharacterDetails/characterDetails';
import ErrorPage from './components/ErrorPage/error-page';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />      
      <main>        
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}

export default App;
