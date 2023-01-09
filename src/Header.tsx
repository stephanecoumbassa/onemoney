import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import Navigation from "@/Navigation";

const Header = ({ color }: any) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={color} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            {" "}
            Tous les comptes{" "}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 2 }}
          >
            <EditIcon />
          </IconButton>
        </Toolbar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            noWrap
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            {" "}
            29 Décembre 202211{" "}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 2 }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <React.Fragment key={"left"}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <Drawer
          anchor={"left"}
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
        >
          <Navigation />
        </Drawer>
      </React.Fragment>
    </Box>
  );
};

export default Header;
