import  {BUY_LAPTOP ,BUY_MOBILE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAIL,ADD_USER} from './actiontypes'
import axios from "axios"
export const buyLaptop = () => {
    return {
    type : BUY_LAPTOP
    }
}
export const buyMobile = () => {
    return {
        type : BUY_MOBILE
    }
}
export const fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUEST
        
    }
}
export const fetchUserSuccess = (users) => {
    return {
        type : FETCH_USER_SUCCESS,
        data : users
    }
}
export const fetchUserfail = () => {
    return {
        type : FETCH_USER_FAIL,
        data : error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            let users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch( error => {
            dispatch(fetchUserfail(error))
        })
    }
}

// export const gettingData = () => {
//     type : GETTING_STORE_DATA
//     gettingdata: data
// }

export const insert_handleSubmit = (user) => {
    return {
        type : ADD_USER,
        payload : user
    }
}

 export const thunk_action_insertHandleSubmit = (data) => {
    return function(dispatch){
        axios.post("http://localhost:3000/",data)
        .then(data =>{
            console.log(data)
            dispatch(insert_handleSubmit(data))
            .catch(error => {
                console.log(error);
          });
  });
    }
}
