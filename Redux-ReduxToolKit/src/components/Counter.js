import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  function incrementCounterHandler() {
    dispatch(counterActions.increment());
  }

  function increaseCounterHandler() {
    dispatch(counterActions.increase(5));
  }

  function decrementCounterHandler() {
    dispatch(counterActions.decrement());
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={increaseCounterHandler}>increase by 5</button>
        <button onClick={decrementCounterHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
