import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter"
import authSlice from "./auth"



const store = configureStore({
  reducer:{counter:counterSlice,auth:authSlice}  //counterSlice içindeki reducerları dışarı aktardık
});


export default store;
