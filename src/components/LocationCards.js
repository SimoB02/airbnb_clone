import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import CarouselCard from "./CarouselCard/CarouselCard";

import axios from "axios";

const Locationcards = () => {
const [data, setData] = useState([]);

  async function getCards() {
    try {
      const response = await axios.get("http://localhost:3000/Mock-Data");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {data.map((location) => (
          <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
            <CarouselCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Locationcards;
