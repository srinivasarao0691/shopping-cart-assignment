import { actions } from '../actionTypes'
const initialState = {
    categories: [],
    products: [],
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case actions.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state

    }
}