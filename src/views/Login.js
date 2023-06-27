import React, { useState } from "react";
import { styled } from "@mui/system";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {useNavigate} from "react-router-dom";

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "320px",
  padding: "16px",
  borderRadius: "4px",
  backgroundColor: "#f5f5f5",
});

const SubmitButton = styled(Button)({
  backgroundColor: "blue",
  color: "#fff",
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginSucces, setLoginSuccess] = useState(false);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://16.171.41.207:3000/api/user/login",
        data
      );

      if (response.data) {
        console.log(loginSucces);

        setLoginSuccess(true);
        setToken(response.data.token);

        // inserimento del token nel locale storage
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);

        //redirect to the page of areapersonale
        navigate("/areapersonale") ;
        
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <FormContainer>
        <Box mb={2}>
          <LockOutlinedIcon sx={{ fontSize: 48, color: "#ff4081" }} />
        </Box>
        <Typography
          variant="h5"
          component="h1"
          color="primary"
          fontWeight="bold"
          mb={2}
        >
          Log-in Airbnb
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", { required: true })}
            label="Email"
            type="email"
            error={errors.email ? true : false}
            helperText={errors.email && "Email is required"}
          />
          <TextField
            {...register("password", { required: true, minLength: 4 })}
            label="Password"
            type="password"
            error={errors.password ? true : false}
            helperText={
              errors.password
                ? "Sono necessari almeno 6 caratteri"
                : ""
            }
          />
          <SubmitButton type="submit" variant="contained">
            Login
          </SubmitButton>
        </Form>
      </FormContainer>
    </Box>
  );
};

export default LoginForm;






