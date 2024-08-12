import { useState } from "react";
const Counter = (props) => {
  const [counter, setCounter] = useState(props.productPrice);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <span>{counter}</span>
      <span>{props.children}</span>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
