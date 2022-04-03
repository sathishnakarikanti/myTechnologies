import { BUY_LAPTOP } from "../actions/actiontypes"

const initialState = {
    numberOfLaptops: 100
}
const laptopReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_LAPTOP:
            return {
                numberOfLaptops: state.numberOfLaptops-1
            }

        default:
            return state;
    }
}
export default laptopReducer;


