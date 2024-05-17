import { Button } from "@mui/material";

const CustomButton = ({ borderRadius, variant, noHoverBgClr, btnName, width, fontWeight,onClick, color, backgroundColor, textTransform, padding, paddingRight, cursor}) => {
    return (
        <Button variant={variant || "contained"}
        onClick={onClick}
        sx={{ 
            borderRadius: borderRadius || 0, 
            mr: 1, 
            color: color || '#000', 
            backgroundColor: backgroundColor || 'white',
            width: {width},
            padding: padding || '10px',
            paddingRight: paddingRight,
            textTransform: textTransform,
            fontWeight: {fontWeight},
            cursor: {cursor},
            '&:hover': {
                backgroundColor: noHoverBgClr? 'transparent': '#999',
            },
            }}>
            {btnName}
        </Button>
    )
}

export default CustomButton
