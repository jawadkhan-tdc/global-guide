import { Avatar } from "@mui/material"

const CustomAvatar = ({ isMobile }) => {
    return (
        <>
            <label htmlFor="avatarInput" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Avatar
                    alt="Product Catalogue"
                    src=""
                    sx={{ width: isMobile ? 75 : 150, height: isMobile ? 75 : 150, margin: "8px", backgroundColor: 'transparent', border: '5px solid #fff', color: "transparent" }}
                />
                <span style={{ textDecoration: 'underline', cursor: 'pointer', marginLeft: '8px' }}>Attach Image</span>
            </label>
            <input
                id="avatarInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
            // onChange={handleFileUpload}
            />
        </>
    )
}

export default CustomAvatar
