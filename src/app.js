import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 10000}));
store.dispatch(addExpense({description: 'gaz bill', amount: 990000, createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 800000}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
