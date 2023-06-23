import React, { useState, useEffect,  } from "react";
import { Container, Grid, Typography, Button, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

import userAvatar from "../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";


const PersonalAreaContainer = styled(Container)({
  fontWeight: "bold",
  paddingTop: 50,
});

const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: 24,
  marginBottom: 32,
});

const ProfileSection = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  marginBottom: 32,
});

const ProfileAvatar = styled(Avatar)({
  width: 100,
  height: 100,
});

const ProfileDetails = styled(Grid)({});

const ProfileDetailItem = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8,
});

const DetailIcon = styled("div")({
  backgroundColor: grey[400],
  color: "white",
  width: 24,
  height: 24,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PersonalArea = () => {
  const [openDialog, setOpenDialog] = useState(false);
  
  const [userData, setUserData] = useState(null);


  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  /*const handleSaveChanges = () => {
    const data = {
      username: username,
      password: password,
      email: email,
    }; 

    axios
      .put 
      ("http://16.171.41.207:3000/api/profile/update", data)
      .then((response) => {
        console.log("Risposta dalla richiesta PUT:", response.data);
        handleCloseDialog();

        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.error("Errore durante la richiesta PUT:", error);
      });
  };

  */


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://16.171.41.207:3000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
  console.log(userData)
  
  

  return (
    <PersonalAreaContainer>
      <Typography variant="h1" align="center" gutterBottom>
        Benvenuto sulla tua area personale!
      </Typography>
      <SectionTitle>Profilo utente</SectionTitle>
      <ProfileSection>
        <ProfileAvatar>
          <Avatar src={userAvatar} alt="User Avatar" />
        </ProfileAvatar>
        <ProfileDetails>
          <ProfileDetailItem>
            <DetailIcon>
              <PersonIcon fontSize="small" />
            </DetailIcon>
            <Typography variant="body1">Username: {/* */}</Typography>
          </ProfileDetailItem>
          <ProfileDetailItem>
            <DetailIcon>
              <LockIcon fontSize="small" />
            </DetailIcon>
            <Typography variant="body1">Password: ********</Typography>
          </ProfileDetailItem>
          <ProfileDetailItem>
            <DetailIcon>
              <EmailIcon fontSize="small" />
            </DetailIcon>
            <Typography variant="body1">Email: {userData != null && userData.email}</Typography>
          </ProfileDetailItem>
        </ProfileDetails>
      </ProfileSection>
      <SectionTitle>Azioni account</SectionTitle>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="contained" size="large" onClick={handleOpenDialog}>
            Modifica le tue credenziali
          </Button>
        </Grid>
        <Grid item>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            Esci
          </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Pop-up per la modifica */} 
      {/* <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Modifica credenziali</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annulla</Button>
          <Button onClick={handleSaveChanges} color="primary">
            Salva
          </Button>
        </DialogActions>
      </Dialog> */}
    </PersonalAreaContainer>
  );
};

export default PersonalArea;
