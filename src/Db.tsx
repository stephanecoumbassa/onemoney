import Dexie, { Table } from "dexie";

import { Category, Income } from "@/Types/BaseType";

class DB extends Dexie {
  category!: Table<Category>;
  incomes!: Table<Income>;
  expenses!: Table<Income>;
  budgets!: Table<Income>;

  constructor() {
    super("DB");
    this.version(2).stores({
      icon: "++id, name",
      category: "++id, name, type, icon",
      incomes:
        "++id, qty, amount, total, tva, datecreated, dateupdated, category, type",
      expenses:
        "++id, qty, amount, total, tva, datecreated, dateupdated, category, type",
      budgets:
        "++id, qty, amount, total, tva, datecreated, dateupdated, category",
    });
  }
}

export const db = new DB();
