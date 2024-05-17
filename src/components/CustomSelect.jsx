import { TextField, Typography, MenuItem } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Countries } from "@/constants/countriesData";

const CustomSelect = ({isMobile, selectName, selectValue, setSelectValue, defaultVal}) => {
    return (
        <>
            <Typography variant="p" sx={{ textTransform: "uppercase", color: 'white' }}>{selectName}</Typography>
            <TextField
                select
                defaultValue={defaultVal || "Country"}
                value={selectValue}
                onChange={setSelectValue}
                fullWidth
                SelectProps={{
                    IconComponent: ExpandMoreIcon,
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#f2f2f2',
                            borderRadius: 0
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                    },
                    '& .MuiOutlinedInput-root:hover fieldset': {
                        borderColor: '#ffffff',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                    },
                    '& .MuiSelect-icon': {
                        color: '#fff',
                        fontSize: isMobile? '3rem': '5rem'
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    marginTop: 0.5
                }}
            >
                {Countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    )
}

export default CustomSelect
