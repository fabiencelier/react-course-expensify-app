import React from 'react';
import { connect } from 'react-redux';
import { setText as setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type='text' value={props.filters.text} onChange={(i) => {
      props.dispatch(setTextFilter({ text: i.target.value}));
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);
