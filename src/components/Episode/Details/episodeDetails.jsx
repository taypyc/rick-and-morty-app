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
// eslint-disable-next-line
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

const EpisodeDetails = () => {
  const { id } = useParams();
  const [ episode, setEpisode ] = useState(null);
  const [ character, setCharacter ] = useState([]);  

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(response => {
        setEpisode(response.data);        
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, [id]);

  useEffect(() => {    
    console.log('Start');
    axios.get(`https://rickandmortyapi.com/api/character/24`)
      .then(response => {
        //console.log(response.data);        
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, []);
  
  return (
    //console.log(characters),
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
            <p>Characters of the episode: </p>
            
            {character ? 
              <CharacterCard key={character.id} character={character} /> 
              : console.log('asdasdsad', character)
            }
          </EpisodeInfo>
        </>
      )}
    </>
  );
};

export default EpisodeDetails;