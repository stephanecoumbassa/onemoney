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
  business?: Income[];
  salaire?: Income[];
  sante?: Income[];
  service?: Income[];
  autres?: Income[];
}

export interface Stateype {
  base: {
    value: number;
    expenses: Income[];
    incomes: Income[];
    expenseGroup?: any[];
    budgetsGroup?: any[];
    expensesGroup?: CategoryList[] | undefined[];
    incomeGroup?: CategoryList[] | undefined[];
    incomesGroup?: any[];
    income?: object;
    expense?: object;
    incomeSum?: number;
    expenseSum?: number;
    budgetSum?: number;
    balance?: number;
    expenseModalStatus?: boolean;
    incomeModalStatus?: boolean;
    baseUrl?: string;
  };
}
