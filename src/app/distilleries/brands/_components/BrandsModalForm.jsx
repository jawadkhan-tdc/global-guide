"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import CustomButton from "@/components/CustomButton";
import Heading from "@/components/Heading";
import CustomAvatar from "@/components/CustomAvatar";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";

const BrandsModalForm = ({ handleCloseModal, isMobile }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('Country');
    const [changeContent, setChangeContent] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
    }

    const handleNextClick = () => {
        if (changeContent) {
            // save Release Data, when change content is false
            const releaseData = {
                releaseName: inputValue,
            }
            // set release Data in local storage
            localStorage.setItem('releaseData', JSON.stringify(releaseData));

            setInputValue('');
            setChangeContent(false);

            // close modal
            handleCloseModal();
        } else {
            // save distelleryBrand Data, when change content is false
            const distelleryBrandData = {
                brandName: inputValue,
                brandCountry: selectValue
            }
            // set distelleryBrand Data in local storage
            localStorage.setItem('distelleryBrandData', JSON.stringify(distelleryBrandData));

            setInputValue('');
            setSelectValue('Country');
            setChangeContent(true);
        }
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
                    <Heading isModal={true} headingName={changeContent ? 'Add Release' : 'Add Brands'} />
                </Box>

                {/* Avatar */}
                <Box mb={2} width="70%">
                    <CustomAvatar isMobile={isMobile} />
                </Box>

                {/* Distellery Name */}
                <Box mb={2} width="70%">
                    <CustomInput inputName={changeContent ? 'Release Name' : 'Brand Name'} value={inputValue} setValue={handleInputChange} />
                </Box>

                {/* Country */}
                {!changeContent && (
                    <Box mb={5} width="70%">
                        <CustomSelect isMobile={isMobile} selectName="Country" selectValue={selectValue} setSelectValue={handleSelectChange} />
                    </Box>
                )}

                {/* Next Button */}
                <Box mb={2} width="70%" textAlign="center">
                    <CustomButton onClick={handleNextClick} btnName={changeContent ? 'Create' : 'Next'} width="65%" fontWeight={700} />
                </Box>
            </Box>
        </>
    )
}

export default BrandsModalForm
