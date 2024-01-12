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

const ContentWrapper = styled.div`
  ${({ theme }) => {
    return css`      
      position: relative;
      padding: ${theme.spacing._12} ${theme.spacing._12};
      color: ${theme.white};
      ${theme.mixins.flex};
      flex: 1;
      flex-direction: column;
      gap: ${theme.spacing._16};

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
        ${theme.mixins.flex};
        gap: ${theme.spacing._8};
      }

      ${theme.media.phone(css`
        .section + .section {
          margin-top: ${theme.spacing._20};
        }
      `)}      

      ${theme.media.phone(css`
        pointer-events: none;
      `)}
    `
  }}
`

const EpisodeCard = ({ episode }) => {
  return (
    <Container className='characterCard'>      
      <ContentWrapper>
        <div className="section">
          <h2>
            <Link to={`/episode/${episode.id}`}>
              {episode.name}
            </Link>
          </h2>
        </div>

        <div className="section">
          <span className="text-gray">Air date:</span>
          {episode.air_date}
        </div>
        <div className="section">
          <span className="text-gray">episode:</span>          
          {episode.episode}
        </div>
      </ContentWrapper>     
    </Container>
  );
};

export default EpisodeCard;