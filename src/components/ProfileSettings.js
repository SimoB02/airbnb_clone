import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// icone
import { BsGlobe } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import BurgerMenu from "./MenuTendina"

let flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#"> Become a Host </Link>

      <Stack direction="row">
        <Button>
          {" "}
          <BsGlobe size={24} /> {""}
        </Button>

        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack direction="row" alignItems="center">
            
            <Button>
              {<FaRegUserCircle size={24} />}
              </Button>

            <BurgerMenu />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
