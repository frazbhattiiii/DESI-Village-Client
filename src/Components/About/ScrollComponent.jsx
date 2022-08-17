import React , { useEffect } from 'react';
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box , Divider , Grid , Typography } from "@mui/material";

function ScrollComponent ( props ) {
    const boxVariant = {
        visible : { opacity : 1 , scale : 1 , transition : { duration : 1.75 } } ,
        hidden : { opacity : 0 , scale : 0 }
    };
    const control = useAnimation ();
    const [ ref , inView ] = useInView ();
    useEffect ( () => {

        if ( inView ) {
            control.start ( "visible" );
        }
        else {
            control.start ( "hidden" );
        }
    } , [ control , inView ] );
    return (
        <>
            <Box
                ref={ ref }
                component={ motion.div }
                variants={ boxVariant }
                initial="hidden"
                animate={ control }
            >
                <Box sx={ {
                    display : 'flex' ,
                    flexDirection : 'row' ,
                    flexWrap : 'wrap' ,
                    justifyContent : 'center' ,
                    alignItems : 'center' ,
                } }>
                    <Grid item xs={ 2 }>
                        <img src='./images/pizza1.jpg' alt='about' width='100%'/>
                    </Grid>

                    <Grid item xs={ 8 } sm={ 4 } sx={ {
                        marginLeft : "  1rem"
                    } }>
                        <Typography fontFamily='poppins' variant='h3' sx={ {
                            mb : "1rem" ,
                        } }>
                            What are we telling you?
                        </Typography>
                        <Typography fontFamily='poppins' variant='subtitle1'
                                    sx={ {
                                        color : '#1Ac073'
                                    } }>
                            Restaurants with their rating and customer reviews
                            <Divider sx={ {
                                mt : 2 ,
                            } }/>
                            We are also providing a search bar to search for restaurants
                            <Divider sx={ {
                                mt : 2 ,
                            } }/>
                            Their Food Speciality and their location
                            <Divider sx={ {
                                mt : 2 ,
                            } }/>
                            Alot of search filtering options based on price, offers, ratings, etc.
                        </Typography>

                    </Grid>

                </Box>
            </Box>
        </>
    );
}

export default ScrollComponent;