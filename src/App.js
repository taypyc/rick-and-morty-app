import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { GlobalStyles } from './styles/global'
import CharactersList from './components/Character/List/charactersList';
import CharacterDetails from './components/Character/Details/characterDetails';
import EpisodeList from './components/Episode/List/episodeList';
import EpisodeDetails from './components/Episode/Details/episodeDetails';
import LocationList from './components/Location/List/locationList';
import LocationDetails from './components/Location/Details/locationDetails'
import ErrorPage from './components/ErrorPage/error-page';

const router = createBrowserRouter([
  {
    path: "/",    
    element: <CharactersList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/character",
    element: <CharactersList />,
  },
  {
    path: "/character/:id",
    element: <CharacterDetails />
  },
  {
    path: "/episode",
    element: <EpisodeList />
  },
  {
    path: "/episode/:id",
    element: <EpisodeDetails />
  },
  {
    path: "/location",
    element: <LocationList />
  },
  {
    path: "/location/:id",
    element: <LocationDetails />
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
