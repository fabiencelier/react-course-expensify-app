import React from 'react';
import { connect } from 'react-redux';
import { setText as setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='text'
      value={props.filters.text} onChange={(i) => {
        props.dispatch(setTextFilter({ text: i.target.value}));
      }}/>
    <select
      value={props.filters.sortBy}
      onChange={(i) => {
        if(i.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (i.target.value === 'amount') {
          props.dispatch(sortByAmount());
        }
      }}>
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);
