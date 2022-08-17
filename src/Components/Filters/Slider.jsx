import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { styles } from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Typography } from '@mui/material'

const Slider = () => {
  return (
    <Carousel
    autoFocus={true}
    emulateTouch={true}
    interval={2000}
    swipeable={true}
    dynamicHeight={false}
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true}
    width="100%">
        <Box component="div" sx={{
            height: "300px",
            position: 'relative'
        }}>
            <img style={{
                objectFit: "cover",
                objectPosition: "bottom",
                width: '100%',
                height: '100%'
            }} src="images/food.jpg" alt="" />
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(0,0,0, .5)'
            }}/>
            <Box sx={{
                position: 'absolute',
                top: '25%',
                transformY: 'translate(-50%)',
                left: '0',
                zIndex: '5',
                padding: '20px 40px'
            }}>
                <Typography sx={{
                    fontSize: {
                        xs: '20px',
                        md: '30px',
                        lg: '40px'
                    },
                    color: '#fff'
                }}>Augmenting your brain cells!</Typography>
                <Typography sx={{
                    fontSize: '18px',
                    color: '#fff',
                    textAlign: 'start'
                }}>Check out our new items</Typography>
            </Box>
        </Box>
        <Box component="div" sx={{
            height: "300px",
            position: 'relative'
        }}>
            <img style={{
                objectFit: "cover",
                objectPosition: "center"
            }} src="images/pizza.jpg" alt="" />
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(0,0,0, .5)'
            }}/>
            <Box sx={{
                position: 'absolute',
                top: '25%',
                transformY: 'translate(-50%)',
                left: '0',
                zIndex: '5',
                padding: '20px 40px'
            }}>
                <Typography sx={{
                    fontSize: {
                        xs: '20px',
                        md: '30px',
                        lg: '40px'
                    },
                    color: '#fff'
                }}>Fireworks of flavours!</Typography>
                <Typography sx={{
                    fontSize: '18px',
                    color: '#fff',
                    textAlign: 'start'
                }}>Explore all your options</Typography>
            </Box>
        </Box>
        <Box component="div" sx={{
            height: "300px",
            position: 'relative'
        }}>
            <img style={{
                objectFit: "cover",
                objectPosition: "bottom"
            }} src="images/pizza3.jpg" alt="" />
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(0,0,0, .5)'
            }}/>
            <Box sx={{
                position: 'absolute',
                top: '25%',
                transformY: 'translate(-50%)',
                left: '0',
                zIndex: '5',
                padding: '20px 40px'
            }}>
                <Typography sx={{
                    fontSize: {
                        xs: '20px',
                        md: '30px',
                        lg: '40px'
                    },
                    color: '#fff'
                }}>Soothing your taste buds!</Typography>
                <Typography sx={{
                    fontSize: '18px',
                    color: '#fff',
                    textAlign: 'start'
                }}>Prices, you can't find anywhere else</Typography>
            </Box>
        </Box>
    </Carousel>
  )
}

export default Slider