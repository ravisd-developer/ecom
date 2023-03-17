import { CART_CONSTANTS } from "../constants/constants";
const localCart =  JSON.parse(localStorage.getItem('cartItems'));
console.log(localCart)
const initialState = {
    cartitems: localCart,
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_CONSTANTS.GET_CART_ITEMS:
            return { ...state, cartitems: payload }
        case CART_CONSTANTS.SET_CART_ITEMS:
            initialState.cartitems.push(payload)
            localStorage.setItem('cartItems', JSON.stringify(initialState.cartitems));
            return { ...state, cartitems: initialState.cartitems }
        default:
            return state;
    }
}


export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case CART_CONSTANTS.set_CART_ITEMS:
            return { ...state, ...payload };
        default:
            return state;
    }
};