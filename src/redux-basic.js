const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// 1. Reducer

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

// 2. Store

const store = createStore(rootReducer);
// console.log(store.getState());

// 3. Subscription

// this run when action dispatch
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// 4. Dispatching Action

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
// console.log(store.getState());

// run this file => node redux-basic.js
