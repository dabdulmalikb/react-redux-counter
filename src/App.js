import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

//https://www.youtube.com/watch?v=CVpUuw9XSjY
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ paddingTop: "50px", textAlign: "center" }}>
      <MdAddCircleOutline
        onClick={() => dispatch(increment())}
        color="blue"
        size="3rem"
      />
      <MdRemoveCircleOutline
        onClick={() => dispatch(decrement())}
        color="red"
        size="3rem"
      />
      <div></div>
      <div>
        <h1>Counter: {counter}</h1>
      </div>
    </div>
  );
}

export default App;
