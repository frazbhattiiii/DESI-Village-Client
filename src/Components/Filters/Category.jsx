import React from 'react'
import { Paper, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setFilteredItems } from '../../features/cartSlice/cart'

const Category = () => {
    const dispatch = useDispatch()
    const { categoriesCount } = useSelector(state => state.cart)
    const FilterTitle = styled(Typography)({
        fontWeight: "bold",
        fontSize: '15px',
        fontStyle: 'italic',
        cursor: 'pointer'
    })
    const FilterContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px'
    })
    const categoryFilterHandler = (category) => {
        dispatch(setFilteredItems({ filter: category, search: '' }))
    }

  return (
    <Paper sx={{ padding: '20px', backgroundColor: '#F6F7F8' }} >
        <Box>
            <FilterContainer key='All'>
                <FilterTitle onClick={() => categoryFilterHandler('')} sx={{
                fontStyle: 'normal',
                    cursor:'pointer'
            }}>All</FilterTitle>
            </FilterContainer>
            {
                Object.keys(categoriesCount).map(
                    category => (
                        <FilterContainer key={category}>
                            <FilterTitle onClick={() => categoryFilterHandler(category)}>{category}</FilterTitle>
                            <Typography>{categoriesCount[category]}</Typography>
                        </FilterContainer>
                    )
                )
            }
        </Box>
    </Paper>
  )
}

export default Category