import * as React from "react";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../features/userSlice/userActions";
import { useFormik, Form, FormikProvider } from "formik";
import ToastBox from '../Toast/ToastContainer';
import { toast } from 'react-toastify';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import GreenButton from "../Buttons/GreenButton";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";



let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};



export default function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  const dispatch = useDispatch();

  const [noEdit, setNoEdit] = useState(true);
  const [noEditPassword, setNoEditPassword] = useState(true);
  const [noEditButton, setNoEditButton] = useState(true);

  const ProfileSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
  });

  let userEmail = ''
  let userName = ''
  let userAddress = ''
  let userContact = ''
  let userId = ''
  if(localStorage.getItem('user'))
  {
       userEmail = JSON.parse(localStorage.getItem('user')).email;
       userName = JSON.parse(localStorage.getItem('user')).name;
       userAddress = JSON.parse(localStorage.getItem('user')).address;
       userContact = JSON.parse(localStorage.getItem('user')).contact;
       userId = JSON.parse(localStorage.getItem('user'))._id;
  }

  const formik = useFormik({
    initialValues: {
      name: userName,
      email: userEmail,
      password: "",
      npassword: "",
      contact: userContact,
      address: userAddress,
    },
    validationSchema: ProfileSchema,
    onSubmit: (e) => {
      const name = formik.values.name;
      const contact = formik.values.contact;
      const address = formik.values.address;
      const password = formik.values.password;
      const newPassword = formik.values.npassword;
      const data = { userId, name, contact, address, password, newPassword };
      dispatch(updateProfile(data))
      toast('Profiel Updated Successfully',{
        autoClose: 2000,
      })
      setNoEditButton(true);
      setNoEdit(true);
      setNoEditPassword(true);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const editProfile = () => {
    if(noEdit){
      setNoEdit(false);
      setNoEditPassword(true);
      setNoEditButton(false);
    }    
  }

  const editPassword = () => {
    if(noEditPassword) {
      setNoEdit(true);
      setNoEditPassword(false);
      setNoEditButton(false);
    }
  }



  return (
    <>
    <ToastBox/>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: "bold",
          mx: 5,
          fontFamily: "Arial",
          color: "#1ac073",
        }}
      >
        Personal Infromation
        <IconButton
          aria-label="edit"
          onClick={editProfile}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={editPassword}
        >
          <KeyIcon />
        </IconButton>
      </Typography>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{ width: "60%" }}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                label="Your name"
                fullWidth
                disabled={noEdit}
                {...getFieldProps("name")}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </Stack>

            <Stack
              sx={{ width: "60%" }}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                label="Contact"
                disabled={noEdit}
                fullWidth
                isNumericString
                {...getFieldProps("contact")}
                error={Boolean(touched.contact && errors.contact)}
                helperText={touched.contact && errors.contact}
              />
            </Stack>

            <Stack
              spacing={3}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={animate}
              sx={{ width: "60%" }}
            >
              <TextField
                fullWidth
                disabled={true}
                type="email"
                label="Email address"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
                
              <TextField
                disabled={noEditPassword}
                type={showPassword ? "text" : "password"}
                label="Current Password"
                {...getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                disabled={noEditPassword}
                type={showNPassword ? "text" : "password"}
                label="New Password"
                {...getFieldProps("npassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowNPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showNPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Stack>

            <Stack
              sx={{ width: "60%" }}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                disabled={noEdit}
                multiline
                rows={4}
                label="Address"
                fullWidth
                {...getFieldProps("address")}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
              />
            </Stack>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <GreenButton disabled={noEditButton} loading={isSubmitting} text={noEditPassword ? "Update Profile" : "Update Password"} />
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
    </>
  );
}
