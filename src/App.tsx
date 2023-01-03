import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import type { PropsWithChildren } from "react";
import React from "react";

import styles from "./App.module.css";
import CategoryModal from "./components/modal/CategoryModal";
import ExpenseModal from "./components/modal/ExpenseModal";
import IncomeModal from "./components/modal/IncomeModal";
import Repository from "./DbRepository";
import Footer from "./Footer";
import Header from "./Header";

const category = await Repository.categoryAll();
console.log(category);

type ItemProps = PropsWithChildren<{
  theme?: any;
  color?: string;
  width?: string;
  height?: string;
}>;

const Item = styled(Paper)(({ theme, color, width, height }: ItemProps) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
  color: "white",
  backgroundColor: color,
  borderRadius: "45px",
  height: height ?? "50px",
  width: width ?? "50px",
  margin: "0 auto",
}));

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [openIncome, setOpenIncome] = React.useState(false);
  const [openExpense, setOpenExpense] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [category, setCategory] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenIncome = (__category = "Default") => {
    setCategory(__category);
    setOpenIncome(true);
  };

  const handleCloseIncome = () => {
    setOpenIncome(false);
  };

  const handleClickOpenExepnse = (__category = "Default") => {
    setCategory(__category);
    setOpenExpense(true);
  };

  const handleCloseExpense = () => {
    setOpenExpense(false);
  };

  return (
    <main className={styles.main}>
      <Header />
      <Box sx={{ p: 1, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid xs={3} direction="row" style={{ textAlign: "center" }}>
            <small>Alimentation</small>
            <Item
              color="#3283a8"
              style={{ color: "white" }}
              onClick={() => handleClickOpenIncome("alimentation")}
            >
              <FastfoodIcon />
            </Item>
            <small>10000 CFA</small>
          </Grid>
          <Grid xs={3}>
            <small>Restaurant</small>
            <Item
              color="#3240a8"
              style={{ color: "white" }}
              onClick={() => handleClickOpenIncome("restaurant")}
            >
              <TableRestaurantIcon />
            </Item>
            <small>10000 CFA</small>
          </Grid>
          <Grid xs={3}>
            <small>Loisirs</small>
            <Item
              color="#a83256"
              onClick={() => handleClickOpenExepnse("loisirs")}
            >
              <NightlifeIcon style={{ color: "white" }} />
            </Item>
            <small>10000 CFA</small>
          </Grid>
          <Grid xs={3}>
            <small>Transports</small>
            <Item
              color="#f08d4f"
              style={{ color: "white" }}
              onClick={() => handleClickOpenExepnse("transport")}
            >
              <DirectionsCarIcon />
            </Item>
            <small>10000 CFA</small>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={3}>
            <Box sx={{ my: 2 }}>
              <small>Santé</small>
              <Item color="#50cc5c">
                <LocalHospitalIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
            <Box sx={{ my: 2 }}>
              <small>Famille</small>
              <Item color="#9850cc">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
          </Grid>

          {/* <Grid xs={6} container direction="row" justifyContent="center" alignItems="center"> */}
          <Grid
            container
            xs={6}
            direction="row"
            justifyContent="left"
            alignItems="center"
          >
            <CircularProgress
              color="inherit"
              variant={"determinate"}
              value={95}
              style={{ width: "130px", marginLeft: "-15px" }}
            />
          </Grid>

          <Grid xs={3}>
            <Box sx={{ my: 2 }}>
              <small>Cadeaux</small>
              <Item color="#c7263b">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
            <Box sx={{ my: 2 }}>
              <small>Achats</small>
              <Item color="#855140">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={3} direction="row">
            <small>Ajouter</small>
            <Item
              color="#e6e6f0"
              style={{ color: "black" }}
              onClick={handleClickOpen}
            >
              <h1>+</h1>
            </Item>
          </Grid>
          <Grid xs={3}>
            {/* <small>Restaurant</small>
            <Item color="#3240a8" style={{color: 'white'}} >
              <FastfoodIcon  />
            </Item>
            <small>10000 CFA</small> */}
          </Grid>
          <Grid xs={3}>
            {/* <small>Loisirs</small>
            <Item color="#a83256">
              <FastfoodIcon style={{color: 'white'}} />
            </Item>
            <small>10000 CFA</small> */}
          </Grid>
          <Grid xs={3}>
            {/* <small>Transports</small>
            <Item color="#f08d4f" style={{color: 'white'}} >
              <FastfoodIcon />
            </Item>
            <small>10000 CFA</small> */}
          </Grid>
        </Grid>
      </Box>
      <Footer />

      {/* <IncomeModal open={open} handleClose={handleClose} onChange={() => setOpenSnack(true)} /> */}
      <CategoryModal
        open={open}
        handleClose={handleClose}
        onChange={() => setOpenSnack(true)}
      />

      <IncomeModal
        category={category}
        open={openIncome}
        handleClose={handleCloseIncome}
        onChange={() => setOpenSnack(true)}
      />

      <ExpenseModal
        category={category}
        open={openExpense}
        handleClose={handleCloseExpense}
        onChange={() => setOpenSnack(true)}
      />

      <Snackbar
        key={"top right"}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        onClick={() => setOpenSnack(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }} onClose={handleClose}>
          Créé avec succès!
        </Alert>
      </Snackbar>
      {/* <img className={styles.logo} alt="React logo" width="400px" src={Logo} /> */}
      {/* <HelloWorld msg="Hello React + TypeScript + Vite" /> */}
    </main>
  );
}
