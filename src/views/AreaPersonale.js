import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { pink, grey } from "@mui/material/colors";
import logo from "../assets/logo.png";

const PersonalArea = () => {
  const PersonalAreaContainer = styled(Box)({
    display: "flex",
    height: "100vh",
  });

  const Banner = styled(Box)({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "16px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    flex: "0 0 200px",
  });

  const SideMenu = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "200px",
    padding: "16px",
    backgroundColor: grey[100],
    borderRadius: "4px",
  });

  const MenuItem = styled(Typography)(({ highlighted }) => ({
    color: highlighted ? pink[500] : "inherit",
    cursor: "pointer",
  }));

  const Content = styled(Box)({
    display: "flex",
    flexDirection: "column",
    flex: "1",
    padding: "16px",
  });

  const MainSection = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: pink[50],
    padding: "16px",
  });

  const Logo = styled("img")({
    height: "48px",
  });

  return (
    
    //Parte richiesta al server per la put dei dati 
    
    
    
    <PersonalAreaContainer>
      <Banner>
        <Logo src={logo} alt="Airbnb" />
      </Banner>
      <Content>
        <SideMenu>
          <MenuItem variant="body1" highlighted>
            Area personale
          </MenuItem>
          <MenuItem variant="body1">Accedi</MenuItem>
          <MenuItem variant="body1">Registrati</MenuItem>
          <MenuItem variant="body1">Scopri di più</MenuItem>
        </SideMenu>
        <MainSection>
          <PersonIcon sx={{ fontSize: 128, color: pink[200] }} />
          <Box component="form" sx={{ textAlign: "center", marginTop: "16px" }}>
            <TextField name="name" label="Nome" required />
            <TextField name="surname" label="Cognome" required />
            <TextField name="address" label="Indirizzo" required />
            <TextField name="phoneNumber" label="Numero di telefono" required />
            <Button type="submit" variant="contained">
              Aggiorna profilo
            </Button>
          </Box>
        </MainSection>
      </Content>
    </PersonalAreaContainer>
  );
};

export default PersonalArea;












































/*
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { pink, grey } from "@mui/material/colors";
import logo from "../assets/logo.png";
import axios from "axios";

const PersonalArea = () => {
  const PersonalAreaContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: pink[50],
  });

  const Banner = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  });

  const SideMenu = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "200px",
    padding: "16px",
    backgroundColor: grey[100],
    borderRadius: "4px",
  });

  const MenuItem = styled(Typography)(({ highlighted }) => ({
    color: highlighted ? pink[500] : "inherit",
    cursor: "pointer",
  }));


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://198.18.192.223:3000/api/profile", {
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
  

  return (
    <PersonalAreaContainer>
      <Banner>
        <img src={logo} alt="Airbnb" style={{ height: "48px" }} />
      </Banner>
      <Box sx={{ display: "flex" }}>
        <SideMenu>
          <MenuItem variant="body1" highlighted>
            Area personale
          </MenuItem>
          <MenuItem variant="body1">Accedi</MenuItem>
          <MenuItem variant="body1">Registrati</MenuItem>
          <MenuItem variant="body1">Scopri di più</MenuItem>
        </SideMenu>
        <Box>
          <PersonIcon sx={{ fontSize: 128, color: pink[200] }} />
          <Box sx={{ textAlign: "center", marginTop: "16px" }}>
            {userData && (
              <>
                <Typography variant="body1">
                  <strong>Nome:</strong> {userData.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Cognome:</strong> {userData.surname}
                </Typography>
                <Typography variant="body1">
                  <strong>Indirizzo:</strong> {userData.address}
                </Typography>
                <Typography variant="body1">
                  <strong>Numero di telefono:</strong> {userData.phoneNumber}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </PersonalAreaContainer>
  );
};

export default PersonalArea;

*/






































// import React from "react";
// import { styled } from "@mui/system";
// import { Box, Typography } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
// import { pink, grey } from "@mui/material/colors";
// import logo from "../assets/logo.png";

// const PersonalArea = () => {
//   const PersonalAreaContainer = styled(Box)({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: pink[50],
//   });

//   const Banner = styled(Box)({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     padding: "16px",
//     marginBottom: "16px",
//     boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
//   });

//   const SideMenu = styled(Box)({
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//     width: "200px",
//     padding: "16px",
//     backgroundColor: grey[100],
//     borderRadius: "4px",
//   });

//   const MenuItem = styled(Typography)(({ highlighted }) => ({
//     color: highlighted ? pink[500] : "inherit",
//     cursor: "pointer",
//   }));

//   return (
//     <PersonalAreaContainer>
//       <Banner>
//         <img src={logo} alt="Airbnb" style={{ height: "48px" }} />
//       </Banner>
//       <Box sx={{ display: "flex" }}>
//         <SideMenu>
//           <MenuItem variant="body1" highlighted>
//             Area personale
//           </MenuItem>
//           <MenuItem variant="body1">Accedi</MenuItem>
//           <MenuItem variant="body1">Registrati</MenuItem>
//           <MenuItem variant="body1">Scopri di più</MenuItem>
//         </SideMenu>
//         <Box>
//           <PersonIcon sx={{ fontSize: 128, color: pink[200] }} />
//           <Box sx={{ textAlign: "center", marginTop: "16px" }}>
//             <Typography variant="body1">
//               <strong>Username:</strong> da fare 
              
//             </Typography>
//             <Typography variant="body1">
//               <strong>Password:</strong> ********
//             </Typography>
//             <Typography variant="body1">
//               <strong>Email:</strong> da fare 
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </PersonalAreaContainer>
//   );
// };

// export default PersonalArea;
