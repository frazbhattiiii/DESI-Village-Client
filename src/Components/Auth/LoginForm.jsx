import React , { useState , useEffect } from "react";
import { Link as RouterLink , useNavigate } from "react-router-dom";
import { Form , FormikProvider , useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import ToastBox from '../Toast/ToastContainer';
import { loginUser } from "../../features/userSlice/userActions";
import {
    Box ,
    Checkbox ,
    FormControlLabel ,
    IconButton ,
    InputAdornment ,
    Link ,
    Stack ,
    TextField ,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import GreenButton from "../Buttons/GreenButton";
import { useDispatch , useSelector } from "react-redux";

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

const LoginForm = () => {
    const navigate = useNavigate ();
    const dispatch = useDispatch ();
    const { error , loggedIn } = useSelector (
        ( state ) => state.user
    );
    useEffect(() => {
        if ( loggedIn ) {
            toast('You are logged in',{
                autoClose: 2000,
            })
            setTimeout(() => {
                navigate('/');
            } , 2000);

        }
    } , [ loggedIn,error]);
    const [ showPassword , setShowPassword ] = useState ( false );

    const LoginSchema = Yup.object ().shape ( {
        email : Yup.string ()
            .email ( "Provide a valid email address" )
            .required ( "Email is required" ) ,
        password : Yup.string ().required ( "Password is required" ) ,
    } );

    const formik = useFormik ( {
        initialValues : {
            email : "" ,
            password : "" ,
            remember : true ,
        } ,
        validationSchema : LoginSchema ,
        onSubmit : () => {
            const email = formik.values.email;
            const password = formik.values.password;
            const data = { email , password };
            dispatch ( loginUser ( data ) )

        } ,
    } );

    const { errors , touched , values , isSubmitting , handleSubmit , getFieldProps } =
        formik;

    return (
        <>
            <ToastBox/>
            <FormikProvider value={ formik }>
                <Form autoComplete="off" noValidate onSubmit={ handleSubmit }>
                    <Box
                        component={ motion.div }
                        animate={ {
                            transition : {
                                staggerChildren : 0.55 ,
                            } ,
                        } }
                    >
                        <Box
                            sx={ {
                                display : "flex" ,
                                flexDirection : "column" ,
                                gap : 3 ,
                            } }
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 40 } }
                            animate={ animate }
                        >
                            <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email Address"
                                { ... getFieldProps ( "email" ) }
                                error={ Boolean ( touched.email && errors.email ) }
                                helperText={ touched.email && errors.email }
                                sx={{
                                    mb:2,
                                }}
                            />

                            <TextField
                                fullWidth
                                autoComplete="current-password"
                                type={ showPassword ? "text" : "password" }
                                label="Password"
                                { ... getFieldProps ( "password" ) }
                                error={ Boolean ( touched.password && errors.password ) }
                                helperText={ touched.password && errors.password }
                                InputProps={ {
                                    endAdornment : (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={ () => setShowPassword ( ( prev ) => !prev ) }
                                            >
                                                { showPassword ? (
                                                    <Icon icon="eva:eye-fill"/>
                                                ) : (
                                                      <Icon icon="eva:eye-off-fill"/>
                                                  ) }
                                            </IconButton>
                                        </InputAdornment>
                                    ) ,
                                } }
                            />
                        </Box>

                        <Box
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 20 } }
                            animate={ animate }
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={ { my : 2 } }
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            { ... getFieldProps ( "remember" ) }
                                            checked={ values.remember }
                                        />
                                    }
                                    label="Remember me"
                                />

                                <Link
                                    component={ RouterLink }
                                    variant="subtitle2"
                                    to="/users/password/forget"
                                    underline="hover"
                                >
                                    Forgot password?
                                </Link>
                            </Stack>
                            <GreenButton
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                loading={ isSubmitting }
                                text={ isSubmitting ? "loading..." : "login" }>

                            </GreenButton>
                        </Box>
                    </Box>
                </Form>
            </FormikProvider>
        </>
    );
};

export default LoginForm;