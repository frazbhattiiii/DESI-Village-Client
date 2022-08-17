import React from 'react';
import { Grid , Box , Typography , Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import SearchBar from "../Buttons/SearchBar";
import chef from './chefImage.png';
import { useDispatch } from "react-redux";
import { calculateTotal } from "../../features/cartSlice/cart";
function Home ( props ) {
    const dispatch = useDispatch();
    if(!localStorage.getItem('cart')){
        localStorage.setItem('cart',JSON.stringify([]));
    }
    dispatch(calculateTotal());
    return (
        <>
            <Grid container spacing={ 2 } sx={ {
                overflow : "hidden" ,
                backgroundColor : '#1AC073' ,
                height : '92.25vh'
            } }>

                <Grid item xs={ 12 } md={ 6 }>
                    <Stack direction={ 'column' } sx={ {
                        marginTop : {
                            sm : "15rem" ,
                            md : "15rem" ,
                            lg : "15rem" ,
                            xl : "16rem" ,
                        },
                        marginLeft:{
                            xs:'-3rem',

                        }
                    } }>
                        <Typography variant='h4' sx={ {
                            width : {
                                xs : "100%" ,
                                sm : "80%" ,
                                md : "60%" ,
                                lg : "60%" ,
                                xl : "60%" ,
                            } ,
                            marginTop : {
                                xs : "8rem" ,
                                sm : "-6rem" ,
                            } ,
                            marginLeft : {
                                xs : "7rem" ,
                                sm : "9rem" ,
                                md : "5rem" ,
                                lg : "5rem" ,
                                xl : "5rem" ,

                            } ,
                            fontSize : {
                                xs : "1.5rem" ,
                                sm : "2.5rem" ,
                                md : "2.2rem" ,
                                lg : "2.2rem" ,
                                xl : "2.2rem" ,
                            } ,

                            color : 'yellow' ,
                            height : "50%" ,
                            fontFamily : 'Kanit' ,
                        } }>
                            Looking for
                            <Typography fontFamily='Edu QLD Beginner' color='white'
                                        component ='span'
                                        sx={ {
                                width:{
                                    xs:'16rem',
                                }
                                ,
                                fontSize : {
                                    xs : "2.5rem" ,
                                    sm : "3.5rem" ,
                                    md : "2.5rem" ,
                                    lg : "3rem" ,
                                    xl : "3rem" ,
                                } ,

                            } }>
                                <Typewriter
                                    options={ {
                                        strings : [
                                            "Best Food" ,
                                            "Best Restaurant" ,
                                            "Cheap & Fast" ,
                                            "Shake Hand" ,
                                        ] ,
                                        autoStart : true ,
                                        backspaceSpeed : 50 ,
                                        writeSpeed : 50 ,
                                        loop : true ,
                                    } }
                                />
                            </Typography>
                        </Typography>
                        <Box sx={ {
                            marginTop : {
                                xs : "1.5rem" ,
                                sm : "3rem" ,
                                md : "4rem" ,
                                lg : "3rem" ,
                                xl : "3rem" ,
                            } ,
                            marginLeft : {
                                xs : '7rem' ,
                                sm : '9rem' ,
                                md : '4rem' ,
                                lg : '4rem' ,
                                xl : '4rem' ,

                            } ,
                        } }>
                            <SearchBar/>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={ 6 } display={ { xs: "none", sm : "none" , lg : "block" , md : "block" } }>
                    <Box component='img' src={chef} alt='Chef Image' sx={ {
                        width : {
                            sm : '350px' ,
                            md : '500px' ,
                            lg : "550px" ,
                            xl : "550px" ,
                            xs : '300px'
                        } ,
                        marginTop : { xl : '-2rem' , lg : '-2rem' , md : '-2rem' , sm : '2rem' , xs : '4rem' } ,
                        marginLeft : {
                            xs : "-4rem"
                        } ,
                        marginRight : {
                            xs : "2rem" ,
                            sm : "1.5rem" ,
                            md : "1.5rem" ,
                            lg : "1rem" ,
                            xl : "1rem" ,
                        } ,

                    } }/>

                </Grid>
            </Grid>
        </>
    );
}

export default Home;