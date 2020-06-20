
import React, {useReducer} from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}





const decrementAC = () => ({type: 'decrement'});

const incrementAC = () => ({type: 'increment'});


// const reduxDispatch = (dispatch, AC) => {
//     return dispatch(AC);
// }

// const decrement = (dispatch) => {
//     return dispatch(decrementAC);
// }

// const increment = (dispatch) => {
//     return dispatch(incrementAC);
// }


export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => {dispatch(decrementAC)}}>-</button>
      <button onClick={() => {dispatch(incrementAC)}}>+</button>
    </>
  );
}