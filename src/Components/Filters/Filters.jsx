import React from 'react'
import { Box } from '@mui/material'
import Category from './Category'
import Prices from './Prices'
import { useDispatch } from 'react-redux'
import { setCategories } from '../../features/cartSlice/cart'

const Filters = () => {
  const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(setCategories())
    }, [])
  return (
    <Box>
        <Category/>
        <Prices />
    </Box>
  )
}

export default Filters