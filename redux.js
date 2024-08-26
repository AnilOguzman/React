const redux=require("redux");

const counterReducer = (state={counter:0},action) => {
    if(action.type==="INCREMENT"){
        return {
            counter:state.counter+2,
        }
    }
    if(action.type==="DECREMENT"){
        return{
            counter:state.counter-1,
        }
    }
}

const store=redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState=store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber); //state ne zaman güncellenirse içindeki fonksiyon ozaman çalışır. 
                                    //O yüzden bunu ister başa ister sona yaz her türlü çalışır.tabi öncesinde store initialize edilmeli.


store.dispatch({type:"INCREMENT"}) //ne yapmak istiyorsak onu gönderiyoruz özellik olarak istediğini verebilirsin mesela a:.... yazarsın reducerda
                                   //action.a diye değeri alırsın.
store.dispatch({type:"DECREMENT"})