const { createStore, combineReducers, applyMiddleware} = require("redux")
const logger =  require("redux-logger").default

const BUY_BIKE = "BUY_BIKE"
const BUY_CAR = "BUY_CAR"

const buyBike1 = () => {
    return {
        type : BUY_BIKE
    }
}
const buyCar1 = () => {
    return {
        type : BUY_CAR
    }
}

const buyBike2 = (state = initialBikes, action) => {
    switch (action.type) {
        case BUY_BIKE:
            return {
                numberOfBike: state.numberOfBikes - 1
            }
        default:
            return state

    }

}
const buyCar2 = (state = initialCars, action) => {
    switch (action.type) {
        case BUY_CAR:
            return {
                numberOfCars: state.numberOfCars + 1
            }
        default:
            return state
    }
}
const initialCars = {
    numberOfCars : 20
}
const initialBikes = {
    numberOfBikes :50
}

const rootReducer = combineReducers({Bike:buyBike2,Car:buyCar2})
const store = createStore(rootReducer,applyMiddleware(logger))
store.subscribe(() =>{console.log(store.getState())})
store.dispatch(buyCar1());
store.dispatch(buyBike1());
store.dispatch(buyCar1());
store.dispatch(buyBike1());

