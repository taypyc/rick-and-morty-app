import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';

const LocationInfo = styled.div(
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

const LocationDetails = () => {
  const { id } = useParams();
  const [ location, setLocation ] = useState(null);  

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(response => {
        setLocation(response.data);        
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, [id]);  
  
  return (    
    <>
      {location && (
        <>
          <header>
            <h1>
              {location.name}
            </h1>
          </header>

          <LocationInfo>
            <p>Location type: {location.type}</p>
            <p>Location dimension: {location.dimension}</p>
          </LocationInfo>
        </>
      )}
    </>
  );
};

export default LocationDetails;