

const { createStore, combineReducers, applyMiddleware } = require("redux")
const logger = require("redux-logger").default
//initialstate needed as per redux concept
const BUY_LAPTOP = "BUY_LAPTOP";
const BUY_MOBILE = "BUY_MOBILE";

const initialLaptops = {
    numOfLaptops: 100
}

const initialMobiles = {
    numOfMobiles: 1000
}

//action
const buyLaptop = () => {

    return {
        type: "BUY_LAPTOP"

    }
}

const buyMobile = () => {
    return {
        type: "BUY_MOBILE"
    }
}

//reducer 
const laptopReducer = (state = initialLaptops, action) => {
    // if(action.type === "BUY_LAPTOP"){
    //     return{ numOfLaptops : state.numOfLaptops-1}
    // }
    // else{
    //     return state;//initialstate
    // }

    switch (action.type) {
        case "BUY_LAPTOP":return { numOfLaptops: state.numOfLaptops - 1 }
        default: return state;
    }
}

const mobileReducer = (state = initialMobiles, action) => {
    switch (action.type) {
        case "BUY_MOBILE": return { numOfMobiles: state.numOfMobiles - 2 }
        default: return state;
    }
}

//store(application ki subscribe kaniki)
const rootReducer = combineReducers({laptops:laptopReducer,mobiles:mobileReducer})
const store = createStore(rootReducer,applyMiddleware(logger));
//  console.log(store); 
store.subscribe(() => { console.log(store.getState()) })

store.dispatch(buyLaptop());
store.dispatch(buyMobile());

