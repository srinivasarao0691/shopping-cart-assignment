import { api } from '../../Helpers/axiosInstance';
import { actions } from '../actionTypes'

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const result = await api.get('/categories');
            result && dispatch({
                type: actions.GET_CATEGORIES,
                payload: result.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchAllProducts = () => {
    return async (dispatch) => {
        try {
            const result = await api.get('/products');
            result && dispatch({
                type: actions.GET_ALL_PRODUCTS,
                payload: result.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}