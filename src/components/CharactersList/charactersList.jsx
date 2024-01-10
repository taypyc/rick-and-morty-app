import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/characterCard';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled, { css } from 'styled-components';
import FilterForm from '../FilterForm/filterForm';

const CharactersWrapper = styled.div(
  ({ theme }) => css`
    gap: ${theme.spacing._24};
    padding: ${theme.spacing._40} ${theme.spacing._16};
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background: ${theme.backBlack};
    box-shadow: ${theme.shadows.md};
  `,
)

const PaginationWrapper = styled.div(
  ({ theme }) => css`
    text-align: center;
    color: ${theme.backBlack};
    background: ${theme.white};
    padding: ${theme.spacing._24} 0;

    > div {
      display: inline-flex;
    }
  `    
)

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);  
  const [query, setQuery] = useState('');

  // Callback function to receive data from child
  const receiveDataFromChild = useCallback(
    (name, status, species, gender) => {            
      // Generating the query string
      const queryParams = new URLSearchParams({
        name,
        status,
        species,        
        gender
      });
      
      // Generating the final URL
      const finalQuery = `&${queryParams.toString()}`;
      setQuery(finalQuery);
      setPage(1);
    }, [])

  useEffect(() => {    
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}${query}`)
      .then(response => {
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
        console.log(response.error);
      })
      .catch(error => {        
        console.error('Error fetching characters:', error);        
      });
  }, [page, totalPages, query]);  

  const handleChange = (value) => {
    setPage(value);
  };

  return (
    <>
      <header>        
        <Typography variant="h1">
          Rick and Morty Characters List
        </Typography>        
      </header>
      <FilterForm sendDataToParent={receiveDataFromChild} />      
      <CharactersWrapper>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}        
      </CharactersWrapper>

      <PaginationWrapper>
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
      </PaginationWrapper>
    </>
  );
};

export default CharactersList;