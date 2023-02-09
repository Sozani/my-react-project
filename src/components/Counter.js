import classes from "./Counter.module.css";
import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandle = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
