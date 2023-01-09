import { createSlice, configureStore } from '@reduxjs/toolkit'

export const baseSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    expenses: [],
    incomes: [],
    expensesGroup: [],
    income: {},
    expense: {},
    incomeSum: 0,
    expenseSum: 0,
    balance: 0,
    expenseModalStatus: false,
    incomeModalStatus: false,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setExpenseSum: (state, action) => {
      state.expenseSum = action.payload
    },
    setIncomeSum: (state, action) => {
      state.incomeSum = action.payload
    },
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    setExpenseModalStatus: (state, action) => {
      // state.expenseModalStatus = action.payload
      state.expenseModalStatus = !state.expenseModalStatus
    },
    setIncomeModalStatus: (state, action) => {
      state.expenseModalStatus = !state.expenseModalStatus
    },
    setExpensesGroup: (state, action) => {
      state.expensesGroup = action.payload
    }
  }
})

export const {
  increment,
  decrement,
  incrementByAmount,
  setExpenseSum,
  setIncomeSum,
  setBalance,
  setExpenseModalStatus,
  setIncomeModalStatus
} = baseSlice.actions

const BaseStore = configureStore({
  reducer: {
    base: baseSlice
  }
})

export default BaseStore