import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  value: 2,
  showCounter: true,
};

const counterSlice=createSlice({
  name:"counter", // yapacağım işlemin neyle ilgili olduğu unque olmalı
  initialState:initialCounterState,  //stateleri verdik 
  reducers:{
    increment(state){    //burada reducer fonksiyonlarımızı yazıyoruz state dediğimiz aslında initialState.
      state.value++   //burada ...state yapmadık çünkü zaten kendi tüm stateleri otomatik alıyor
    },
    increase(state,action){
      state.value+=action.payload; //birden fazla veri geliyosa örneğin amount geldi action.payload.amount ile ulaş
    },
    decrement(state){
      state.value--;
    },
    toggleCounter(state){
      state.showCounter=!state.showCounter;
    }
  }
});
const initialAuthState={
  isAuthenticated:false,
}
const authSlice=createSlice({
name:"authentication",
initialState:initialAuthState,
reducers:{
  login(state){
    state.isAuthenticated=true;
  },
  logout(state){
    state.isAuthenticated=false;
  }
}
});


const store = configureStore({
  reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}  //counterSlice içindeki reducerları dışarı aktardık
});

export const counterActions=counterSlice.actions;  
export const authActions=authSlice.actions;
export default store;
