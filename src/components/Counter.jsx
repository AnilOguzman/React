import { useSelector,useDispatch } from "react-redux";



const Counter = () => {
  const counter = useSelector((state) => {
    return (state.counter);
  });
  const showCounter=useSelector((state)=>{
    return(state.showCounter);
  })

  const dispatch=useDispatch();


  const incrementHandler = () => {
    dispatch({type:"INCREMENT"});
  };
  const increaseHandler = () => {
    dispatch({type:"INCREASE",five:5});
  };
  const decrementHandler = () => {
    dispatch({type:"DECREMENT"})
  };
  const toggleCounterHandler = () => {
    dispatch({type:"TOGGLE"})
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrease</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
