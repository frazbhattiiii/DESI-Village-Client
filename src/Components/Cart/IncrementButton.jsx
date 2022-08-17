import React,{useState} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import { useDispatch, useSelector } from 'react-redux';
import { handleIncrement , handleDecrement , calculateTotal } from "../../features/cartSlice/cart";

const IncrementButton = ({ stock = 0, initial = 1, onAdd ,Quantity,itemId,itemSize}) => {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState (Quantity);
    const increment = () => {
        setCounter(counter + 1);
        dispatch(handleIncrement({itemId,itemSize}));
        dispatch(calculateTotal());
    }
    const decrement = () => {
        counter<=1?setCounter(1):setCounter(counter - 1);
        dispatch(handleDecrement({itemId,itemSize}));
        dispatch(calculateTotal());
    }
    const handleAddBtnClick = () => {onAdd(counter)};

    return (
        <Box>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems='center'
            >
                <FormControl
                    sx={{
                        m: 1,
                        width: '11ch',
                    }}
                    variant='outlined'
                >
                    <OutlinedInput
                        id='outlined-adornment-weight'
                        endAdornment={<InputAdornment position='end'>Qty</InputAdornment>}
                        aria-describedby='outlined-weight-helper-text'
                        type='number'
                        inputProps={{
                            'aria-label': 'weight',
                            type: 'number',
                            value: counter,
                            max: 20,
                            min: 1,
                            disabled: true,
                        }}
                    />
                    <FormHelperText id='outlined-weight-helper-text' sx={{
                        marginLeft:'1.2rem'
                    }}>
                        Available
                    </FormHelperText>
                </FormControl>
                <Stack direction={{ xs: 'row-reverse', sm: 'column' }}>
                    <IconButton
                        aria-label='addButton'
                        onClick={increment}
                    >
                        <AddIcon />
                    </IconButton>
                    <IconButton
                        aria-label='removeButtom'
                        onClick={decrement}
                    >
                        <RemoveIcon />
                    </IconButton>
                </Stack>
            </Box>

        </Box>
    );
};

export default IncrementButton;