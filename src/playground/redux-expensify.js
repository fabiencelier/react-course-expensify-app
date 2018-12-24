import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'i1',
    description: 'January Rent',
    note: 'This is the january rent',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};