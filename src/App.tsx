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
import { sumBy } from "@types/lodash";
import type { PropsWithChildren } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { numerique } from "@/services/UtilService";
import { CategoryList, Income, Stateype } from "@/Types/BaseType";

import styles from "./App.module.css";
import CategoryModal from "./components/modal/CategoryModal";
import ExpenseModal from "./components/modal/ExpenseModal";
import IncomeModal from "./components/modal/IncomeModal";
import Repository from "./DbRepository";
import Footer from "./Footer";
import Header from "./Header";
import {
  expenseDispatch,
  incomeDispatch,
  setExpensesGroup,
  setExpenseSum,
} from "./stores/BaseStore";

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
  // color: theme.palette.text.secondary, 111
  color: "white",
  backgroundColor: color,
  borderRadius: "45px",
  height: height ?? "50px",
  width: width ?? "50px",
  margin: "0 auto",
}));

function Gridelement({ data, category, color, onclick, children }) {
  return (
    <Grid xs={3} direction="row" style={{ textAlign: "center" }}>
      <small>{category}</small>
      <Item color={color} style={{ color: "white" }} onClick={onclick}>
        {children}
      </Item>
      <small>
        {sumBy(data, "amount")}
        <small>CFA</small>
      </small>
    </Grid>
  );
}

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [openIncome, setOpenIncome] = React.useState(false);
  const [openExpense, setOpenExpense] = React.useState(false);
  const [incomeStatus, setIncomeStatus] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const expenseSum = useSelector((state: Stateype) => state?.base.expenseSum);
  const expensesGroup = useSelector<any>(
    (state: Stateype) => state?.base.expensesGroup
  );
  const incomeSum = useSelector((state: Stateype) => state?.base.incomeSum);
  const incomesGroup = useSelector<any>(
    (state: Stateype) => state?.base.incomesGroup
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    Repository.expenseAll().then((data: any) => {
      expenseDispatch(data);
    });
    Repository.incomeAll().then((data: any) => {
      incomeDispatch(data);
    });
  }, []);

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
      <Header color="error" />
      {!incomeStatus && (
        <Box sx={{ p: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Gridelement
              data={expensesGroup?.alimentation}
              category={"alimentation"}
              color={"#3283a8"}
              onclick={() => {
                handleClickOpenExepnse("alimentation");
              }}
            >
              <FastfoodIcon />
            </Gridelement>

            <Grid xs={3}>
              <small>Loyer</small>
              <Item
                color="#3240a8"
                style={{ color: "white" }}
                onClick={() => handleClickOpenExepnse("loyer")}
              >
                <TableRestaurantIcon />
              </Item>
              <small>
                {sumBy(expensesGroup?.loyer, "amount")} <small>CFA</small>
              </small>
            </Grid>
            <Grid xs={3}>
              <small>Loisirs</small>
              <Item
                color="#a83256"
                onClick={() => handleClickOpenExepnse("loisirs")}
              >
                <NightlifeIcon style={{ color: "white" }} />
              </Item>
              <small>
                {sumBy(expensesGroup?.loisirs, "amount")} <small>CFA</small>
              </small>
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
              <small>
                {sumBy(expensesGroup["transport"], "amount")} <small>CFA</small>
              </small>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid xs={3}>
              <Box sx={{ my: 2 }}>
                <small>Santé</small>
                <Item
                  color="#50cc5c"
                  onClick={() => handleClickOpenExepnse("sante")}
                >
                  <LocalHospitalIcon />
                </Item>
                <small>{sumBy(expensesGroup.sante, "amount")} CFA</small>
              </Box>
              <Box sx={{ my: 2 }}>
                <small>Famille</small>
                <Item
                  color="#9850cc"
                  onClick={() => handleClickOpenExepnse("famille")}
                >
                  <FastfoodIcon />
                </Item>
                <small>{sumBy(expensesGroup.famille, "amount")} CFA</small>
              </Box>
            </Grid>

            {/* <Grid xs={6} container direction="row" justifyContent="center" alignItems="center"> */}
            <Grid
              container
              xs={6}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box sx={{ position: "relative", margin: "0 auto" }}>
                <button
                  style={{
                    color: "#cb1177",
                    fontSize: "2em",
                    border: "3px solid #cb1177",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "50%",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                  }}
                  onClick={() => setIncomeStatus(true)}
                >
                  {numerique(expenseSum)}
                </button>
              </Box>
            </Grid>

            <Grid xs={3}>
              <Box sx={{ my: 2 }}>
                <small>Restaurant</small>
                <Item
                  color="#c7263b"
                  onClick={() => handleClickOpenExepnse("restaurant")}
                >
                  <FastfoodIcon />
                </Item>
                <small>{sumBy(expensesGroup.restaurant, "amount")} CFA</small>
              </Box>
              <Box sx={{ my: 2 }}>
                <small>Achats</small>
                <Item
                  color="#855140"
                  onClick={() => handleClickOpenExepnse("achats")}
                >
                  <FastfoodIcon />
                </Item>
                <small>{sumBy(expensesGroup.achat, "amount")} CFA</small>
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
      )}

      {incomeStatus && (
        <Box sx={{ p: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid xs={3} direction="row" style={{ textAlign: "center" }}>
              <small>Salaire</small>
              <Item
                color="#00ad76"
                style={{ color: "white" }}
                onClick={() => handleClickOpenIncome("salaire")}
              >
                <FastfoodIcon />
              </Item>
              <small>{numerique(sumBy(incomesGroup?.salaire, "amount"))}</small>
            </Grid>
            <Grid xs={3}>
              <small>Business</small>
              <Item
                color="#03825a"
                style={{ color: "white" }}
                onClick={() => handleClickOpenIncome("business")}
              >
                <TableRestaurantIcon />
              </Item>
              <small>
                {numerique(sumBy(incomesGroup?.business, "amount"))}
              </small>
            </Grid>
            <Grid xs={3}>
              <small>Services</small>
              <Item
                color="#025c3f"
                onClick={() => handleClickOpenExepnse("service")}
              >
                <NightlifeIcon style={{ color: "white" }} />
              </Item>
              <small>
                {numerique(sumBy(incomesGroup?.service, "amount"))}{" "}
              </small>
            </Grid>
            <Grid xs={3}>
              <small>Autres</small>
              <Item
                color="#013827"
                style={{ color: "white" }}
                onClick={() => handleClickOpenExepnse("autres")}
              >
                <DirectionsCarIcon />
              </Item>
              <small>
                {numerique(sumBy(incomesGroup?.autres, "amount"))} CFA
              </small>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Box sx={{ my: 2 }}>
                <small style={{ color: "white" }}>Santé</small>
                <Item color="#FFF">
                  <LocalHospitalIcon />
                </Item>
                <small style={{ color: "white" }}>10000 CFA</small>
              </Box>
              <Box sx={{ my: 2 }}>
                <small style={{ color: "white" }}>Famille</small>
                <Item color="#FFF">
                  <FastfoodIcon />
                </Item>
                <small style={{ color: "white" }}>10000 CFA</small>
              </Box>
            </Grid>

            {/* <Grid xs={6} container direction="row" justifyContent="center" alignItems="center"> */}
            <Grid
              container
              xs={6}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <button
                style={{
                  color: "#11cb7d",
                  fontSize: "2em",
                  border: "3px solid #11cb7d",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "50%",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
                onClick={() => setIncomeStatus(false)}
              >
                {numerique(incomeSum)}
              </button>
            </Grid>

            <Grid xs={3}>
              {/* <Box sx={{ my: 2 }}>
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
              </Box> */}
            </Grid>
          </Grid>
        </Box>
      )}

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
