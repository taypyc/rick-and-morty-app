import React, { useState } from 'react';
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
import Button from '@mui/material/Button';

const CharacterFilterButton = styled.div(
    ({ theme }) => css`
        position:fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: all .5s cubic-bezier(0.6, -0.28, 0.74, 0.05);
        width: ${theme.spacing._40};
        height: ${theme.spacing._40}; 
        background: ${theme.backBlack};
        cursor: pointer;
        ${theme.mixins.flex};        
        z-index: 11;

        &:hover {
            opacity: .6
        }
        
        &.toggle {
            top: 0;
            transform: translateY(0);
        }
    `,
)

const CharacterFilterForm = styled.div(
    ({ theme }) => css`
        position:fixed;
        right: 0;
        top: 0;
        width: ${theme.sidebarWidth}%;      
        bottom: 0;
        z-index: 10;
        color: ${theme.white};
        background: ${theme.white};
        ${theme.mixins.flex};
        flex-direction: column;
        transform: translateX(100%);
        transition: all 1s cubic-bezier(0.6, -0.28, 0.74, 0.05);
        padding: calc(${theme.spacing._20} * 2) ${theme.spacing._10};
        border: 1px solid ${theme.backBlack};
        border-radius: ${theme.spacing._8} 0 0 ${theme.spacing._8};

        &.toggle {
            transform: translateX(0);            
        }

        ${theme.media.mobile(css`
            width: 50%;
        `)}

        ${theme.media.phone(css`
            width: 100%;
        `)}
    `,
)

// Memoize the component using React.memo
const FilterForm = React.memo(
    ({ sendDataToParent}) => {        
        const [isFormOpened, setIsFormOpened] = useState(false);
        const [name, setName] = useState('');
        const [status, setStatus] = useState('alive');
        const [species, setSpecies] = useState('human');
        const [gender, setGender] = useState('male');
        
        const handleClick = () => {
            setIsFormOpened(!isFormOpened);
        }    
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;            

            const stateUpdates = {
                name: setName,
                status: setStatus,
                species: setSpecies,
                gender: setGender
            };

            if (stateUpdates[name]) {
                stateUpdates[name](value);                
            }            
        }
    
        const handleSubmitButton = () => {                                    
            sendDataToParent(name, status, species, gender)
        }
        
    
        return (
            <>            
                <CharacterFilterForm
                    {...(isFormOpened ? { 'className': 'toggle' } : {})}
                >   
                    <Box
                        component="form"
                        sx={{
                            '&': { width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            },
                        }}
                        onChange={handleInputChange}
                    >
                        <Box
                            component="div"
                            sx={{
                                '&': { width: '100%'},
                                '& > :not(style)': { mb: 2, width: '100%' },
                            }}                    
                        >
                            <TextField name="name" label="Type character name" variant="outlined" />
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                '&': { width: '100%', color: 'black', height: '100%', overflowY: 'auto'},
                                '& > :not(style)': { mb: 2, width: '100%' },
                                '& > :not(style):last-child': { mb: 0 },
                                '& .MuiFormGroup-root': { pl: 2 }
                                }}
                            >
                            <FormControl>
                                <FormLabel id="status">Character Status</FormLabel>
                                <RadioGroup
                                    aria-labelledby="character-status"                                    
                                    name="status"
                                    id='status'
                                    value={status}
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
                                    name="species"
                                    id="species"
                                    value={species}
                                >
                                    <FormControlLabel value="human" control={<Radio />} label="Human" />
                                    <FormControlLabel value="alien" control={<Radio />} label="Alien" />                                    
                                    <FormControlLabel value="humanoid" control={<Radio />} label="Humanoid" />
                                    <FormControlLabel value="cronenberg" control={<Radio />} label="Cronenberg" />                                    
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="gender">Character Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="character-gender"
                                    name="gender"
                                    id="gender"
                                    value={gender}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="genderless" control={<Radio />} label="Genderless" />
                                    <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                '&': { pt: 2, textAlign: 'center' },
                            }}                    
                            >
                            <Button variant="outlined" onClick={handleSubmitButton}>Submit</Button>
                        </Box>
                    </Box>                                
                </CharacterFilterForm>
                <CharacterFilterButton {...(isFormOpened ? { 'className': 'toggle' } : {})} onClick={handleClick}>
                    { isFormOpened ? (
                        <CloseIcon />
                    ): (
                        <TuneIcon />
                    )}
                </CharacterFilterButton>
                
            </>
        );
    }
)

export default FilterForm;