import React from 'react';
import { Box } from '@mui/material';
import MenuCardList from "./MenuCardList";
import ButtonStack from "./ButtonStack";
import { useDispatch } from 'react-redux'
import { resetFilters } from '../../features/cartSlice/cart'

function Menu(props) {
    // Reseting all filters
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(resetFilters())
    }, [])

    return (
        <>
            <ButtonStack />
            <Box sx={{
                padding: '10px 30px'
            }}>
                <MenuCardList />
            </Box>
        </>
    );
}

export default Menu;