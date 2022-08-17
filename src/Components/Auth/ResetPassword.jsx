import { Form , FormikProvider , useFormik } from "formik";
import * as Yup from "yup";
import React , { useState , useEffect } from "react";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Grid , Box , Button , Stack , TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import ToastBox from "../Toast/ToastContainer";
import { useNavigate } from "react-router-dom";

const StyledButton = styled ( Button )`
  background-color: #1ac073;
  color: #fff;
  padding: 6px 12px;
  max-width: 70%;

  &:hover {
    background-color: #1ac078;
  }

  &:focus {
    background-color: green;
  }
`;
const ResetPassword = () => {
    const [ formData , setFormData ] = useState ( {
                                                      password : "" ,
                                                      show : true ,
                                                  } );
    let { token } = useParams ();
    let navigate = useNavigate ();
    useEffect ( () => {
        if ( token ) {
            setFormData ( { ...formData , token } );
        }
    } , [] );
    const ResetSchema = Yup.object ().shape ( {
                                                  password : Yup.string ().required ( "Password is required" ) ,
                                              } );
    const formik = useFormik ( {
                                   initialValues : {
                                       password : "" ,
                                   } ,
                                   validationSchema : ResetSchema ,
                                   onSubmit : ( e ) => {

                                       // e.preventDefault();
                                       toast ( `🥹 Little Patience Require...`);
                                       const password = formik.values.password;
                                       axios
                                           .put ( `${ process.env.REACT_APP_API_URL }/auth/reset/password` , {
                                               newPassword : password ,
                                               resetPasswordLink : token ,
                                           } )
                                           .then ( ( res ) => {
                                               setFormData ( {
                                                                 ...formData ,
                                                                 password : "" ,
                                                                 show : false ,
                                                             } );
                                               toast ( `${ res.data.message }`);
                                               setTimeout ( () => {
                                                   navigate ( "/login" , { replace : true } );
                                               } , 3000 );
                                           } )
                                           .catch ( ( err ) => {
                                               toast ( `⚠️ ${ err.response.data.message }` );
                                           } );

                                   }
                               } );

    const { errors , touched , isSubmitting , handleSubmit , getFieldProps } =
        formik;
    return (
        <>
            <Box sx={ { flexGrow : 1 } }>
                <ToastBox/>
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
                                src="../../.././images/logo.jpg"
                                alt="logo"
                                sx={ {
                                    maxWidth : { xs : "50%" , md : "40%" , lg : "40%" , xl : "40%" } ,
                                } }
                            />
                            <FormikProvider value={ formik }>
                                <Form autoComplete="off" noValidate onSubmit={ handleSubmit }>
                                    <Stack
                                        spacing={ 4 }
                                        direction="column"
                                        alignItems="center"
                                        sx={ {
                                            marginTop : "2rem" ,
                                        } }
                                    >
                                        <TextField
                                            fullWidth
                                            autoComplete="username"
                                            type="password"
                                            label="Password"
                                            { ... getFieldProps ( "password" ) }
                                            error={ Boolean ( touched.password && errors.password ) }
                                            helperText={ touched.password && errors.password }
                                            sx={ {
                                                width : "100%" ,
                                            } }
                                        />
                                        <StyledButton
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            loading={ isSubmitting.toString () }
                                            variant="contained"
                                            endIcon={ <ThumbUpAltIcon/> }
                                        >
                                            Confirm
                                        </StyledButton>
                                    </Stack>
                                </Form>
                            </FormikProvider>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ResetPassword;
