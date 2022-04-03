const { createStore } = require("redux")



//type
// const BUY_BIKE = "BUY_BIKE"

const buyBike = () => {
    return {
        type: "BUY_BIKE"
    }
}


//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_BIKE":
            return {
                      numberOfBikes:state.numberOfBikes+2
            }
            default :
            return state;
    }

}


//store
initialState = {
    numberOfBikes: 100
}
const store = createStore(reducer)
console.log(store);
store.subscribe(() => {console.log(store.getState())})
store.dispatch(buyBike());
store.dispatch(buyBike());
store.dispatch(buyBike());
store.dispatch(buyBike());
store.dispatch(buyBike());



