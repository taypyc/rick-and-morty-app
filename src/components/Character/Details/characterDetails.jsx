import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography';

const CharacterCardWrapper = styled.div(
  ({theme}) => css`    
    display: flex;
    gap: ${theme.spacing._20};
    width: 600px;
    max-width: 100%;      
    margin: 0 auto;
    padding: ${theme.spacing._40} ${theme.spacing._16} 0;
`,
)
  
const CharacterImage = styled.div(
  ({theme}) => css`
    max-width: 300px;
    max-height: 300px;
    border-radius: ${theme.spacing._8};
    overflow: hidden;
`,
)

const CharacterInfo = styled.div(
  ({theme}) => css`
    max-width: 300px;
    max-height: 300px;
    border-radius: ${theme.spacing._8};
    overflow: hidden;
`,
)

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, [id]);
  
  return (
    <>
      {character && (
        <>
          <header>            
            <Typography variant="h1">
              {character.name}
            </Typography>
          </header>

          <CharacterCardWrapper>
            <CharacterImage>
              <img src={character.image} alt={character.name} />
            </CharacterImage>
            <CharacterInfo>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              { character.type ?
                  <p>Type: {character.type}</p>
                : ''
              }
              <p>Gender: {character.gender}</p>
              <p>Location: {character.location.name}</p>
            </CharacterInfo>            
          </CharacterCardWrapper>
        </>
      )}
    </>
  );
};

export default CharacterDetails;