import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/characterCard';
import styled, { css } from 'styled-components';

const CharactersWrapper = styled.div(
  ({ theme }) => css`    
    gap: ${theme.spacing._16};
    padding: ${theme.spacing._40} ${theme.spacing._16} 0;
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background: ${theme.backBlack};
    box-shadow: ${theme.shadows.md};
  `,
)

const Title = styled.h1(
  ({ theme }) => css`
    
  `,
)

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => { 
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Characters List</h1>
      </header>      
      <CharactersWrapper>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharactersWrapper>
    </>
  );
};

export default CharactersList;