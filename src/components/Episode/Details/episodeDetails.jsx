import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
// eslint-disable-next-line
import CharacterCard from '../../Character/Card/characterCard';

const EpisodeInfo = styled.div(
  ({theme}) => css`
    ${theme.mixins.flex};
    flex-direction: column;
    gap: ${theme.spacing._20};
    width: 600px;
    max-width: 100%;      
    margin: 0 auto;
    padding: ${theme.spacing._40} ${theme.spacing._16} 0;
  `,
)

const EpisodeDetails = () => {
  const { id } = useParams();
  const [ episode, setEpisode ] = useState(null);  

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(response => {
        setEpisode(response.data);        
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, [id]);  
  
  return (    
    <>
      {episode && (
        <>
          <header>
            <h1>
              {episode.name}
            </h1>
          </header>

          <EpisodeInfo>
            <p>Air date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </EpisodeInfo>
        </>
      )}
    </>
  );
};

export default EpisodeDetails;