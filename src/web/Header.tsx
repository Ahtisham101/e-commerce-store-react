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
//2

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, ListItemButton, TextField } from "@mui/material";

import Image from "next/image";
const paths = [
  { routePath: "/", routeName: "Home" },
  { routePath: "/", routeName: "Products" },
  { routePath: "/", routeName: "Pricing" },
  { routePath: "/", routeName: "Blog" },
];

type Anchor = "left" | "right";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {paths.map((path, index) => (
          <ListItem button key={path.routeName}>
            <ListItemButton>
              <Link
                href={path.routePath}
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                <ListItemText primary={path.routeName} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer("left", true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                Home
              </Link>
            </Button>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseEnter={handleClick}
              sx={{ color: "white" }}
            >
              Products
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onMouseLeave={handleClose}
            >
              <Link
                href="/jackets"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                <MenuItem onClick={handleClose}>Jackets</MenuItem>
              </Link>
              <Link
                href="/jeans"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                <MenuItem onClick={handleClose}>jeans</MenuItem>
              </Link>
              <Link
                href="/shirts"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                <MenuItem onClick={handleClose}>shirts</MenuItem>
              </Link>
            </Menu>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/" color="inherit" sx={{ textDecoration: "none" }}>
                Blog
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={toggleDrawer("right", true)} sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ color: "white" }} />
                <Typography sx={{ color: "white", marginLeft: "0.5rem" }}>
                  1
                </Typography>
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
              {(["right"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    <Box
                      sx={{
                        width: { xs: "10rem", md: "25rem" },
                        height: "30rem",
                        mx: { xs: "1.5rem", md: "3rem" },
                        mt: { xs: "0rem", md: "4rem" },
                      }}
                    >
                      <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
                        Cart
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "1rem",
                        }}
                      >
                        <img
                          width={150}
                          height={200}
                          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg"
                          alt="logo"
                        />

                        <Box sx={{ ml: { xs: "0rem", md: "1rem" } }}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              mt: { xs: "1rem", md: "0rem" },
                            }}
                          >
                            Product name
                          </Typography>
                          <TextField
                            size="small"
                            sx={{ marginTop: "1rem" }}
                            id="outlined-number"
                            label="No of items"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <Typography sx={{ mt: { xs: "0.3rem", md: "1rem" } }}>
                            PKR 2,999
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <Link href="/checkout">
                          <a>
                            <Button
                              variant="contained"
                              sx={{ mt: { xs: "1rem", md: "2rem" } }}
                            >
                              Checkout
                            </Button>
                          </a>
                        </Link>
                      </Box>
                    </Box>
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
