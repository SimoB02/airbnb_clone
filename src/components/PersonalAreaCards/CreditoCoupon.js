import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

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

const CreditoCoupon = () => {
  return (
    <CardContainer>
      <CardGiftcardIcon style={{ fontSize: 48, marginBottom: 16 }} />
      <Typography variant="h6">Coupon e Sconti</Typography>
    </CardContainer>
  );
};

export default CreditoCoupon;
