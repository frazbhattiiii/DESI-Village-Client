import Typography from '@mui/material/Typography';
import GoBackBtn from '../Buttons/GoBackBtn';

const EmptyCart = () => (
    <>
        <Typography variant='h5' align='center' sx={{ my: 5 }}>
            No items in the cart yet
        </Typography>
        <GoBackBtn />
    </>
);

export default EmptyCart;