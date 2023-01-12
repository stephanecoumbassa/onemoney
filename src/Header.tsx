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
import { useSelector } from "react-redux";

import Navigation from "@/Navigation";
import { numerique } from "@/services/UtilService";
import { expenseDispatch, incomeDispatch } from "@/stores/BaseStore";
import { Stateype } from "@/Types/BaseType";

const Header = ({ color, title }: any) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  // const budgetSum = useSelector((state: Stateype) => state?.base.budgetSum);
  const incomeSum = useSelector((state: Stateype) => state?.base.incomeSum);
  const expenseSum = useSelector((state: Stateype) => state?.base.expenseSum);

  const getBalance = () => {
    return numerique(Number(incomeSum) - Number(expenseSum));
  };

  React.useState(() => {
    expenseDispatch();
    incomeDispatch();
  });

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
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            {/*{title ?? "Tous les comptes"}*/}
            {title ?? getBalance() + "CFA"}
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
            29 Décembre 2022{" "}
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
