import { configureStore, createSlice } from "@reduxjs/toolkit";
import {groupBy, sumBy} from "lodash";

export const baseSlice = createSlice({
  name: "base",
  initialState: {
    value: 0,
    valuesum: 0,
    expenses: [],
    incomes: [],
    expensesGroup: [],
    incomesGroup: [],
    budgets: {},
    income: {},
    expense: {},
    incomeSum: 0,
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
    addvaluesum: (state, action) => {
      state.valuesum = action.payload;
      state.expenseSum = action.payload;
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
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setExpenseModalStatus: (state, action) => {
      // state.expenseModalStatus = action.payload
      state.expenseModalStatus = !state.expenseModalStatus;
    },
    setIncomeModalStatus: (state, action) => {
      state.expenseModalStatus = !state.expenseModalStatus;
    },
    setExpensesGroup: (state, action) => {
      state.expensesGroup = action.payload;
    },
    setIncomesGroup: (state, action) => {
      state.incomesGroup = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setExpenseSum,
  setIncomeSum,
  setBalance,
  setExpenseModalStatus,
  setIncomeModalStatus,
  setExpensesGroup,
  setIncomesGroup,
} = baseSlice.actions;

export const store = configureStore({
  reducer: {
    base: baseSlice.reducer,
  },
});

export function expenseDispatch(data) {
  const expGrp = groupBy(data, "category");
  store.dispatch(setExpensesGroup(expGrp));
  const sum = sumBy(data, "amount");
  store.dispatch(setExpenseSum(sum));
}

export function incomeDispatch(data) {
  const icomeGrp = groupBy(data, "category");
  store.dispatch(setIncomesGroup(icomeGrp));
  console.log(icomeGrp);
  const sum = sumBy(data, "amount");
  console.log(sum);
  store.dispatch(setIncomeSum(sum));
}
