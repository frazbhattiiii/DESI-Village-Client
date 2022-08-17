import React , { useEffect }                from 'react';
import { Box , Button , Grid , Typography } from "@mui/material";
import { motion , useAnimation }            from "framer-motion";
import ScrollComponent                      from "./ScrollComponent";
import ScrollComponent2                     from "./ScrollComponent2";
import ContactSupportIcon                   from '@mui/icons-material/ContactSupport';
import { useNavigate }                      from "react-router-dom";
import { useInView }                        from "react-intersection-observer";

function AboutComponent ( props ) {
    const navigate = useNavigate ();
    const boxVariant = {
        visible : { opacity : 1 , scale : 1.25 , transition : { duration : 1.5 } } ,
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
    let easing = [ 0.6 , - 0.05 , 0.01 , 0.99 ];
    const animate = {
        opacity : 1 ,
        y : 0 ,
        transition : {
            duration : 1.2 ,
            ease : easing ,
            delay : 0.16 ,
        } ,
    };
    return (
        <>
            <Box sx={ {
                margin : '5rem 1rem 0 2rem' ,
                overflowX : 'hidden' ,
            } }>
                <Box
                    component={ motion.div }
                    animate={ animate }
                    initial={ { opacity : 0 , y : 60 } }
                    minHeight={ '100vh' }
                >
                    <Box sx={ {
                        display : 'flex' ,
                        flexDirection : 'row' ,
                        flexWrap : 'wrap' ,
                        justifyContent : 'center' ,
                        alignItems : 'center' ,
                    } }>
                        <Grid item xs={ 8 } sm={ 4 }>
                            <Typography fontFamily='poppins' variant='h2'>Who we are?</Typography>
                            <Typography fontFamily='poppins' variant='subtitle1' component={ motion.div }
                                        animate={ animate }
                                        initial={ { opacity : 0 , y : 60 } }
                                        sx={ {
                                            color : '#1Ac073'
                                        } }>
                                We are making it easy for you to come and grab the food which you want...
                            </Typography>
                            <Typography fontFamily='poppins' variant='subtitle1' component={ motion.div }
                                        animate={ animate }
                                        initial={ { opacity : 0 , y : 30 } }
                                        sx={ {
                                            color : '#1Ac073'
                                        } }>
                                Making your life now easier by providing best restaurants nearby
                            </Typography>

                        </Grid>
                        <Grid item xs={ 2 }>
                            <img src='./images/about.png' alt='about'/>
                        </Grid>


                    </Box>
                </Box>
                <ScrollComponent/>
                <ScrollComponent2/>
                <Box sx={ {
                    display : 'flex' ,
                    flexDirection : 'row' ,
                    justifyContent : 'center' ,
                    alignItems : 'center' ,
                    marginBottom : '5rem' ,
                } }>
                    <Button
                        variant='contained'
                        color='error'
                        ref={ ref }
                        component={ motion.div }
                        variants={ boxVariant }
                        initial="hidden"
                        animate={ control }
                        onClick={ () => navigate ( '/contact' ) }
                        sx={ {
                            backgroundColor : "#1ac073" ,
                            // width : '14rem' ,
                            // height : '3rem' ,
                            marginTop : '2rem' ,
                        } }
                        startIcon={ <ContactSupportIcon/> }
                    >
                        Want to say something?
                    </Button>
                </Box>
            </Box>

        </>
    );
}

export default AboutComponent;