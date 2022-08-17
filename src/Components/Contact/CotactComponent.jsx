import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import { Stack, Box, TextField } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import ToastBox from "../Toast/ToastContainer";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import GreenButton from "../Buttons/GreenButton";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../features/commonSlice/commonActions";
import { useEffect } from "react";
import { sendEmailSuccess } from "../../features/commonSlice";

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

const ContactComponet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.common);

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(4, "Atleast 5 characters")
      .max(700, "Too Long!")
      .required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (e) => {
      toast("Email is sending kindly wait", {
        autoClose: 2000,
      });
      const name = formik.values.name;
      const email = formik.values.email;
      const message = formik.values.message;
      dispatch(sendEmail({ name, email, message }));
      //TODO send the email of the user
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  useEffect(() => {
    if (success) {
      toast(success, {
        autoClose: 2000,
      });
      dispatch(sendEmailSuccess());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (error) {
      toast(error, {
        autoClose: 2000,
      });
      navigate("/");
    }
  }, [success, error]);

  return (
    <>
      <ToastBox />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                fullWidth
                label="Name"
                {...getFieldProps("name")}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </Stack>

            <Stack
              spacing={2}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              direction={{ xs: "column", sm: "row" }}
              animate={animate}
            >
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
            </Stack>
            <Stack
              spacing={2}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              direction={{ xs: "column", sm: "row" }}
              animate={animate}
            >
              <TextField
                fullWidth
                autoComplete="message"
                type="text"
                multiline
                rows={2}
                label="Message"
                {...getFieldProps("message")}
                error={Boolean(touched.message && errors.message)}
                helperText={touched.message && errors.message}
              />
            </Stack>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <GreenButton loading={isSubmitting} text="Send Message" />
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
    </>
  );
};

export default ContactComponet;
