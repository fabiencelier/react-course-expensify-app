import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch }from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is Dashboard</div>
);

const AddExpensePage = () => (
  <div>This is Add page</div>
);

const EditExpensePage = () => (
  <div>This is Edit page</div>
);

const HelpPage = () => (
  <div>This is Help page</div>
);

const NotFoundPage = () => (
  <div>
  <p>Page Not Found</p>
  <Link to='/'>Go back home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active' exact={true}>Create new expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active' exact={true}>Edit expense</NavLink>
    <NavLink to='/help' activeClassName='is-active' exact={true}>Help!</NavLink>
  </header>
); 

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={ExpenseDashboardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} /> 
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
