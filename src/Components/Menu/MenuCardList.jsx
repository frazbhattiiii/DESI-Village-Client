import React , { useEffect } from 'react';
import MenuCard from "./MenuCard";
import { Grid , Box , Pagination } from '@mui/material';
import { getAllItems } from "../../features/cartSlice/cartActions";
import { setCurrentPagination } from '../../features/cartSlice/cart'
import { useDispatch , useSelector } from "react-redux";
 function MenuCardList ( props ) {
    const { 
        menuItems, 
        filteredItems,
        filter, 
        search,
        totalItems, 
        currentPagination
    } = useSelector ( state => state.cart );
    const dispatch = useDispatch ();
    const menuRef = React.useRef()
    let foodItems = menuItems.items;
     useEffect ( () => {
         dispatch(getAllItems());
     } , [  ] );

     useEffect(() => {
        if (search != '')
            menuRef.current.scrollIntoView({ behavior: 'smooth' })
     }, [search])

     return (
        <>{
            foodItems && filter == '' && search == '' && filteredItems.length == 0?
            <Box ref={menuRef} sx={ {
                minHeight: '80vh'
            } }>
                <Grid justifyContent="center" container spacing={ 4 }>
                    {foodItems.slice((currentPagination - 1) * 6, currentPagination * 6).map((item,index)=>{
                        return (
                            <Grid xs={12} sm={6} lg={4} xl={3} item key={index}>

                         <MenuCard item={item}/>
                      </Grid>)}
                    )}
                </Grid>
            </Box>:
            <Box ref={menuRef} sx={ {
                minHeight: '80vh'
            } }>
                <Grid justifyContent="center" container spacing={ 4 } sx={{ minHeight: '80vh' }}>
                    {filteredItems.slice((currentPagination - 1) * 6, currentPagination * 6).map((item,index)=>{
                        return (
                            <Grid xs={12} sm={6} lg={4} xl={3} item key={index}>

                         <MenuCard item={item}/>
                      </Grid>)}
                    )}


                </Grid>
            </Box>}
            <Box sx={{
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                padding:'1rem 0'
            }}>
                <Pagination onChange={(e, pagination) => dispatch(setCurrentPagination({ pagination }))} count={Math.ceil(totalItems / 6.0)} color='secondary'/>
            </Box>

        </>
    );
}

export default MenuCardList;

    