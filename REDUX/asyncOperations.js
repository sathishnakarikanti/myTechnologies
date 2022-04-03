const { createStore, applyMiddleware } = require("redux");
const axios = require('axios');
const thunk = require('redux-thunk').default
//action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";


//initial state
const initialState = {
    users: [],
    error: "",
    isLoading: false
}

//which type of  action return to pass reducer
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        data: users
    }
}



const fetchUsersFail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        data: error
    }
}


//Reducer to do what type of action 
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state, isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                isLoading: false, error: "", users: action.data
            }
        case FETCH_USERS_FAIL:
            return {
                isLoading: false, users: [], error: action.data
            }

        default: return state;



    }
}


const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(Response => {
                let users = Response.data.map(user => user.name);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFail(error))
            })
    }
}

const store = createStore(usersReducer, applyMiddleware(thunk));
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers());

