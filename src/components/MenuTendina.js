import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to="/Registrazione" style={{color: "black", textDecoration: "none"}} >
          {" "}
          <MenuItem onClick={handleClose}>Registration</MenuItem>{" "}
        </Link>

       
        <Link to="/Login" style={{color: "black", textDecoration: "none"}} >
          {" "}
        <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>

        <MenuItem onClick={handleClose}>Exit</MenuItem>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
