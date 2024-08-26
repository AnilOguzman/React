import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 2,
  showCounter: true,
};

const counterSlice=createSlice({
  name:"counter", // yapacağım işlemin neyle ilgili olduğu unque olmalı
  initialState,  //stateleri verdik 
  reducers:{
    increment(state){    //burada reducer fonksiyonlarımızı yazıyoruz state dediğimiz aslında initialState.
      state.counter++   //burada ...state yapmadık çünkü zaten kendi tüm stateleri otomatik alıyor
    },
    increase(state,action){
      state.counter+=action.payload; //birden fazla veri geliyosa örneğin amount geldi action.payload.amount ile ulaş
    },
    decrement(state){
      state.counter--;
    },
    toggleCounter(state){
      state.showCounter=!state.showCounter;
    }
  }
});



const store = configureStore({
  reducer:counterSlice.reducer  //counterSlice içindeki reducerları dışarı aktardık
});

export const counterActions=counterSlice.actions;  

export default store;
