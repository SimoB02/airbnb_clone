import React, { useState, useEffect,  } from "react";
import { Container, Grid, Typography, Button, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

import PersonIcon from "@mui/icons-material/Person";
import userAvatar from "../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

//cards 
import Pagamenti from "../components/PersonalAreaCards/Pagamenti"
import AccessoSicurezza from "../components/PersonalAreaCards/AccessoSicurezza"
import CreditoCoupon from "../components/PersonalAreaCards/CreditoCoupon"
import Notifiche from "../components/PersonalAreaCards/Notifiche"


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

const [name, setName] = useState("");
const [surname, setSurname] = useState("");
const [address, setAddress] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");

const handleCloseDialog = () => {
  setOpenDialog(false);
};

const handleOpenDialog = () => {
  setSurname("");
  setName(""); 
  setAddress("");
  setPhoneNumber("");
  setOpenDialog(true); 
};

//recupero del token esternamente 
let TOKEN = localStorage.getItem("token");

const handleSubmit = async () => {
  try {
    
    console.log(TOKEN)
    const response = await axios.put(
      "http://16.170.235.124:3000/api/profile/update",
      {
        name,
        surname,
        address,
        phoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    
    );

    // Aggiorna il valore dell'email nel tuo stato locale
    setUserData((prevUserData) => ({
      ...prevUserData,
      name,
      surname,
      address,
      phoneNumber,
    }));

    handleCloseDialog();
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
       
        const response = await axios.get("http://16.170.235.124:3000/api/profile", {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            
          },
        });
        setUserData(response.data);
        console.log(response.data.name)
        
      } catch (error) {
        console.log(error);
      }
    };
 
    fetchData();
  }, []);
  
  
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
  <Typography variant="body1">Name: {userData?.profile?.name || "N/A" }</Typography>  
</ProfileDetailItem>

<ProfileDetailItem>
  <Typography variant="body1">Surname: {userData?.profile?.surname || "N/A" }</Typography>
</ProfileDetailItem>

<ProfileDetailItem>
  <Typography variant="body1">Address: {userData?.profile?.address || "N/A" }</Typography>
</ProfileDetailItem>

<ProfileDetailItem>
  <Typography variant="body1">Phone Number: {userData?.profile?.phoneNumber || "N/A"}</Typography>
</ProfileDetailItem>


        </ProfileDetails>
      </ProfileSection>

      <SectionTitle> Area riservata </SectionTitle>

      <Grid container justifyContent="center" spacing={8}>
             
        <Grid item>
        {<Pagamenti />}
        </Grid>

       
         <Grid item>
          {<AccessoSicurezza/>}
        </Grid>

      
        <Grid item>
            {<  CreditoCoupon />}
        </Grid>

        <Grid item >
            {<Notifiche />}
        </Grid>
        
        </Grid > 


      <Grid container justifyContent="center" spacing={2}  marginTop={"50px"}>
      <Grid item>
        <Link to={"/mappa"}> 
          <Button variant="contained" size="large" >
            Apri la mappa per visualizzare gli appartamenti 
          </Button>
          </Link>
        </Grid>

        <Grid item>
          <Button variant="contained" size="large" onClick={handleOpenDialog}>
            Modifica le tue credenziali
          </Button>
        </Grid>

        <Dialog open={openDialog}   onClose={handleCloseDialog}>
  <DialogTitle>Modifica le tue credenziali</DialogTitle>
  <DialogContent>
    <TextField
      label="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      fullWidth
      margin="normal"
    />

<TextField
      label="Surame"
      value={surname}
      onChange={(e) => setSurname(e.target.value)}
      fullWidth
      margin="normal"
    />

    <TextField
      label="Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      fullWidth
      margin="normal"
    />
    <TextField
      label="PhoneNumber"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      fullWidth
      margin="normal"
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleSubmit}>Salva</Button>
    <Button onClick={handleCloseDialog}>Annulla</Button>
  </DialogActions>
</Dialog>

        <Grid item>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            Esci
          </Button>
          </Link>
        </Grid>
      </Grid>
     
    </PersonalAreaContainer>
  );
};

export default PersonalArea;
