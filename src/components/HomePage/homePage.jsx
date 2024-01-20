import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

const NavBlockWrapper = styled.nav(
    ({ theme }) => css`          
        gap: ${theme.spacing._40};
        padding: ${theme.spacing._40} ${theme.spacing._16};
        display: flex;
        overflow: hidden;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        background: ${theme.backBlack}; 

        ${theme.media.phone(css`
            flex-direction: column;
            height: initial;
        `)}
    `,
)

const NavBlock = styled.div(
    ({theme}) => css`
        width: 49.5%;
        max-width: 600px;
        height: 220px;
        overflow: hidden;
        background: #3c3e44;
        ${theme.mixins.flex}
        border-radius: ${theme.spacing._8};

        ${theme.media.tablet(css`
            width: 100%;
            max-width: 100%;            
        `)}       

        a {
            color: ${theme.whitesmoke};
        }        
    `
)

const HomePage = () => {
    return (
        <>
            <header>
                <h1>
                    Rick and Morty Application
                </h1>
            </header>
            <NavBlockWrapper>                
                <NavBlock>
                    <h6>
                        <Link to={`/character/`}>
                            Characters
                        </Link>
                    </h6>
                </NavBlock>
                <NavBlock>
                    <h6>
                        <Link to={`/episode/`}>
                            Episodes
                        </Link>
                    </h6>                    
                </NavBlock>
                <NavBlock>
                    <h6>
                        <Link to={`/location/`}>
                            Location
                        </Link>
                    </h6>                    
                </NavBlock>
            </NavBlockWrapper>
        </>
    )
}

export default HomePage