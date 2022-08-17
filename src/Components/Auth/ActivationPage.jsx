import React , { useState , useEffect } from "react";
import { styled } from "@mui/system";
import { Grid , Box , Button , Stack } from "@mui/material";
import jwt from "jwt-decode";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ToastBox from "../Toast/ToastContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';
import { activateUser } from "../../features/userSlice/userActions";

const StyledButton = styled ( Button )`
  background-color: #1ac073;
  color: #fff;
  padding: 6px 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;

  &:hover {
    background-color: #1ac078;
  }

  &:focus {
    background-color: green;
  }
`;
const ActivationPage = ( props ) => {
    let { token } = useParams ();
    const dispatch = useDispatch ();
    const [ formData , setFormData ] = useState ( {
        name : "" ,
        token : "" ,
        show : true ,
    } );
    const { active, error } = useSelector (
        ( state ) => state.user
    );
    let { name } = jwt ( token );
    useEffect ( () => {
        if ( token ) {
            setFormData ( { ... formData , name , token } );
        }
    } , [ token ] );
    useEffect ( () => {
        // redirect user to login page if registration was successful
        if ( active ) {
            toast ( "Account Activated",{
                autoClose : 2000 ,
            } );
            setTimeout ( () => {
                navigate ( "/login" , { replace : true } );
            } , 3000 );
        }
        if ( error ) {
            toast ( error,{
                autoClose : 2000 ,
            } );
        }

    } , [ active, error ] );

    const handleSubmit = ( e ) => {
        e.preventDefault ();
        const data = {
            token ,
        };
        dispatch ( activateUser ( data ) );
    };

    let navigate = useNavigate ();
    const backToSignUP = () => {
        navigate ( "/signup" );
    };

    return (
        <>
            <Box sx={ { flexGrow : 1 } }>
                <ToastBox/>
                {/* {isAuth() ? backToSignUP() : null} */ }
                <Grid>
                    <Grid item xs={ 8 }>
                        <Stack
                            spacing={ 4 }
                            direction="column"
                            alignItems="center"
                            sx={ {
                                marginTop : "2rem" ,
                            } }
                        >
                            <Box
                                component="img"
                                src="../.././images/logo.jpg"
                                alt="logo"
                                sx={ {
                                    maxWidth : { xs : "50%" , md : "40%" , lg : "40%" , xl : "40%" } ,
                                } }
                            />
                            <StyledButton
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                onClick={ handleSubmit }
                            >
                                Activate your Account
                            </StyledButton>
                            <Button
                                fullWidth
                                size="large"
                                type="submit"
                                variant="outlined"
                                sx={ {
                                    maxWidth : "50%" ,
                                } }
                                onClick={ backToSignUP }
                            >
                                Back to Signup
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ActivationPage;
