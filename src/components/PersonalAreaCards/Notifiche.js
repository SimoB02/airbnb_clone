import React from "react";
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Link } from "react-router-dom";

const CardContainer = styled("div")({
  backgroundColor: "#e0e0e0",
  padding: "16px",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

const Notifiche = () => {
  return (
    <CardContainer>
      <NotificationsIcon style={{ fontSize: 48, marginBottom: 16 }} />
      <Typography variant="h6">Gestione Notifiche e Avvisi</Typography>
      <Link to="/gestione-notifiche" style={{ textDecoration: "none" }}>
        <Button variant="contained" size="small">
          Vai alla gestione delle notifiche
        </Button>
      </Link>
    </CardContainer>
  );
};

export default Notifiche;
