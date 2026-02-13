import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
              Login
            </Typography>
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Card
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/t" style={{ textDecoration: "none", color: "white" }}>
                Table
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/c" style={{ textDecoration: "none", color: "white" }}>
                State
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/b" style={{ textDecoration: "none", color: "white" }}>
                Counter
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/e" style={{ textDecoration: "none", color: "white" }}>
                Example
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/a" style={{ textDecoration: "none", color: "white" }}>
                API Data
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
