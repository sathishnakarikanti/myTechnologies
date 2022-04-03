import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import laptopReducer from './reducers/laptopReducer';
import mobileReducer from './reducers/mobileReducer';
import usersReducer from './reducers/usersReducer';
import customerReducer from './reducers/customerReducer'


const rootReducer = combineReducers({
    laptops:laptopReducer,
    mobiles:mobileReducer,
    users:usersReducer,
customers:customerReducer,
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;