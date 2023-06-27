import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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

  const Pagamenti = () => {
    return (
      <CardContainer>
        <MonetizationOnIcon style={{ fontSize: 48, marginBottom: 16 }} />
        <Typography variant="h6">Pagamenti</Typography>
        <Typography variant="body1">Gestione Saldo</Typography>
      </CardContainer>
    );
  };
  
  export default Pagamenti;
  