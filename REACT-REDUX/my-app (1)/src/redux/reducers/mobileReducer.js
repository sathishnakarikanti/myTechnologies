import {BUY_MOBILE} from '../actions/actiontypes'

const initialState ={
     numberOfMobiles : 1000
}
const mobileReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_MOBILE:
            return {
                numberOfMobiles: state.numberOfMobiles-1
            }
            default :
            return state
    
            
    }
}
export default mobileReducer;