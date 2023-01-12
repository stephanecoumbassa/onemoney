import DeleteIcon from "@mui/icons-material/Delete";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import PaidIcon from "@mui/icons-material/Paid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import Footer from "@/Footer";
import Header from "@/Header";
import { numerique } from "@/services/UtilService";
import { expenseDispatch, incomeDispatch } from "@/stores/BaseStore";
import { Income, Stateype } from "@/Types/BaseType";

import styles from "../App.module.css";

// const dateForDateTimeInputValue = new Date().toISOString().split("T")[0];

// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map(value =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

export default function Budgets() {
  const expenses = useSelector((state: Stateype) => state?.base.expenses);
  const incomes = useSelector((state: Stateype) => state?.base.incomes);
  const [transactions, setTransactions] = React.useState<Income[]>([]);
  // console.log(incomes);

  React.useEffect(() => {
    expenseDispatch();
    incomeDispatch();
    const mergedArray: Income[] = expenses.reduce(
      (acc, current) => acc.concat(current),
      incomes
    );
    // @ts-ignore
    mergedArray.sort(
      (a: Income, b: Income) =>
        (new Date(b?.datecreated) as any) - (new Date(a?.datecreated) as any)
    );

    console.log(mergedArray);
    setTransactions(mergedArray);
  }, []);

  return (
    <main className={styles.main}>
      <Header color="error" title="Transac. du mois" />

      <Box sx={{ p: 1, mt: 1 }}>
        <Grid xs={12}>
          <List dense={true}>
            {transactions.map((transaction, idx) => (
              <ListItem
                key={idx}
                alignItems="flex-start"
                secondaryAction={
                  <small aria-label="delete">
                    {/*<DeleteIcon />*/}
                    {numerique(transaction.amount)}
                  </small>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    {transaction.type === "income" && (
                      <PaidIcon color="success" />
                    )}
                    {transaction.type === "expense" && (
                      <MoneyOffIcon color="error" />
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.category}
                  secondary={transaction.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Box>

      <Footer />
    </main>
  );
}
