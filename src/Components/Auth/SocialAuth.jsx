import { Icon } from "@iconify/react";
import { Stack , IconButton } from "@mui/material";
import { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import ToastBox from '../Toast/ToastContainer';
import { useDispatch , useSelector } from "react-redux";
import { googleLogin } from "../../features/userSlice/userActions";

const SocialAuth = () => {
    let navigate = useNavigate ();
    let dispatch = useDispatch ();
    const {  error ,googleLoggedIn } = useSelector (
        ( state ) => state.user
    );
    useEffect ( () => {
        if ( googleLoggedIn ) {
            toast("Successfully logged in",{
                autoClose:2000,
            });
            setTimeout ( () => {
                navigate ( "/" );
            } , 2000 );
        }
        else{
            toast(error,{
                autoClose:2000,
            });
        }
    } , [ googleLoggedIn ,error] );
    const responseGoogle = response => {
        const idToken = response.tokenId;
        const data = {
            idToken
        };
        dispatch ( googleLogin ( data ) );



    };


    return (
        <>
            <ToastBox/>
            <Stack direction="row" spacing={ 2 }>

                <GoogleLogin clientId={ process.env.REACT_APP_GOOGLE_CLIENT_ID }
                             buttonText="Sign up with google"
                             onSuccess={ responseGoogle }
                             onFailure={ responseGoogle }

                             render={ renderProps => (
                                 <IconButton
                                     onClick={ renderProps.onClick }
                                     disabled={ renderProps.disabled }
                                     sx={ {
                                         border : "2px solid #ccc" ,
                                         borderRadius : "5px" ,
                                         padding : "0.5675rem" ,
                                         flex : 1 ,
                                     } }
                                 >
                                     <Icon icon="eva:google-fill" color="#DF3E30" width={ 24 } height={ 24 }/>
                                 </IconButton>
                             ) }
                             cookiePolicy={ 'single_host_origin' }
                />

            </Stack>
        </>
    );
};

export default SocialAuth;