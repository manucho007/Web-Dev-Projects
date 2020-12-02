import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // Import store
import { createStore } from 'redux';
// Import the combined reducers
import allReducers from './reducers/index';
// Import provider
import { Provider } from 'react-redux';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// // STORE - is a global state

// // ACTION - describes the actions
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// // REDUCER - Describes how actions tranform the states
// // Into the nest state
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);
// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
