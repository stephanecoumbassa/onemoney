import Dexie, { Table } from "dexie";

interface Friend {
  id?: number;
  name: string;
  age: number;
}
interface Category {
  id?: number;
  name: string;
  type?: string;
  icon?: string;
}
interface Income {
  id?: number;
  qty?: number;
  amount: number;
  total: number;
  tva?: number;
  datecreated: string;
  dateupdated: string;
  category: string;
}

class DB extends Dexie {
  friends!: Table<Friend>;
  category!: Table<Category>;
  incomes!: Table<Income>;
  expenses!: Table<Income>;

  constructor() {
    super("DB");
    this.version(2).stores({
      friends: "++id, name, age",
      icon: "++id, name",
      category: "++id, name, type, icon",
      incomes:
        "++id, qty, amount, total, tva, datecreated, dateupdated, category",
      expenses:
        "++id, qty, amount, total, tva, datecreated, dateupdated, category",
    });
  }
}

export const db = new DB();
