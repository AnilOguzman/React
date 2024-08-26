import {createStore} from "redux"; //import redux yapma böyle yap okumuyo yoksa

const initialState={
    counter: 2,
    showCounter:false,
}

const counterReducer = (state=initialState, action) => {
    if (action.type === "INCREMENT") {
      return {
        ...state,       // doğru kullanım budur çünkü biz burda statelerin kopyasını gönderiyoruz eğer sadece counter gönderirsek 
        counter: state.counter + 1,      // showCounter gitmez arttırma tuşuna bastığımızda sayıyı göremeyiz ancak ...state ile hepsini gönderdik
      };
    }
    if (action.type === "INCREASE") {
      return {
        ...state,
        counter: state.counter + action.five,
      };
    }
    if (action.type === "DECREMENT") {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    if(action.type==="TOGGLE"){
        return{
            ...state,
            showCounter: !state.showCounter,
        }
    }
    return state;
  };
  
  const store = createStore(counterReducer);
  
  export default store;
  