import { Typography } from '@mui/material';

const Heading = ({ headingName, isMobile, isModal, color, textTransform, variant, textAlign }) => {
    return (
        <Typography
            variant= {variant || isMobile ? 'h5' : isModal ? 'h5' : 'h3'}
            textAlign={textAlign || "center"}
            color={color}
            textTransform={textTransform}
        >
            {headingName}
        </Typography>
    )
}

export default Heading
