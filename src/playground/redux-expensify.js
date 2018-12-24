import { createStore, combineReducers } from 'redux';7
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id != action.id);
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

const expOne = store.dispatch(addExpense({description: 'Rent', amount: 50000}));
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));
store.dispatch(addExpense({description: 'other', amount: 50000}));
store.dispatch(removeExpense({id: expOne.expense.id}));
store.dispatch(removeExpense({id: expTwo.expense.id}));


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

