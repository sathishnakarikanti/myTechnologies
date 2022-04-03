import {ADD_USER} from "../actions/actiontypes"

const initialState ={
users:[]
}

const customerReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_USER :
           return {
                numberOfCustomers : State.numberOfCustomers
            }
            default :
             return  state
            

    }
}
export default customerReducer;