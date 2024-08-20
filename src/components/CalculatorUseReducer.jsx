import { useReducer } from "react";
import "./Calculator.css";

function reducer(state, action) {
  switch (action.type) {
    case "NUMBER1_SET":
      return { ...state, number1: Number(action.payload) };
    case "NUMBER2_SET":
      return { ...state, number2: Number(action.payload) };
    case "RESULT_SET":
      return { ...state, result: Number(action.payload) };
    default:
      throw new Error("Invalid action type");
  }
}

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};
const CalculatorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumber1Change = (e) =>{
    dispatch({type:"NUMBER1_SET",payload:Number(e.target.value)})
  }
  const handleNumber2Change = (e) =>{
    dispatch({type:"NUMBER2_SET",payload:Number(e.target.value)})
  }
  const handleResult = () =>{
    dispatch({type:"RESULT_SET",payload:state.number1+state.number2})
  }

  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input className="form-input" type="number" id="number1" value={state.number1} onChange={handleNumber1Change}/>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input className="form-input" type="number" id="number2" value={state.number2} onChange={handleNumber2Change} />
        </div>
        <button className="form-button" onClick={handleResult}>Add</button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input className="form-input" type="number" id="result" value={state.result} readOnly />
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
