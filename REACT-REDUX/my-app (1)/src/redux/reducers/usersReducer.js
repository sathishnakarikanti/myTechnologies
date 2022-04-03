import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL, } from '../actions/actiontypes'

const initialState = {
    users: [],
    error: '',
    isLoading: false
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state, isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                isLoading: false, users: action.data, error: ''
            }
        case FETCH_USER_FAIL:
            return {
                isLoading: false, users: [], error: action.data
            }
       
        default:
            return state
    }
}
export default usersReducer;