export interface Income {
  id?: number;
  qty?: number;
  total?: number;
  tva?: number;
  description?: string;
  amount: number;
  datecreated?: string;
  dateupdated?: string;
  category?: string;
}

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

export interface Category {
  id?: number;
  name: string;
  type?: string;
  icon?: string;
}

export interface CategoryList {
  alimentation?: Income[];
  loyer?: Income[];
  loisirs?: Income[];
  famille?: Income[];
  transport?: Income[];
  restaurant?: Income[];
  achat?: Income[];
}

export interface Stateype {
  base: {
    value: number;
    expenses: any[];
    incomes: any[];
    expenseGroup?: any[];
    expensesGroup?: CategoryList[];
    incomeGroup?: any[];
    incomesGroup?: any[];
    income: object;
    expense: object;
    incomeSum: number;
    expenseSum: number;
    balance: number;
    expenseModalStatus: boolean;
    incomeModalStatus: boolean;
    baseUrl: string;
  };
}
