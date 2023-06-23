import React, { useState } from "react";
import { styled } from "@mui/system";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";


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

const Registrazione = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [link, setLink] = useState("")

  
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://16.171.41.207:3000/api/user/register", data
      );
      if (response.data) {
        
        setRegistrationSuccess(true);
        setLink(response.data.index);
      }
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  

  const postData = async () => {
    try {
      const response = await axios.post("http://16.171.41.207:3000/api/user/authy/"  + link);
      console.log(registrationSuccess);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };



  return (
    <Box>
      {registrationSuccess && (
        <Box>
          <p>Registrazione avvenuta con successo</p>
          <Button onClick={postData}>Verifica il tuo account</Button>
        </Box>
      )}

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
          Register in Airbnb
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
                ? "Password is required and must be at least 4 characters long"
                : ""
            }
          />
          <Button sx={{
            backgroundColor: "blue",
            color: "#fff",
          }} type="submit" variant="contained">
            Registrati
          </Button>
        </Form>
      </FormContainer>

      
    </Box>
  );
};

export default Registrazione;





