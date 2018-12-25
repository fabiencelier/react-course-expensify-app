import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  
switch(action.type) {
  case 'INCREMENT':
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
      count: state.count + incrementBy,
    };
  case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count: state.count - decrementBy,
    };
  case 'RESET':
    return {
      count: 0,
    };
  case 'SET': {
    return {
      count: action.count,
    }
  }
  default:
    return state;
  };
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy,
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}));

unsubscribe();