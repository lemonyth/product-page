import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { Badge, CssBaseline, List, ListItem } from "@mui/material";

import useStyles from "./styles";
import logo from "../../images/logo.svg";
import menuIcon from "../../images/icon-menu.svg";
import avatar from "../../images/image-avatar.png";
import cart from "../../images/icon-cart.svg";
import closeIcon from "../../images/icon-close.svg";

const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

function NavBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline>
        <Container>
          <AppBar
            position="relative"
            elevation={0}
            className={classes.appBar}
            sx={{ backgroundColor: "white" }}
          >
            <Toolbar>
              {/* logo on large display */}
              <Box
                component="img"
                sx={{
                  height: 20,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
                alt="logo"
                src={logo}
              />
              {/* menu icon and  menu  on smaller displays */}
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                  color="inherit"
                >
                  {/* Drawer menu */}
                  <Box component="img" alt="menuIcon" src={menuIcon} />
                </IconButton>

                {/* Drawer menu */}
                <Drawer
                  anchor={"left"}
                  open={state}
                  onClose={toggleDrawer(false)}
                >
                  <div onClick={toggleDrawer(false)} className={classes.drawer}>
                    <IconButton sx={{ ml: 1, mt: 2, mb: 4 }}>
                      <Box component="img" alt="closeIcon" src={closeIcon} />
                    </IconButton>
                    <List>
                      {navLinks.map((link) => (
                        <ListItem
                          button
                          key={link}
                          onClick={handleCloseNavMenu}
                        >
                          <Typography
                            sx={{ fontWeight: "bold" }}
                            textAlign="center"
                          >
                            {link}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </Drawer>
              </Box>

              {/* logo on smaller displays */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Box component="img" alt="logo" src={logo} />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  ml: 5,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mr: 1,
                      color: "gray",
                      display: "block",
                      borderBottom: "solid transparent 4px",
                      borderRadius: 0,
                      textTransform: "capitalize",
                      fontSize: 15,
                      height: 120,
                      "&:hover": {
                        color: "black",
                        bgcolor: "white",
                        borderBottom: "solid red 4px",
                        borderRadius: 0,
                      },
                    }}
                  >
                    {link}
                  </Button>
                ))}
              </Box>

              {/* cart and avatar*/}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Badge badgeContent={4} color="error">
                  <Box component="img" alt="cart" src={cart}></Box>
                </Badge>
              </IconButton>
              <Box sx={{ flexGrow: 0, ml: 4 }}>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    border: "solid white 2px",
                    "&:hover": { border: "solid red 2px" },
                  }}
                >
                  <Avatar alt="avatar" src={avatar} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </CssBaseline>
    </>
  );
}

export default NavBar;