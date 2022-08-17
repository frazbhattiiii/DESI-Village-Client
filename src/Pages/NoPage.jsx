import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function NoPage(props) {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >

            <Link to="/">
                <Box component="img" src="./images/nopage.jpg" alt="logo" width='100%'/>
            </Link>
        </div>
    );
}

export default NoPage;