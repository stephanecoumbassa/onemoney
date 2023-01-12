// DISPATCHERS FUNCTIONS
import * as groupBy from "lodash/groupBy";
import * as sumBy from "lodash/sumBy";

import Repository from "@/DbRepository";

import { store } from "./BaseStore";

export async function budgetDispatch() {
  await Repository.budgetAll().then(data => {
    const budGrp = groupBy(data, "category");
    store.dispatch(store.setBudgetsGroup(budGrp));
    const sum = sumBy(data, "amount");
    store.dispatch(setBudgetSum(sum));
  });
}

export async function expenseDispatch() {
  await Repository.expenseAll().then(data => {
    const expGrp = groupBy(data, "category");
    store.dispatch(setExpensesGroup(expGrp));
    const sum = sumBy(data, "amount");
    store.dispatch(setExpenseSum(sum));
  });
}

export async function incomeDispatch() {
  await Repository.incomeAll().then(data => {
    const icomeGrp = groupBy(data, "category");
    store.dispatch(setIncomesGroup(icomeGrp));
    console.log(icomeGrp);
    const sum = sumBy(data, "amount");
    store.dispatch(setIncomeSum(sum));
  });
}
