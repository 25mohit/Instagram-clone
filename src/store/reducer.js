import { act } from "react-dom/test-utils";
import { createStore } from "redux";

const initialState ={
        users : [],
        loggedInUsers : null
}
const reducer = (state = initialState , action) =>{
        switch(action.type) {
            case  'REGISTER' :
            return{
                    ...state,
                    users : [...state.users, action.payload ]
            }
            case 'LOGIN' :
                return {
                    ...state,
                    loggedInUsers : action.payload
                }
            case 'LOGOUT' :
                return {
                    ...state,
                    loggedInUsers : null
                }
            default :
            return state;
        }
}
export default createStore( reducer )