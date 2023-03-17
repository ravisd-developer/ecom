import { combineReducers } from "redux";
import  {cartReducer, getCartCount}  from "./cartReducer";
const reducer =  combineReducers({
    allCartItems:cartReducer,
})

export default reducer;