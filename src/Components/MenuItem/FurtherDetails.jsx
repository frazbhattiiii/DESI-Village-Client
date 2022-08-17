import React from 'react';
import { Typography,Box } from "@mui/material";

function FurtherDetails ( {right,left}) {
    return (
        <>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                gap:'4rem',
                mt:'.5rem',
            }} >
                <Typography variant='body2' color='yellowgreen' fontFamily='poppins'>
                    {left}
                </Typography>
                <Typography variant='body2' color='mediumvioletred' fontFamily='poppins' sx={{
                    marginLeft:'1rem',
                }}>
                    {right===false?'No':right}
                    {right===true?'Yes':''}
                </Typography>
            </Box>
        </>
    );
}

export default FurtherDetails;