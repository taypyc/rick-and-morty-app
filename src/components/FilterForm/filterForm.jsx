import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import styled, { css } from 'styled-components';

const CharacterFilterButton = styled.div(
    ({ theme }) => css`
        position:fixed;
        right: 0;
        top: ${theme.spacing._40};
        width: ${theme.spacing._40};
        height: ${theme.spacing._40}; 
        background: ${theme.backBlack};
        cursor: pointer;
        ${theme.mixins.flex};
        z-index: 11;
    `,
)

const CharacterFilterForm = styled.div(
    ({ theme }) => css`
        position:fixed;
        right: 0;
        top: 0;
        width: 25%;
        bottom: 0;
        z-index: 10;
        color: ${theme.white};
        background: ${theme.backBlack};        
        ${theme.mixins.flex};
        transform: translateX(100%);
        transition: transform .5s ease-in-out;

        &[toggle] {
            transform: translateX(0);
        }
    `,
)

const FilterForm = () => {
    const [isFormOpened, setIsFormOpened] = useState(false);

    const handleClick = () => {
        setIsFormOpened(!isFormOpened);        
    }

    return (
        <>
            <CharacterFilterForm
                {...(isFormOpened ? { 'toggle': '' } : {})}
            >
                asdasdasd
            </CharacterFilterForm>
            <CharacterFilterButton onClick={handleClick}>
                { isFormOpened ? (
                    <CloseIcon />
                ): (
                    <TuneIcon />
                )}
            </CharacterFilterButton>
            
        </>
    );
};

export default FilterForm;