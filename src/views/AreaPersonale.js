import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, dividerClasses } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { pink, grey } from "@mui/material/colors";
import logo from "../assets/logo.png";

const PersonalArea = () => {
  const PersonalAreaContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #f5f5f5 0%, #fff 100%)",
  });

  
  const ContentContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  });

  const LogoWrapper = styled(Box)({
    position: "absolute",
    top: "16px",
    right: "16px",
    display: "flex",
    alignItems: "center",
  });

  const Logo = styled("img")({
    height: "48px",
    marginRight: "8px",
  });

  const SideMenu = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    backgroundColor: grey[100],
    borderRadius: "4px",
    padding: "16px",
  });

  const MenuItem = styled(Typography)(({ highlighted }) => ({
    color: highlighted ? pink[500] : "inherit",
    cursor: "pointer",
  }));

  return (
    <PersonalAreaContainer>
      <LogoWrapper>
        <Logo src={logo} alt="Airbnb" />
        <Typography variant="h6" component="span">
          Area personale
        </Typography>
      </LogoWrapper>
      <ContentContainer>
        <PersonIcon sx={{ fontSize: 128, color: pink[200] }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1">
            <strong>Username:</strong> da fare
          </Typography>
          <Typography variant="body1">
            <strong>Password:</strong> ********
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> da fare
          </Typography>
        </Box>
      </ContentContainer>
      <SideMenu>
        <MenuItem variant="body1" highlighted>
          Area personale
        </MenuItem>
        <MenuItem variant="body1">Accedi</MenuItem>
        <MenuItem variant="body1">Registrati</MenuItem>
        <MenuItem variant="body1">Scopri di più</MenuItem>
      </SideMenu>
    </PersonalAreaContainer>
  );
};

export default PersonalArea;
