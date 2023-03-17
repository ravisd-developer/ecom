import { CART_CONSTANTS } from "../constants/constants";

export const getCartItems = (product) => {
    return {
        type: CART_CONSTANTS.GET_CART_ITEMS,
        payload : product,
    }
}
export const getCartCount = (product) => {
    return {
        type: CART_CONSTANTS.GET_CART_COUNT,
        payload : product,
    }
}
export const setCartItems = (product) => {
    return {
        type: CART_CONSTANTS.SET_CART_ITEMS,
        payload : product,
    }
}
export const setCartItemsCount = (product) => {
    return {
        type: CART_CONSTANTS.SET_CART_COUNT,
        payload : product,
    }
}
export const delCartItems = (product) => {
    return {
        type: CART_CONSTANTS.DEL_CART_ITEMS,
        payload : product,
    }
}