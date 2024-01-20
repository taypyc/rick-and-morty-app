import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import EpisodeCard from '../Card/episodeCard'; 
import styled, { css } from 'styled-components';

const EpisodesWrapper = styled.div(
  ({ theme }) => css`
    gap: ${theme.spacing._40};
    padding: ${theme.spacing._40} ${theme.spacing._40} calc(${theme.spacing._40} * 3);
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background: ${theme.backBlack};
    box-shadow: ${theme.shadows.md};

    ${theme.media.phone(css`        
        padding: ${theme.spacing._16} ${theme.spacing._16} calc(${theme.spacing._40} * 3);
        gap: ${theme.spacing._16};
    `)}
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
    z-index: 1;
    height: ${theme.paginationHeight}px;
    opacity: ${theme.baseOpacity};

    > div {
      display: inline-flex;
    }
  `  
)

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);  
  const [error, setError] = useState('');

  useEffect(() => {    
    axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then(response => {
        setEpisodes(response.data.results);
        setTotalPages(response.data.info.pages);        
      })
      .catch(error => {        
        setEpisodes([]);
        setError(error.response.data.error);        
      });
  }, [page, totalPages]);

  const handleChange = (e, value) => {
    setPage(value);
    return e.target.innerText
  };

  return (
    <>
      <header>
        <h1>
          Rick and Morty Episodes List
        </h1>                  
      </header>      
      <EpisodesWrapper>
        {episodes.length ? episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />          
        )) : <Typography>{error}</Typography> }
      </EpisodesWrapper>

      <PaginationWrapper>
        <Stack spacing={1}>
          <Typography variant="h6" component="p">Page: {page}</Typography>          
          <Pagination count={totalPages} page={page} onChange={handleChange} shape="rounded" />
        </Stack>
      </PaginationWrapper>
    </>
  );
};

export default EpisodeList;