import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { green, white } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

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
          <Box sx={{ width: "auto" }} role="presentation">
            <Box
              sx={{
                width: 250,
                height: 120,
                padding: 2,
                paddingRight: 1,
                color: "white",
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "#purple",
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid xs={10} md={8}>
                  <AccountCircleIcon sx={{ fontSize: 50, color: "white" }} />
                  <br />
                  <span>SE CONNECTER</span>
                </Grid>
                <Grid xs={2} md={4}>
                  <CloudOffIcon sx={{ fontSize: 50, color: "white" }} />
                </Grid>
              </Grid>
            </Box>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "teal",
                color: "white",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  Icon
                  {/* <SendIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
            </List>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Menu
                </ListSubheader>
              }
            >
              {[
                { name: "langues" },
                { name: "theme" },
                { name: "currency" },
                { name: "format" },
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index == 0 ? <LanguageIcon /> : <MailIcon />}
                      {/*{index % 2 === 0 ? <LanguageIcon /> : <MailIcon />}*/}
                    </ListItemIcon>
                    {/*<ListItemText primary={text} />*/}
                    <ListItemText primary={text.name} secondary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
};

export default Header;
