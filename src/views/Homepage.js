import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import OptionsTab from "../components/OptionsTab";
import Container from "@mui/material/Container";
import Locationcards from "../components/LocationCards";


function Homepage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          {/* Il componente qua sotto delle cards va mostrato in seguito alla chiamata al server  */}
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Locationcards />
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Homepage;
