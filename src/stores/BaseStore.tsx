import { configureStore, createSlice } from "@reduxjs/toolkit";
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

import Repository from "@/DbRepository";

export const baseSlice = createSlice({
  name: "base",
  initialState: {
    value: 0,
    expenses: [],
    incomes: [],
    expensesGroup: [],
    incomesGroup: [],
    budgetsGroup: [],
    budgets: [],
    budget: {},
    income: {},
    expense: {},
    valuesum: 0,
    incomeSum: 0,
    budgetSum: 0,
    expenseSum: 0,
    balance: 0,
    expenseModalStatus: false,
    incomeModalStatus: false,
    baseUrl: "Testing",
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload;
      return state;
    },
    setExpenseSum: (state, action) => {
      state.expenseSum = action.payload;
      return state;
    },
    setIncomeSum: (state, action) => {
      state.incomeSum = action.payload;
    },
    setBudgetSum: (state, action) => {
      state.budgetSum = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setExpenseModalStatus: state => {
      // state.expenseModalStatus = action.payload
      state.expenseModalStatus = !state.expenseModalStatus;
    },
    setIncomeModalStatus: state => {
      state.expenseModalStatus = !state.expenseModalStatus;
    },
    setExpensesGroup: (state, action) => {
      state.expensesGroup = action.payload;
    },
    setIncomesGroup: (state, action) => {
      state.incomesGroup = action.payload;
    },
    setBudgetsGroup: (state, action) => {
      state.budgetsGroup = action.payload;
    },
    setBudgets: (state, action) => {
      state.budgets = action.payload;
    },
    setIncomes: (state, action) => {
      state.incomes = action.payload;
    },
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  //EXPENSES
  setExpenses,
  setExpenseSum,
  setExpenseModalStatus,
  setExpensesGroup,
  //INCOMES
  setIncomeSum,
  setIncomes,
  setIncomesGroup,
  setIncomeModalStatus,
  //BUDGETS
  setBudgetSum,
  setBudgets,
  setBudgetsGroup,
  //BALANCES
  setBalance,
} = baseSlice.actions;

export const store = configureStore({
  reducer: {
    base: baseSlice.reducer,
  },
});

// DISPATCHERS FUNCTIONS
export const budgetDispatch = async () => {
  await Repository.budgetAll().then(data => {
    const budGrp = groupBy(data, "category");
    store.dispatch(setBudgetsGroup(budGrp));
    const sum = sumBy(data, "amount");
    store.dispatch(setBudgetSum(sum));
  });
};

export const expenseDispatch = async () => {
  await Repository.expenseAll().then(data => {
    store.dispatch(setExpenses(data));
    const expGrp = groupBy(data, "category");
    store.dispatch(setExpensesGroup(expGrp));
    const sum = sumBy(data, "amount");
    store.dispatch(setExpenseSum(sum));
  });
};

export const incomeDispatch = async () => {
  await Repository.incomeAll().then(data => {
    store.dispatch(setIncomes(data));
    const icomeGrp = groupBy(data, "category");
    store.dispatch(setIncomesGroup(icomeGrp));
    const sum = sumBy(data, "amount");
    store.dispatch(setIncomeSum(sum));
  });
};
