import { dateformat } from "@/services/UtilService";
import { Income } from "@/Types/BaseType";
import { db } from "./Db";

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

async function incomeAll() {
  return db.incomes.toArray();
}
// Category
async function incomeAdd(income: Income) {
  return db.incomes.add({
    amount: income.amount,
    qty: income?.qty,
    tva: income?.tva,
    category: income?.category ?? "Default",
    datecreated: income.datecreated ?? dateformat(new Date(), 5),
    dateupdated: income.dateupdated ?? dateformat(new Date(), 5),
  });
}


async function expenseAll() {
  return db.expenses.toArray();
}
// Expense
async function expenseAdd(expense: Income) {
  return db.expenses.add({
    amount: expense.amount,
    qty: expense?.qty,
    tva: expense?.tva,
    category: expense?.category ?? "Default",
    description: expense?.description ?? "",
    datecreated: dateformat(new Date(), 5),
    dateupdated: dateformat(new Date(), 5),
  });
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
};
