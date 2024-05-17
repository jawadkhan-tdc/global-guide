import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    { label: 'Filter', year: 2000 },
    { label: 'Sort By: Newest/Recent/top Appreciated', year: 2000 },
];


const CustomAutocomplete = ({ labelName, width, defaultValue, getSearchIcon }) => {
    return (
        <Autocomplete
            disablePortal
            id="filter"
            defaultValue={defaultValue}
            options={top100Films}
            popupIcon={getSearchIcon && (<SearchIcon sx={{ color: 'white' }} />)}
            sx={{
                width: { width },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#f2f2f2',
                        borderRadius: 0,
                        border: 0
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#fff',
                        border: 0
                    },
                },
                '& .MuiOutlinedInput-root:hover fieldset': {
                    borderColor: '#ffffff',
                },
                '& .MuiInputBase-input::placeholder': {
                    color: '#fff',
                },
                '& .MuiInputBase-input': {
                    color: '#fff',
                },
                '& .MuiSelect-icon': {
                    color: 'red',
                },
                '& .MuiAutocomplete-popupIndicator': {
                    color: 'white',
                    transform: getSearchIcon ? 'none !important': '',  // Prevent rotation
                    transition: getSearchIcon? 'none !important': '', // Prevent transition effect
                },
                '& .MuiInputLabel-root': {
                    color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                },
            }}
            renderInput={(params) => <TextField {...params} label={labelName} />}
        />
    )
}

export default CustomAutocomplete
