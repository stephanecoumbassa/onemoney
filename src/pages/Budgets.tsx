import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import sumBy from "lodash/sumBy";
import type { PropsWithChildren } from "react";
import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import Repository from "@/DbRepository";
import Footer from "@/Footer";
import Header from "@/Header";
import { numerique } from "@/services/UtilService";
import * as BaseStore from "@/stores/BaseStore";
import { Stateype } from "@/Types/BaseType";

import styles from "../App.module.css";

const budgetDispatch = BaseStore.budgetDispatch;

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

function Gridelement({ data, category, color, onclick, children }: any) {
  return (
    <Grid xs={3} direction="row" style={{ textAlign: "center" }}>
      <small style={{ textTransform: "capitalize" }}>{category}</small>
      <Item color={color} style={{ color: "white" }} onClick={onclick}>
        {children}
      </Item>
      <small>
        {numerique(sumBy(data, "amount"))}
        {/*<small>CFA</small>*/}
      </small>
    </Grid>
  );
}

const dateForDateTimeInputValue = new Date().toISOString().split("T")[0];

export default function Budgets() {
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [datecreated, setDatecreated] = React.useState<string>(
    dateForDateTimeInputValue
  );
  const budgetSum: any = useSelector(
    (state: Stateype) => state?.base.budgetSum
  );
  const budgetsGroup: any = useSelector(
    (state: Stateype) => state?.base.budgetsGroup
  );

  React.useEffect(() => {
    budgetDispatch();
  }, []);

  const toogleOpen = (_category?: string) => {
    if (_category) {
      setCategory(_category);
    }
    setOpen(!open);
  };

  const addBudget = async () => {
    await Repository.budgetAdd({
      amount,
      qty: 1,
      tva: 0,
      category,
      description,
      datecreated,
    });
    budgetDispatch();
    toogleOpen();
  };

  return (
    <main className={styles.main}>
      <Header color="error" title="Budget du mois" />

      <Box sx={{ p: 1, mt: 2 }}>
        <Grid container spacing={2}>
          <Gridelement
            data={budgetsGroup?.alimentation}
            category={"alimentation"}
            color={"#3283a8"}
            onclick={() => {
              toogleOpen("alimentation");
            }}
          >
            <FastfoodIcon />
          </Gridelement>

          <Gridelement
            data={budgetsGroup?.loyer}
            category={"loyer"}
            color={"#3240a8"}
            onclick={() => {
              toogleOpen("loyer");
            }}
          >
            <FastfoodIcon />
          </Gridelement>

          <Gridelement
            data={budgetsGroup?.loisirs}
            category={"loisirs"}
            color={"#a83256"}
            onclick={() => {
              toogleOpen("loisirs");
            }}
          >
            <NightlifeIcon style={{ color: "white" }} />
          </Gridelement>

          <Gridelement
            data={budgetsGroup?.transport}
            category={"transport"}
            color={"#a83256"}
            onclick={() => {
              toogleOpen("transport");
            }}
          >
            <DirectionsCarIcon />
          </Gridelement>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={3}>
            <Box sx={{ my: 2 }}>
              <small>Santé</small>
              <Item color="#50cc5c" onClick={() => toogleOpen("sante")}>
                <LocalHospitalIcon />
              </Item>
              <small>{sumBy(budgetsGroup.sante, "amount")} CFA</small>
            </Box>
            <Box sx={{ my: 2 }}>
              <small>Famille</small>
              <Item color="#9850cc" onClick={() => toogleOpen("famille")}>
                <FastfoodIcon />
              </Item>
              <small>{sumBy(budgetsGroup.famille, "amount")} CFA</small>
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
                  color: "#1c1a1a",
                  fontSize: "2em",
                  border: "3px solid #1c1a1a",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "50%",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                {numerique(budgetSum)}
              </button>
            </Box>
          </Grid>

          <Grid xs={3}>
            <Box sx={{ my: 2 }}>
              <small>Restaurant</small>
              <Item color="#c7263b" onClick={() => toogleOpen("restaurant")}>
                <FastfoodIcon />
              </Item>
              <small>{sumBy(budgetsGroup.restaurant, "amount")} CFA</small>
            </Box>
            <Box sx={{ my: 2 }}>
              <small>Achats</small>
              <Item color="#855140" onClick={() => toogleOpen("achats")}>
                <FastfoodIcon />
              </Item>
              <small>{sumBy(budgetsGroup.achat, "amount")} CFA</small>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />

      <Dialog open={open} onClose={() => toogleOpen("")}>
        <DialogTitle>
          Ajouter un budget <br />
          {/*<small>{category}</small>*/}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            name="name"
            label="Montant"
            variant="filled"
            onChange={e => setAmount(parseInt(e.target.value))}
          />
          <br />
          <br />
          <TextField
            fullWidth
            multiline
            maxRows={4}
            name="description"
            label="Description"
            variant="filled"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDescription(e?.target?.value)
            }
          />
          <br />
          <br />
          <TextField
            id="datetime-local"
            label="Date"
            type="date"
            defaultValue={dateForDateTimeInputValue}
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDatecreated(e?.target?.value)
            }
          />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toogleOpen("")}>Annuler</Button>
          <Button onClick={addBudget}>Ajouter</Button>
        </DialogActions>
      </Dialog>

      {/*<Snackbar*/}
      {/*  key={"top right"}*/}
      {/*  anchorOrigin={{ vertical: "top", horizontal: "right" }}*/}
      {/*  autoHideDuration={4000}*/}
      {/*  open={openSnack}*/}
      {/*  onClose={() => setOpenSnack(false)}*/}
      {/*  onClick={() => setOpenSnack(false)}*/}
      {/*>*/}
      {/*  <Alert severity="success" sx={{ width: "100%" }} onClose={handleClose}>*/}
      {/*    Créé avec succès!*/}
      {/*  </Alert>*/}
      {/*</Snackbar>*/}
      {/* <img className={styles.logo} alt="React logo" width="400px" src={Logo} /> */}
      {/* <HelloWorld msg="Hello React + TypeScript + Vite" /> */}
    </main>
  );
}
