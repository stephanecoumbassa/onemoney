import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import React from "react";

function Navigation() {
    return (
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
    )
}

export default Navigation;
