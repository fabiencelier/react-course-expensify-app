import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';
import { setText as setTextFilter } from './actions/filters';
import getVisibleExpenses from './selecters/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: '10000'}));
store.dispatch(addExpense({description: 'rent', amount: '800000'}));
store.dispatch(setTextFilter({ text: 'e'}));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
