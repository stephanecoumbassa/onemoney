import { useDispatch, useSelector } from "react-redux";

import { dateformat } from "@/services/UtilService";
import { Income } from "@/Types/BaseType";

import { db } from "./Db";
// const dispatch = useDispatch()

// Category
async function categoryAdd(name: string, icon: string) {
  const id = await db.category.add({ name, icon });
  return id;
}

async function categoryAll() {
  return db.category.toArray();
}

// Lisez une entrée existante
async function categoryGet(id: number) {
  return db.category.get(id);
}

// Income
async function incomeAll() {
  return db.incomes.toArray();
}
async function incomeAdd(income: Income) {
  return db.incomes.add({
    type: "income",
    amount: income.amount,
    qty: income?.qty,
    tva: income?.tva,
    category: income?.category ?? "Default",
    description: income?.description ?? "",
    datecreated: dateformat(income.datecreated ?? new Date(), 5),
    dateupdated: income.dateupdated ?? dateformat(new Date(), 5),
  });
}

// Expense
async function expenseAll() {
  return db.expenses.toArray();
}
async function expenseAdd(expense: Income) {
  return db.expenses.add({
    type: "expense",
    amount: expense.amount,
    qty: expense?.qty,
    tva: expense?.tva,
    category: expense?.category ?? "Default",
    description: expense?.description ?? "",
    datecreated: dateformat(expense.datecreated ?? new Date(), 5),
    dateupdated: dateformat(new Date(), 5),
  });
}

// Income
async function budgetAll() {
  return db.budgets.toArray();
}

async function budgetAdd(income: Income) {
  const newDate = new Date();
  newDate.setDate(1);
  let datecreated = newDate;
  if (income.datecreated) {
    const dte = new Date(income.datecreated);
    dte.setDate(1);
    datecreated = dte;
  }
  const criteres = {
    category: income.category,
    datecreated: dateformat(datecreated, 5),
  };

  const getBudget = await db.budgets.where(criteres).count();

  const values = {
    amount: income.amount,
    qty: income?.qty,
    tva: income?.tva,
    category: income?.category ?? "Default",
    description: income?.description ?? "",
    datecreated: dateformat(datecreated, 5),
    dateupdated: income.dateupdated ?? dateformat(new Date(), 5),
  };

  if (getBudget) {
    return db.budgets.where(criteres).modify(values);
  } else {
    return db.budgets.add(values);
  }
}

export default {
  categoryAdd,
  categoryAll,
  categoryGet,
  //INCOMES
  incomeAll,
  incomeAdd,
  //EXPENSES
  expenseAll,
  expenseAdd,
  //BUDGETS
  budgetAdd,
  budgetAll,
};
