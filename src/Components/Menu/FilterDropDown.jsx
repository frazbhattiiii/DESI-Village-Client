import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredItems } from '../../features/cartSlice/cart'

export default function FilterDropDown() {
    const dispatch = useDispatch()
    const [filter, setFilter] = React.useState('');
    const { search } = useSelector(state => state.cart)
    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    React.useEffect(() => {
        dispatch(setFilteredItems({ filter, search }))
    }, [filter])

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">filter</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={filter}
                label="Age"
                onChange={handleChange}
                sx={{
                    width: '10rem',
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='Desi'>Desi Khabay</MenuItem>
                <MenuItem value='Fast Food'>Fast Food</MenuItem>
                <MenuItem value='Cafe'>Cafe</MenuItem>
                <MenuItem value='Desert'>Desert</MenuItem>
                <MenuItem value='Others'>Others</MenuItem>
            </Select>
        </FormControl>
    );
}