import * as Yup from "yup";
import { useEffect , useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { registerUser } from "../../features/userSlice/userActions";
import { useFormik , Form , FormikProvider } from "formik";
import {
    Stack ,
    Box ,
    TextField ,
    IconButton ,
    InputAdornment ,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import ToastBox from "../Toast/ToastContainer";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import GreenButton from "../Buttons/GreenButton";

let easing = [ 0.6 , - 0.05 , 0.01 , 0.99 ];
const animate = {
    opacity : 1 ,
    y : 0 ,
    transition : {
        duration : 0.6 ,
        ease : easing ,
        delay : 0.16 ,
    } ,
};

const SignupForm = () => {
    const [ showPassword , setShowPassword ] = useState ( false );
    const dispatch = useDispatch ();
    const {  error , register } = useSelector (
        ( state ) => state.user
    );
    useEffect ( () => {
        // redirect user to login page if registration was successful
        if ( register ) {
            toast ( "Activation link sent to your email",{
                autoClose : 2000 ,
            } );
        }
        if ( error ) {
            toast ( error ,{
                autoClose : 2000 ,
            });
        }

    } , [ register , error ] )
    const SignupSchema = Yup.object ().shape ( {
                                                   firstName : Yup.string ()
                                                                  .min ( 2 , "Too Short!" )
                                                                  .max ( 50 , "Too Long!" )
                                                                  .required ( "First name required" ) ,
                                                   lastName : Yup.string ()
                                                                 .min ( 2 , "Too Short!" )
                                                                 .max ( 50 , "Too Long!" )
                                                                 .required ( "Last name required" ) ,
                                                   email : Yup.string ()
                                                              .email ( "Email must be a valid email address" )
                                                              .required ( "Email is required" ) ,
                                                   password : Yup.string ()
                                                                 .min ( 2 , "Too Short!" )
                                                                 .max ( 50 , "Too Long!" )
                                                                 .required ( "Password is required" ) ,
                                               } );

    const formik = useFormik ( {
                                   initialValues : {
                                       firstName : "" ,
                                       lastName : "" ,
                                       email : "" ,
                                       password : "" ,
                                   } ,
                                   validationSchema : SignupSchema ,
                                   onSubmit : ( e ) => {
                                       toast ( `⌚ Email is sending kindly wait...` );
                                       const name = formik.values.firstName + " " + formik.values.lastName;
                                       const email = formik.values.email;
                                       const password = formik.values.password;
                                       const data = { name , email , password };

                                       dispatch ( registerUser ( data ) );
                                   } ,
                               } );

    const { errors , touched , handleSubmit , isSubmitting , getFieldProps } = formik;

    return (
        <>
            <ToastBox/>
            <FormikProvider value={ formik }>
                <Form autoComplete="off" noValidate onSubmit={ handleSubmit }>
                    <Stack spacing={ 3 }>
                        <Stack
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 60 } }
                            animate={ animate }
                            direction={ { xs : "column" , sm : "row" } }
                            spacing={ 2 }
                        >
                            <TextField
                                fullWidth
                                label="First name"
                                { ... getFieldProps ( "firstName" ) }
                                error={ Boolean ( touched.firstName && errors.firstName ) }
                                helperText={ touched.firstName && errors.firstName }
                            />

                            <TextField
                                fullWidth
                                label="Last name"
                                { ... getFieldProps ( "lastName" ) }
                                error={ Boolean ( touched.lastName && errors.lastName ) }
                                helperText={ touched.lastName && errors.lastName }
                            />
                        </Stack>

                        <Stack
                            spacing={ 3 }
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 40 } }
                            animate={ animate }
                        >
                            <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email address"
                                { ... getFieldProps ( "email" ) }
                                error={ Boolean ( touched.email && errors.email ) }
                                helperText={ touched.email && errors.email }
                            />

                            <TextField
                                fullWidth
                                autoComplete="current-password"
                                type={ showPassword ? "text" : "password" }
                                label="Password"
                                { ... getFieldProps ( "password" ) }
                                InputProps={ {
                                    endAdornment : (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={ () => setShowPassword ( ( prev ) => ! prev ) }
                                            >
                                                <Icon
                                                    icon={
                                                        showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                                                    }
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    ) ,
                                } }
                                error={ Boolean ( touched.password && errors.password ) }
                                helperText={ touched.password && errors.password }
                            />
                        </Stack>

                        <Box
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 20 } }
                            animate={ animate }
                        >
                            <GreenButton loading={ isSubmitting } text="Sign up"/>
                        </Box>
                    </Stack>
                </Form>
            </FormikProvider>
        </>
    );
};

export default SignupForm;
