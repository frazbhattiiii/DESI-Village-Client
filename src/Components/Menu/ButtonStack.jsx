import React from 'react';
import { Box, Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';
import FilterDropDown from "./FilterDropDown";
import { useDispatch } from 'react-redux';
import { setTags } from '../../features/cartSlice/cart'


function ButtonStack(props) {
  const dispatch = useDispatch()
  const [offers, setOffers] = React.useState('')
  const [alignment, setAlignment] = React.useState('all')
  React.useEffect(() => {
    dispatch(setTags({ offers }))
  }, [offers])
  return (
    <>
      <Box sx={{
        marginRight: {
          xs: '2rem',
        }
      }}>
        <ToggleButtonGroup
          color='primary'
          value={alignment}
          exclusive
          onChange={(e, a) => setAlignment(a)}
          aria-label="outlined" sx={{
            marginTop: '2rem',
            marginLeft: {
              xs: '2rem',
              sm: '8rem',
              md: '8rem',
              lg: '8rem',
              xl: '8rem'
            },
            marginRight: {
              xs: '3rem',
            }
          }}>
          <ToggleButton value='all' onClick={() => setOffers('all')} variant='outlined'>All</ToggleButton>
          <ToggleButton value='offer' onClick={() => setOffers('discount')} variant='outlined'>Offers</ToggleButton>
          <ToggleButton value='delivery' onClick={() => setOffers('delivery')} variant='outlined'>Free Delivery</ToggleButton>
          <ToggleButton value='popular' onClick={() => setOffers('popular')} variant='outlined'>Popular</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Grid sx={{
        marginLeft: '8rem',
        marginTop: '2rem'
      }}>
        <FilterDropDown />
      </Grid>
    </>
  );
}

export default ButtonStack;