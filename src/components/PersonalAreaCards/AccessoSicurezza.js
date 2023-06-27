import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";

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
  
  const AccessoSicurezza = () => {
    return (
      <CardContainer>
        <SecurityIcon style={{ fontSize: 48, marginBottom: 16 }} />
        <Typography variant="h6">Accesso e Sicurezza</Typography>
      </CardContainer>
    );
  };
  
  export default AccessoSicurezza;
  