import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: createSlice.reducer });

export default store;
