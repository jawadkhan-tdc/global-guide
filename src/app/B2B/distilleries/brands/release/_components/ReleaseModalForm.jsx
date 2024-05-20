"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import CustomButton from "@/components/CustomButton";
import Heading from "@/components/Heading";
import CustomAvatar from "@/components/CustomAvatar";
import CustomInput from "@/components/CustomInput";

const ReleaseModalForm = ({ handleCloseModal, isMobile }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmitClick = () => {
        const releaseData = {
            distelleryBrandReleaseName: inputValue,
        }
        // set release Data in local storage
        localStorage.setItem('distelleryBrandReleaseData', JSON.stringify(releaseData));

        setInputValue('');
        // close modal
        handleCloseModal();
    }

    return (
        <>
            {/* Modal Form Component */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: isMobile ? '300px' : '600px',
                margin: 'auto',
                padding: '0 20px',
            }}>
                {/* Close Button */}
                <Box width="100%">
                    <Button onClick={() => handleCloseModal()}
                        sx={{
                            color: '#fff',
                            cursor: 'pointer',
                            float: 'right',
                            left: '40px'
                        }}>
                        <CloseIcon />
                    </Button>
                </Box>

                {/* Heading */}
                <Box mb={2} width="70%">
                    <Heading isModal={true} headingName='Add Release'/>
                </Box>

                {/* Avatar */}
                    <Box mb={2} width="70%">
                        <CustomAvatar isMobile={isMobile} />
                    </Box>
                

                {/* Release Name */}
                <Box mb={5} width="70%">
                    <CustomInput inputName='Release Name' value={inputValue} setValue={handleInputChange} />
                </Box>

                {/* Submit Button */}
                <Box mb={2} width="70%" textAlign="center">
                    <CustomButton onClick={handleSubmitClick} btnName='Create' width="65%" fontWeight={700} />
                </Box>
            </Box>
        </>
    )
}

export default ReleaseModalForm
