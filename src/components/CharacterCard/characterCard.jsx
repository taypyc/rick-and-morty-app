import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.article(  
  ({ theme }) => css`  
    width: 49.5%;
    max-width: 600px;
    height: 220px;
    overflow: hidden;
    background: #3c3e44;
    display: flex;
    border-radius: ${theme.spacing._8};

    ${theme.media.tablet(css`
      width: 100%;
      max-width: 100%;
      height: 300px;
    `)}


    ${theme.media.phone(css`
      flex-direction: column;
      height: initial;      
    `)}
  `,
);

const ImgWrapper = styled.div(
  ({ theme }) => css`
    flex: 2;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      margin: 0;      
      object-position: center;
      object-fit: cover;

      ${theme.media.phone(css`
        height: 300px;
      `)}
    }
  `,
)

const ContentWrapper = styled.div`
  ${({ theme, $status }) => {
    const statusColor = {
      alive: theme.green,
      dead: theme.red,
      unknown: theme.gray,
    }

    return css`
      flex: 2;
      position: relative;
      padding: ${theme.spacing._12} ${theme.spacing._12};
      color: ${theme.white};
      display: flex;
      flex-direction: column;

      span,
      h2 {
        margin: 0;
        padding: 0;
      }

      h2 {
        font-size: ${theme.spacing._24};
      }

      span {
        font-size: 16px;
        font-weight: 500;
      }

      a {
        color: ${theme.whitesmoke};
        ${theme.mixins.hover(css`
          color: ${theme.primary};
          text-decoration: none;
        `)}
      }

      .text-gray {
        color: ${theme.gray};
      }

      .section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;        
      }

      ${theme.media.phone(css`
        .section + .section {
          margin-top: ${theme.spacing._20};
        }
      `)}

      .status {
        display: flex;
        align-items: center;
        text-transform: capitalize;

        &__icon {
          height: ${theme.spacing._8};
          width: ${theme.spacing._8};
          margin-right: ${theme.spacing.rem(6)};
          background: ${statusColor[$status]};
          border-radius: 50%;
        }
      }

      ${theme.media.phone(css`
        pointer-events: none;
      `)}
    `
  }}
`

const CharacterCard = ({ character }) => {
  return (
    <Container className='characterCard'>
      <ImgWrapper>
        <Link to={`/character/${character.id}`}>
          <img src={character.image} alt={character.name} />
        </Link>
      </ImgWrapper>
      <ContentWrapper $status={character.status.toLowerCase()}>
        <div className="section">
          <h2>
            <Link to={`/character/${character.id}`}>
              {character.name}
            </Link>
          </h2>          
          <span className="status">
            <span className="status__icon" /> {character.status} - {character.species}
          </span>
        </div>

        <div className="section">
          <span className="text-gray">Gender:</span>
            {character.gender}
        </div>
        <div className="section">
          <span className="text-gray">First seen in:</span>
          {character.location.name}
        </div>
      </ContentWrapper>     
    </Container>
  );
};

export default CharacterCard;