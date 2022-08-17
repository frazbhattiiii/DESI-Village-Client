import React from 'react';
import { InputAdornment , TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredItems } from '../../features/cartSlice/cart'

function SearchBar ( props ) {
    const dispatch = useDispatch()
    const [search, setSearch] = React.useState('')
    const { filter } = useSelector(state => state.cart)  
    const searchHandler = () => {
        dispatch(setFilteredItems({ search, filter }))
        setSearch('')
    }
    return (
        <>
            <TextField value={search} onChange={(e) => setSearch(e.target.value)} id="outlined-basic"  variant="filled" fullWidth  size = 'medium' InputProps={{
                style: {fontSize: 18,
                fontFamily: 'Poppins',
                    fontStyle:'italic',
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <Button
                            variant='contained'
                            color='error'
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                            startIcon={<SearchIcon />}
                            onClick={searchHandler}
                        >
                            Search
                        </Button>
                    </InputAdornment>
                ),
            }} autoFocus={false}
            sx={{
                backgroundColor:"white",
                borderRadius: ".75rem",
                width: {
                    xs: '18rem',
                    sm: '22rem'
                },
                border: "1px solid #e0e0e0",

            }}/>

        </>
    );
}

export default SearchBar;