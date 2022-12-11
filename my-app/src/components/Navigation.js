import React from "react";
import AppBar from "@mui/material/Appbar";
import { Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/icons/logo.png";


const Navigation = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="head-text">
                <div className="head-image">
            <img
              src={Logo}
              alt="babble logo"
              style={{ width: 150, height: 100 }}
            />
            </div>
            <p className="logo-image" >Babble</p>
            </div>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
