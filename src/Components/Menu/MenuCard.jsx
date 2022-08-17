import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import {Button,Typography} from '@mui/material';
import Card from '@mui/joy/Card';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";
export default function MenuCard(props) {
    const {_id,name,price,imageURL,timeForDelivery,rating} = props.item;
    const navigate = useNavigate();
    return (
        <Card variant="outlined" sx={{ minWidth: '250px' ,
            borderColor:'#ccf0d5',
            cursor:'pointer',
        }} onClick={()=>navigate(`/item/detail/${_id}`)}>

            <AspectRatio minHeight="120px" maxHeight="200px" >
                <img
                    src={`${process.env.REACT_APP_API_URL}/images/${imageURL[0]}`}
                    alt=""
                />
            </AspectRatio>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{display:'flex',flexDirection:"row",gap:10}}>
                <Typography variant="h7" fontFamily='poppins' fontSize="md" sx={{ alignSelf: 'flex-start' }}>
                    {name}
                </Typography>
                <Typography variant="h8" fontWeight="bold">
                    ${price}
                </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:'flex-start',
                    alignItems:'center',
                }}>

                <Typography variant="body2" >{rating}
                </Typography>
                    <StarIcon sx={{
                        color:'yellow'
                    }}/>

                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography  variant ='body2' fontSize="lg" fontWeight="lg" sx={{
                        marginTop:'.25rem',
                    }}>
                        {timeForDelivery?timeForDelivery:'No Specific Time'} - {timeForDelivery?timeForDelivery+15+'min':''}
                    </Typography>
                </div>
                <Button
                    variant="text"
                    size="sm"

                    sx={{fontFamily:'poppins', ml: 'auto', fontWeight: 600 ,color:'black',backgroundColor:'pink'}}
                    onClick={()=>navigate(`/item/detail/${_id}`)}>
                    Explore
                </Button>
            </Box>
        </Card>
    );
}
