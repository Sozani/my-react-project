import classes from "./Counter.module.css";
import React from "react";

const Counter = () => {
  const toggleCounterHandle = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>--Counter Value--</div>
    </main>
  );
};

export default Counter;
