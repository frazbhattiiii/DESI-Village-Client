import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { styled } from "@mui/system";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Grid, Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import ToastBox from "../Toast/ToastContainer";
import { useNavigate } from "react-router-dom";
const StyledButton = styled(Button)`
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
const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    show: true,
  });
  let navigate = useNavigate();

  const ForgotSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotSchema,
    onSubmit: (e) => {
      toast(`🥹 Little Patience Require...`);
      const email = formik.values.email;
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/forgot/password`, {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            show: false,
          });
          toast(`${res.data.message}`);
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 3000);
        })
        .catch((err) => {
          toast(`⚠️ ${err.response.data.message}`);
        });
    },
  });

  const { errors, touched , isSubmitting, handleSubmit, getFieldProps } =
    formik;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ToastBox />

        <Grid>
          <Grid item xs={8}>
            <Stack
              spacing={4}
              direction="column"
              alignItems="center"
              sx={{
                marginTop: "2rem",
              }}
            >
              <Box
                component="img"
                src="../.././images/logo.jpg"
                alt="logo"
                sx={{
                  maxWidth: { xs: "50%", md: "40%", lg: "40%", xl: "40%" },
                }}
              />
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack
                    spacing={4}
                    direction="column"
                    alignItems="center"
                    sx={{
                      marginTop: "2rem",
                    }}
                  >
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="email"
                      label="Email Address"
                      {...getFieldProps("email")}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      sx={{
                        width: "100%",
                      }}
                    />
                    <StyledButton
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      loading={isSubmitting.toString()}
                      endIcon={<ForwardToInboxIcon />}
                    >
                      Submit
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

export default ForgotPassword;
