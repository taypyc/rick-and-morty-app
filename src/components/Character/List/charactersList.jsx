import { useCallback, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import CharacterCard from '../Card/characterCard';
import styled, { css } from 'styled-components';
import FilterForm from '../../FilterForm/filterForm';

const CharactersWrapper = styled.div(
  ({ theme }) => css`
    gap: ${theme.spacing._24};
    padding: ${theme.spacing._40} ${theme.spacing._16} calc(${theme.spacing._40} * 3);
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
    padding: ${theme.spacing._12} 0;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: ${theme.paginationHeight}px;
    opacity: ${theme.baseOpacity};

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
  const [error, setError] = useState('');

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
      })
      .catch(error => {        
        setCharacters([]);
        setError(error.response.data.error);        
      });
  }, [page, totalPages, query]);  

  const handleChange = (e,value) => {
    setPage(value);
    return e.target.innerText
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
        {characters.length ? characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        )) : <Typography>{error}</Typography> }
      </CharactersWrapper>

      <PaginationWrapper>
        <Stack spacing={1}>
          <Typography variant="h6" component="p">Page: {page}</Typography>          
          <Pagination count={totalPages} page={page} onChange={handleChange} shape="rounded" />
        </Stack>
      </PaginationWrapper>
    </>
  );
};

export default CharactersList;