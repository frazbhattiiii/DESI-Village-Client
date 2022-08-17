import React ,{ useEffect } from 'react';
import { motion ,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box ,Divider ,Grid ,Typography } from "@mui/material";

function ScrollComponent ( props ) {
    const boxVariant = {
        visible : { opacity : 1 ,scale : .75 ,transition : { duration : 1.5 } } ,
        hidden : { opacity : 0 ,scale : 0 }
    };
    const control = useAnimation ();

    const [ ref ,inView ] = useInView ();
    useEffect ( () => {

        if ( inView ) {
            control.start ( "visible" );
        }
        else {
            control.start ( "hidden" );
        }
    } ,[ control ,inView ] );


    return (
        <>
            <Box
                ref={ ref }
                component={ motion.div }
                variants={ boxVariant }
                initial="hidden"
                animate={ control }
                sx={ {
                    mt : '2rem' ,
                } }
            >
                <Box sx={ {
                    display : 'flex' ,
                    flexDirection : 'row' ,
                    flexWrap : 'wrap' ,
                    justifyContent : 'center' ,
                    alignItems : 'center' ,
                } }>
                    <Grid item xs={ 8 } sm={ 4 } sx={ {
                        marginRight : "  1rem"
                    } }>
                        <Typography fontFamily='poppins' variant='h3' sx={ {
                            mb : "1rem" ,
                        } }>
                            Why we?
                        </Typography>
                        <Typography fontFamily='poppins' variant='subtitle1'
                                    sx={ {
                                        color : 'darkGrey' ,
                                        mb : "1rem" ,
                                    } }>
                            Reliablity, Trust, and Commitment.
                            <Divider sx={ {
                                mt : 2 ,
                            } }/>
                            Quality Assurance
                            <Divider sx={ {
                                mt : 2 ,
                            } }/>
                            Customer Service
                            <Divider sx={ {
                                mt : 2 ,
                            } }/>
                            24/7 Support
                        </Typography>


                    </Grid>
                    <Grid item xs={ 3 }>
                        <img src='./images/food.jpg' alt='about' width='550'/>

                    </Grid>

                </Box>

            </Box>
        </>
    );
}

export default ScrollComponent;