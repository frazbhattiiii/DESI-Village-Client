import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { isAuth } from "../../utils/auth";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import { calculateTotal } from "../../features/cartSlice/cart";
import { getCart } from "../../features/cartSlice/cartActions";
import { orderHistory } from "../../features/historySlice/userActions";

const pages = ["Home", "Menu", "About", "Contact"];
const noLogin = ["Login", "Signup"];
const settings = ["Profile", "Orders", "Logout"];
const user = localStorage.getItem("user");
const userId = JSON.parse(user) ? JSON.parse(user)._id : null;

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let profileName = "";

  dispatch(calculateTotal());
  dispatch(getCart());
  dispatch(orderHistory({ userId }));
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const redirectTo = (page) => {
    setAnchorElNav(null);
    navigate(`/${page}`);
  };
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(`/${page}`);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (localStorage.getItem("user")) {
    profileName = JSON.parse(localStorage.getItem("user")).name;
  }
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1AC073",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalDiningIcon
            sx={{ display: { xs: "none", md: "flex", color: "red" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "yellow",
              textDecoration: "none",
            }}
          >
            DESI VILLAGE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(page.toLowerCase())}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalDiningIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "red" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "yellow",
              textDecoration: "none",
            }}
          >
            DESI VILLAGE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => redirectTo(page.toLowerCase())}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CartIcon />
          {isAuth() ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={profileName ? profileName.toUpperCase() : null}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => redirectTo(setting.toLowerCase())}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
              {noLogin.map((page) => (
                <Button
                  key={page}
                  onClick={() => redirectTo(page.toLowerCase())}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
