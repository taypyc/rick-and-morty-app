import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const ErrorWrapper = styled.div`
  ${({ theme }) => {    
    return css`      
      display: flex;
      max-width: 600px;
      margin: auto;
      height: 220px;
      overflow: hidden;
      background: #3c3e44;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing._16};
      border-radius: ${theme.spacing._8};      
    `
  }}
`

  return (
    <>
      <header>
        <Typography variant="h1">
          Oops!
        </Typography>
      </header>
      <ErrorWrapper>        
        <p>
          Page <i>{error.statusText.toLowerCase() || error.message.toLowerCase()}</i>
        </p>
      </ErrorWrapper>      
    </>
  );
}