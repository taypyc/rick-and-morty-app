import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import styled, { css } from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
        background: ${theme.white};
        ${theme.mixins.flex};
        transform: translateX(100%);
        transition: all 1s cubic-bezier(0.6, -0.28, 0.74, 0.05);
        padding: calc(${theme.spacing._40} * 2) ${theme.spacing._40};
        overflow: auto;

        &.toggle {
            transform: translateX(0);
            box-shadow: -5px 0 25px ${theme.backBlack};
        }
    `,
)

const FilterForm = ({ sendDataToParent }) => {
    const [isFormOpened, setIsFormOpened] = useState(false);
    const filterData = {
        name: '',
        status: 'alive',
        species: 'alien',
        gender: 'male',
    };
    /*const [filterData, setFilterData] = useState([{
        name: '',
        status: 'alive',
        species: 'alien',
        gender: 'male',
    }]);*/

    const handleClick = () => {
        setIsFormOpened(!isFormOpened);
    }

    const handleSubmit = () => {
                
    }

    const handleFormChange = (e) => {        
        filterData[e.target.name] = e.target.value;
        //setFilterData(filterData);

        console.log(filterData);

        sendDataToParent(filterData);
    }    

    return (
        <>            
            <CharacterFilterForm
                {...(isFormOpened ? { 'className': 'toggle' } : {})}
            >                
                <Box
                    component="form"
                    sx={{
                    '&': { width: '100%', color: 'black', height: '100%'},
                    '& > :not(style)': { mb: 2, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    onChange={handleFormChange}
                    >                    
                    <TextField name="name" label="Type character name" variant="outlined" />
                    <FormControl>
                        <FormLabel id="status">Character Status</FormLabel>
                        <RadioGroup
                            aria-labelledby="character-status"
                            defaultValue={filterData.status}
                            name="status"
                            id='status'
                        >
                            <FormControlLabel value="alive" control={<Radio />} label="Alive" />
                            <FormControlLabel value="dead" control={<Radio />} label="Dead" />
                            <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="species">Character Species</FormLabel>
                        <RadioGroup
                            aria-labelledby="character-species"
                            defaultValue={filterData.species}
                            name="species"
                            id="species"
                        >
                            <FormControlLabel value="alien" control={<Radio />} label="Alien" />
                            <FormControlLabel value="human" control={<Radio />} label="Human" />                            
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="gender">Character Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="character-gender"
                            defaultValue={filterData.gender}
                            name="gender"
                            id="gender"
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="genderless" control={<Radio />} label="Genderless" />
                            <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
                        </RadioGroup>
                    </FormControl>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                    </Stack>
                </Box>                
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